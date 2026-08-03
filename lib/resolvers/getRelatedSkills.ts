import { toolkitData } from "../data/toolkit";
import { projectsData } from "../data/projects";
import { ToolkitItem, EntityId } from "../types";

/**
 * Safely fetches toolkit items by their IDs. 
 * Ignores any IDs that no longer exist in the database.
 */
export function getSkillsByIds(skillIds: EntityId[]): ToolkitItem[] {
  return skillIds
    .map((id) => toolkitData.find((skill) => skill.id === id))
    .filter((item): item is ToolkitItem => item !== undefined);
}

/**
 * Fetches all skills associated with a specific project.
 */
export function getRelatedSkillsForProject(projectId: EntityId): ToolkitItem[] {
  const project = projectsData.find((p) => p.id === projectId);
  
  if (!project) {
    console.warn(`Project with ID ${projectId} not found.`);
    return [];
  }
  
  return getSkillsByIds(project.relatedToolkitIds);
}