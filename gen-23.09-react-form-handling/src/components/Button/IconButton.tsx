import { ButtonProps } from "../../interfaces/component";

const IconButton = ({
  icon,
  children,
  className,
  type,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      className={`self-center disabled:opacity-25 md:hover:cursor-pointer md:hover:disabled:cursor-not-allowed ${className}`}
      type={type ? type : `button`}
      {...otherProps}
    >
      {icon ? icon : children}
    </button>
  );
};

export default IconButton;
