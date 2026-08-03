import { communitiesData } from "../data/communities";
import { projectsData } from "../data/projects";
import { Community, EntityId } from "../types";

/**
 * Safely fetches communities by their IDs.
 */
export function getCommunitiesByIds(communityIds: EntityId[]): Community[] {
  return communityIds
    .map((id) => communitiesData.find((community) => community.id === id))
    .filter((item): item is Community => item !== undefined);
}

/**
 * Fetches all communities associated with a specific project.
 */
export function getRelatedCommunitiesForProject(projectId: EntityId): Community[] {
  const project = projectsData.find((p) => p.id === projectId);
  
  if (!project) return [];
  
  return getCommunitiesByIds(project.relatedCommunityIds);
}