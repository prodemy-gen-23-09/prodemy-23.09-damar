import { useState } from "react";

interface ProductMediaProps {
  productName: string;
  imageUrls: string[];
}

const ProductDetailMedia = ({ productName, imageUrls }: ProductMediaProps) => {
  const [selectedImage, setSelectedImage] = useState(imageUrls[0]);

  const handleClickThumbnail = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="flex flex-col w-full md:w-3/12 gap-y-5">
      <img
        src={selectedImage}
        alt={productName}
        className="md:rounded-lg p-3 hover:scale-125 transition-all duration-300 cursor-zoom-in"
      />
      <div className="overflow-hidden">
        <div className="flex flex-nowrap overflow-x-auto snap-mandatory min-w-[100vw] gap-x-3">
          {imageUrls?.map((imageUrl, index) => (
            <img
              src={imageUrl}
              alt={productName + index}
              className="h-20 inline-block rounded-lg border snap-start border-gray-200 px-2 md:p-2 hover:bg-gray-200 hover:cursor-pointer"
              onClick={() => handleClickThumbnail(imageUrl)}
            />
          ))}          
        </div>
      </div>
    </div>
  );
};

export default ProductDetailMedia;
