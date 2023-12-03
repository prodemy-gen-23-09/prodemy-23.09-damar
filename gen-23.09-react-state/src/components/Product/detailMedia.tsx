import { useRef, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface ProductMediaProps {
  productName: string;
  imageUrls: string[];
}

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
    step: number
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
    <div className="flex flex-col w-full md:w-3/12 gap-y-5">
      <img
        src={selectedImage}
        alt={productName}
        className="md:rounded-lg p-3 hover:scale-125 transition-all duration-300 cursor-zoom-in"
      />
      <div className="px-3 overflow-hidden relative">
        <button
          className="p-1 top-1/3 left-0 absolute bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() =>
            handleHorizontalScroll(elementRef.current, 10, 100, -10)
          }
          hidden={leftArrowDisable}
          disabled={leftArrowDisable}
        >
          <FaAngleLeft />
        </button>
        <div
          className="flex flex-nowrap overflow-hidden gap-x-1"
          ref={elementRef}
        >
          {imageUrls?.map((imageUrl, index) => (
            <img
              src={imageUrl}
              alt={productName + index}
              className="w-1/4 inline-block rounded-lg border border-gray-200 px-2 md:p-2 hover:bg-gray-200 hover:cursor-pointer"
              onClick={() => handleClickThumbnail(imageUrl)}
            />
          ))}
        </div>
        <button
          className="p-1 top-1/3 right-0 absolute bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          onClick={() =>
            handleHorizontalScroll(elementRef.current, 10, 100, 10)
          }
          hidden={rightArrowDisable}
          disabled={rightArrowDisable}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default ProductDetailMedia;
