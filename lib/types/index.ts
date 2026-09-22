import type { ComponentType } from "react";

export type IconComponent = ComponentType<{ className?: string }>;

export type Social = {
  label?: string;
  value?: string;
  href: string;
  description?: string;
  icon: IconComponent;
};

export type DocumentItem = {
  id: string;
  title: string;
  meta: string;
  tags: string[];
  fileUrl?: string;
  viewerMetadata?: DocumentMetadata;
  aspectRatio?: number;
  viewerOptions?: ViewerOptions;
};

export type ViewerOptions = {
  allowDownload: boolean;
};

export type DocumentMetadata = {
  title?: string;
  category?: string;
  issuer?: string;
  issuedDate?: string;
  documentType?: string;
  verificationStatus?: string;
  description?: string;
  lastUpdated?: string;
  authors?: string;
  publicationDate?: string;
  publisher?: string;
  entries?: { label: string; value: string }[];
};

export type DocumentCollection = {
  id: string;
  title: string;
  count: string;
  icon: IconComponent;
  skills: string[];
  progress: string;
  label?: string;
  items: DocumentItem[];
};

export type ProfessionalDocument = {
  id: string;
  title: string;
  description: string;
  updated: string;
  fileType: string;
  fileUrl: string;
  viewerMetadata?: DocumentMetadata;
  aspectRatio?: number;
  viewerOptions: ViewerOptions;
};

type CredentialBase = {
  title: string;
  issuer: string;
  logoSrc?: string;
};

export type Credential =
  | (CredentialBase & { action: "viewer"; pdfPath: string; viewerMetadata?: DocumentMetadata; aspectRatio?: number; viewerOptions: ViewerOptions })
  | (CredentialBase & { action: "verification"; verificationUrl: string });

export type CaseFile = {
  id: string;
  type: string;
  title: string;
  summary: string;
  headline?: string;
  proofPoints?: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  isAvailable: boolean;
  metadata: {
    role: string;
    client?: string;
    audience?: string;
    focusLabel?: string;
    focus: string[];
    status: string;
    year?: string;
  };
};

export type EcosystemNode = {
  id: string;
  relationship: string;
  name: string;
  role: string;
  contribution: string;
  outcomes: string[];
  connections: string[];
  links: { label: string; href: string }[];
};

export type Capability = {
  tool: string;
  proficiency: string;
  application: string;
  subTools?: string;
  evidence?: { label: string; href: string }[];
};

export type CapabilityGroup = {
  category: string;
  icon: IconComponent;
  delay: number;
  competencies: Capability[];
};

export type PreviewDocument = {
  title: string;
  fileUrl: string;
  metadata?: DocumentMetadata;
  aspectRatio?: number;
  mode?: "document" | "resume";
  viewerOptions?: ViewerOptions;
};
