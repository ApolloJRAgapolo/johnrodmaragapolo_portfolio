import type { ComponentType } from "react";

export type EntityId = string;
export type IconComponent = ComponentType<{ className?: string }>;
export type RelatedEntity = {
  id: EntityId;
  title: string;
};

export type Profile = {
  name: string;
  title: string;
  degree: string;
  location: string;
  tagline: string;
  bio: string;
  status: string[];
  avatarUrl: string;
};

export type Timeline = {
  start: string;
  end: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  overview: string;
  problem: string;
  objectives: string[];
  role: string;
  stakeholders: string[];
  architecture: string;
  timeline: Timeline;
  challenges: string[];
  lessonsLearned: string[];
  outcome: string;
  links: Record<string, string>;
  relatedToolkitIds: string[];
  relatedLearningIds: string[];
  relatedCommunityIds: string[];
  relatedAchievementIds: string[];
  relatedCareerIds: string[];
};

export type Community = {
  id: string;
  organization: string;
  role: string;
  description: string;
  timeline: Timeline;
  relatedProjectIds: string[];
  relatedAchievementIds: string[];
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  date?: string;
  relatedProjectIds: string[];
  relatedCommunityIds: string[];
};

export type ToolkitItem = {
  id: string;
  name: string;
  category: string;
  description: string;
};

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
  fileUrl: string;
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
};

export type Credential = {
  title: string;
  issuer: string;
  logoSrc?: string;
  url: string;
};

export type CaseFile = {
  id: string;
  type: string;
  title: string;
  summary: string;
  isAvailable: boolean;
  metadata: {
    role: string;
    client: string;
    focus: string[];
    status: string;
    year: string;
  };
};

export type EcosystemNode = {
  id: string;
  stars: string;
  name: string;
  role: string;
  contribution: string;
  outcomes: string[];
  connections: string[];
  links: { label: string; href: string }[];
};

export type OverviewStats = {
  version: string;
  caseFiles: number;
  credentials: number;
  ecosystemNodes: number;
  capabilities: number;
  lastUpdated: string;
};

export type Capability = {
  tool: string;
  proficiency: string;
  application: string;
  subTools?: string;
};

export type CapabilityGroup = {
  category: string;
  icon: IconComponent;
  delay: number;
  competencies: Capability[];
};
