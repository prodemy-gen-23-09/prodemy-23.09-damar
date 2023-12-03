import { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  className?: string | undefined;
  onClick?: () => void;
}

const IconButton = ({ icon, className, ...otherProps }: IconButtonProps) => {
  return (
    <button className={`self-center ${className}`} {...otherProps}>
      {icon}
    </button>
  );
};

export default IconButton;
