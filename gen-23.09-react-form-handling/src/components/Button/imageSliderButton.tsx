import { ButtonProps } from "../../interfaces/componentInterface";

const ImageSliderButton = ({ icon, className, ...otherProps }: ButtonProps) => {
  return (
    <button
      className={`absolute top-1/3 rounded-full bg-white p-1 shadow-md transition-all duration-300 hover:shadow-lg disabled:opacity-50 ${className}`}
      {...otherProps}
    >
      {icon}
    </button>
  );
};

export default ImageSliderButton;
