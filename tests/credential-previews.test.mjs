import assert from "node:assert/strict";
import test from "node:test";
import { createDataLoader } from "../scripts/lib/load-project-data.mjs";

const load = createDataLoader();
const groups = load("lib/data/credentials.ts");
const credentials = Object.values(groups).flat();
const { allCertificates, professionalDocs } = load("lib/data/documents.ts");
const { getCredentialDocument, getCredentialThumbnail } = load("lib/data/credential-previews.ts");
const { getDocumentThumbnail } = load("lib/data/document-previews.ts");

test("every current credential has a thumbnail for its actual PDF", () => {
  for (const credential of credentials) {
    const document = getCredentialDocument(credential);
    assert.ok(document, `Missing PDF for ${credential.title}`);
    const thumbnail = getCredentialThumbnail(document);
    assert.ok(thumbnail, `Missing thumbnail for ${credential.title}`);
    assert.ok(thumbnail.width > 0 && thumbnail.height > 0);
    assert.match(thumbnail.src, /^\/credential-previews\/.+\.webp$/);
  }
});

test("existing PDF previews preserve their full metadata and download rules", () => {
  for (const credential of credentials.filter(item => item.action === "viewer")) {
    assert.deepEqual(getCredentialDocument(credential), {
      title: credential.title,
      fileUrl: credential.pdfPath,
      metadata: credential.viewerMetadata,
      aspectRatio: credential.aspectRatio,
      viewerOptions: credential.viewerOptions,
    });
  }
});

test("issuer credentials resolve by exact title and retain the original records", () => {
  const before = JSON.stringify(groups);
  for (const credential of credentials.filter(item => item.action === "verification")) {
    const matches = allCertificates.filter(item => item.title === credential.title);
    assert.equal(matches.length, 1, `Ambiguous archive match for ${credential.title}`);
    const document = getCredentialDocument(credential);
    assert.equal(document.fileUrl, matches[0].fileUrl);
    assert.deepEqual(document.metadata, matches[0].viewerMetadata);
    assert.deepEqual(document.viewerOptions, matches[0].viewerOptions);
    assert.ok(credential.verificationUrl.startsWith("https://"));
  }
  assert.equal(JSON.stringify(groups), before);
});

test("an unrelated issuer record cannot inherit someone else's certificate", () => {
  assert.equal(getCredentialDocument({ title: "Data Literacy Professional Plus", issuer: "Example issuer", kind: "Professional certification", action: "verification", verificationUrl: "https://example.com/record" }), undefined);
  assert.equal(getCredentialThumbnail(undefined), undefined);
});

test("the entire certificate archive shares accurate first-page thumbnails", () => {
  const sources = new Map();
  for (const document of allCertificates) {
    if (!document.fileUrl) continue;
    const thumbnail = getDocumentThumbnail(document.fileUrl);
    assert.ok(thumbnail, `Missing archive thumbnail for ${document.title}`);
    assert.equal(thumbnail, getDocumentThumbnail(decodeURIComponent(document.fileUrl)));
    const existingSource = sources.get(thumbnail.src);
    if (existingSource) assert.equal(existingSource, decodeURIComponent(document.fileUrl), "Different PDFs must not share a thumbnail");
    sources.set(thumbnail.src, decodeURIComponent(document.fileUrl));
  }
});

test("unavailable documents use the fallback rather than another record's image", () => {
  assert.equal(getDocumentThumbnail(undefined), undefined);
  assert.equal(getDocumentThumbnail("/certificates/not-published.pdf"), undefined);
  for (const document of professionalDocs) assert.equal(getDocumentThumbnail(document.fileUrl), undefined);
});
