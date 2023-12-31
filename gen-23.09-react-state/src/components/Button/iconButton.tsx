import { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  className?: string | undefined;
  onClick?: () => void;
}

const IconButton = ({
  icon,
  children,
  className,
  type,
  ...otherProps
}: IconButtonProps) => {
  return (
    <button
      className={`self-center md:hover:cursor-pointer disabled:opacity-25 md:hover:disabled:cursor-not-allowed ${className}`}
      type={type ? type : `button`}
      {...otherProps}
    >
      {icon ? icon : children}
    </button>
  );
};

export default IconButton;
