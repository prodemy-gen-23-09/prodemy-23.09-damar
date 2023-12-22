import { ButtonProps } from "../../interfaces/componentInterface";

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
      {icon}{children && children}
    </button>
  );
};

export default IconButton;
