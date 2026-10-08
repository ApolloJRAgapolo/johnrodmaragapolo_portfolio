"use client";

import ProjectImageViewer from "@/components/features/case-files/ProjectImageViewer";
import type { ProjectDiagram } from "@/lib/types";

type Props = {
  diagrams: ProjectDiagram[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
};

export default function DiagramViewer({ diagrams, ...props }: Props) {
  return <ProjectImageViewer images={diagrams} projectName="BLMS" category="Design artifact" contentName="diagram" {...props} />;
}
