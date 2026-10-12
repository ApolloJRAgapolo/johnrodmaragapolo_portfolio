type Point = { x: number; y: number };

/** Round only the corners; connector endpoints stay attached to their cards. */
export function connectionPath(points: Point[], radius = 12): string {
  const route = points.filter((point, index) =>
    index === 0 || point.x !== points[index - 1].x || point.y !== points[index - 1].y,
  );
  if (route.length < 2) return "";
  const value = (n: number) => Math.round(n * 10) / 10;
  const position = (point: Point) => `${value(point.x)} ${value(point.y)}`;
  let path = `M ${position(route[0])}`;

  for (let index = 1; index < route.length - 1; index++) {
    const previous = route[index - 1];
    const corner = route[index];
    const next = route[index + 1];
    const incoming = Math.hypot(corner.x - previous.x, corner.y - previous.y);
    const outgoing = Math.hypot(next.x - corner.x, next.y - corner.y);
    const distance = Math.min(radius, incoming / 2, outgoing / 2);
    const before = {
      x: corner.x + (previous.x - corner.x) * distance / incoming,
      y: corner.y + (previous.y - corner.y) * distance / incoming,
    };
    const after = {
      x: corner.x + (next.x - corner.x) * distance / outgoing,
      y: corner.y + (next.y - corner.y) * distance / outgoing,
    };
    path += ` L ${position(before)} Q ${position(corner)} ${position(after)}`;
  }
  return `${path} L ${position(route[route.length - 1])}`;
}
