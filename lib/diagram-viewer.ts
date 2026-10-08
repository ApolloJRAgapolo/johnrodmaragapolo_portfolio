export function getDiagramFitScale(width: number, height: number, viewportWidth: number, viewportHeight: number) {
  // Leave room around the entire diagram, including tall use cases and wide class diagrams.
  const availableWidth = Math.max(viewportWidth - 32, 1);
  const availableHeight = Math.max(viewportHeight - 32, 1);
  return Math.min(availableWidth / width, availableHeight / height, 1);
}

export function getDiagramZoomLimit(fitScale: number) {
  // Always allow both a useful enlargement and the display image's actual pixel size.
  return Math.max(4, 1 / fitScale);
}
