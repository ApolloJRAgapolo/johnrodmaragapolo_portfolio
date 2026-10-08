import type { ElementType, ReactNode } from "react";

type GlowingCardProps<T extends ElementType = "div"> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

export default function GlowingCard<T extends ElementType = "div">({ as, className = "", children, ...props }: GlowingCardProps<T>) {
  const Tag = (as || "div") as ElementType;
  return <Tag className={`glow-card rounded-lg ${className}`} {...props}>{children}</Tag>;
}
