import { ButtonProps } from "../../interfaces/componentInterface";

const Button = ({ children, className, variant, ...props }: ButtonProps) => {
  if (variant === "outline") {
    return (
      <button
        className={`self-center rounded-full p-2 px-5 font-semibold text-primary outline outline-1 outline-secondary hover:bg-accent hover:text-white md:hover:cursor-pointer ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }

  if (variant === "primary") {
    return (
      <button
        className={`self-center rounded-full bg-primary p-2 px-5 font-semibold text-white hover:bg-accent md:hover:cursor-pointer ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
};

export default Button;
