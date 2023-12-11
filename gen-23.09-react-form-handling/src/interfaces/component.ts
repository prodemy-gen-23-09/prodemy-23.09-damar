import { ButtonHTMLAttributes, ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "link";
  h?: string;
  w?: string;
  onClick?: () => void;
}

export interface LinkButtonProps extends ButtonProps {
  to: string;
}
