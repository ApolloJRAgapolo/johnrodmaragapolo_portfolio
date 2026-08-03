export type EntityId = string;
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
