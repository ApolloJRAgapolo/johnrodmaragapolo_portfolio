/** Give every credential a stable destination, including selected folder cards. */
export function getCredentialAnchor(title: string) {
  return `credential-${title.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}
