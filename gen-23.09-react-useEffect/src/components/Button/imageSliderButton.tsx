import { ButtonHTMLAttributes, ReactNode } from "react";

interface ImageSliderProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  className?: string | undefined;
  onClick?: () => void;
}

const ImageSliderButton = ({
  icon,
  className,
  ...otherProps
}: ImageSliderProps) => {
  return (
    <button
      className={`p-1 top-1/3 absolute bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 ${className}`}
      {...otherProps}
    >
      {icon}
    </button>
  );
};

export default ImageSliderButton;
