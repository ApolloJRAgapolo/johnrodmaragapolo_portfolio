import { achievementsData } from "../data/achievements";
import { projectsData } from "../data/projects";
import { Achievement, EntityId } from "../types";

export function getAchievementsByIds(achievementIds: EntityId[]): Achievement[] {
  return achievementIds
    .map((id) => achievementsData.find((achievement) => achievement.id === id))
    .filter((item): item is Achievement => item !== undefined);
}

export function getRelatedAchievementsForProject(projectId: EntityId): Achievement[] {
  const project = projectsData.find((item) => item.id === projectId);

  if (!project) {
    return [];
  }

  return getAchievementsByIds(project.relatedAchievementIds);
}