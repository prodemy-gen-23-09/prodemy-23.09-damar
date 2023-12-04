import { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  className?: string | undefined;
  to: string;
  onClick?: () => void;
}

const LinkButton = ({
  icon,
  children,
  className,
  type,
  to,
  ...otherProps
}: LinkButtonProps) => {
  return (
    <Link to={to} className={className}>
      <button
        className={`self-center disabled:opacity-25 md:hover:cursor-pointer md:hover:disabled:cursor-not-allowed ${className}`}
        type={type ? type : `button`}
        {...otherProps}
      >
        {icon ? icon : children}
      </button>
    </Link>
  );
};

export default LinkButton;
