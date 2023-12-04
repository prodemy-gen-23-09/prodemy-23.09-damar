import { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ImageSliderButton } from "../Button";
import { ProductMediaProps } from "../../interfaces/interface";

const ProductDetailMedia = ({ productName, imageUrls }: ProductMediaProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [leftArrowDisable, setLeftArrowDisable] = useState(true);
  const [rightArrowDisable, setRightArrowDisable] = useState(false);
  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);

  const handleClickThumbnail = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const handleHorizontalScroll = (
    elementRef: HTMLDivElement | null,
    speed: number,
    distance: number,
    step: number,
  ) => {
    let scrollAmount = 0;
    if (elementRef != null) {
      const slideTimer = setInterval(() => {
        elementRef.scrollLeft += step;
        scrollAmount += Math.abs(step);

        if (scrollAmount >= distance) {
          clearInterval(slideTimer);
        }

        if (elementRef.scrollLeft === 0) {
          setLeftArrowDisable(true);
        } else if (
          elementRef.scrollLeft >=
          elementRef.scrollWidth - elementRef.clientWidth - 2
        ) {
          setRightArrowDisable(true);
        } else {
          setLeftArrowDisable(false);
          setRightArrowDisable(false);
        }
      }, speed);
    }
  };

  return (
    <div className="flex w-full flex-col gap-y-5 md:w-3/12">
      <img
        src={selectedImage}
        alt={productName}
        className="cursor-zoom-in p-3 transition-all duration-300 hover:scale-125 md:rounded-lg"
      />
      <div className=" relative overflow-hidden">
        <ImageSliderButton
          className="left-0"
          onClick={() =>
            handleHorizontalScroll(elementRef.current, 10, 100, -10)
          }
          hidden={leftArrowDisable}
          disabled={leftArrowDisable}
          icon={<FaAngleLeft />}
        />
        <div
          className="flex flex-nowrap gap-x-1 overflow-hidden"
          ref={elementRef}
        >
          {imageUrls?.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={productName + index}
              className="inline-block w-1/4 rounded-lg border border-gray-200 px-2 hover:cursor-pointer hover:bg-gray-200 md:p-2"
              onClick={() => handleClickThumbnail(imageUrl)}
            />
          ))}
        </div>
        <ImageSliderButton
          className="right-0"
          onClick={() =>
            handleHorizontalScroll(elementRef.current, 10, 100, 10)
          }
          hidden={rightArrowDisable}
          disabled={rightArrowDisable}
          icon={<FaAngleRight />}
        />
      </div>
    </div>
  );
};

export default ProductDetailMedia;
