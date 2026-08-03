import { projectsData } from "../data/projects";
import { Project, EntityId } from "../types";

/**
 * Finds all projects that utilized a specific skill/tool.
 */
export function getRelatedProjectsForSkill(skillId: EntityId): Project[] {
  return projectsData.filter((project) => 
    project.relatedToolkitIds.includes(skillId)
  );
}

/**
 * Finds all projects developed under a specific community or organization.
 */
export function getRelatedProjectsForCommunity(communityId: EntityId): Project[] {
  return projectsData.filter((project) => 
    project.relatedCommunityIds.includes(communityId)
  );
}

/**
 * Fetches a single project by its SEO-friendly slug (for dynamic routing).
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug);
}