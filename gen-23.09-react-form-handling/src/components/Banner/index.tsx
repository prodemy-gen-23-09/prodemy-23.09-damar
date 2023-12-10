interface BannerProps {
  imageUrl: string;
}

const Banner = ({ imageUrl }: BannerProps) => {
  return (
    <img
      src={imageUrl}
      alt="banner"
      className="w-full rounded-lg mb-5"
    />
  );
};

export default Banner;
