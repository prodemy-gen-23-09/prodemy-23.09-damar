import { Link } from "react-router-dom";
import { LinkButtonProps } from "../../interfaces/component";

const LinkButton = ({
  icon,
  children,
  className,
  type,
  to,
  ...otherProps
}: LinkButtonProps) => {
  return (
    <Link to={to}>
      <button
        className={`self-center rounded-full p-1 md:hover:cursor-pointer md:hover:bg-gray-200 ${className}`}
        type={type ? type : `button`}
        {...otherProps}
      >
        {icon ? icon : children}
      </button>
    </Link>
  );
};

export default LinkButton;
