import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const baseStyle =
    "rounded-full px-6 py-3 font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-gray-900 text-white hover:bg-gray-800",
    secondary:
      "border border-gray-300 text-gray-900 hover:bg-gray-100",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
}