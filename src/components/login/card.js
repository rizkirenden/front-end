import PropTypes from "prop-types";

function Card({
  image,
  alt = "logo",
  imageWidth = 100,
  imageHeight = 100,
  bgColor = "#181A1C",
  bgImage = "",
  imagePosition = "flex justify-center items-center",
  cardWidth = "w-full",
  cardHeight = "h-full",
  rounded = "rounded-lg",
  className = "",
}) {
  return (
    <div
      className={`${cardWidth} ${cardHeight} ${rounded} ${imagePosition} ${className}`}
      style={{
        backgroundColor: bgColor,
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {image && (
        <img
          src={image}
          alt={alt}
          width={imageWidth}
          height={imageHeight}
          className="object-contain"
        />
      )}
      <h5 className="pt-8 text-3xl text-white">Masuk</h5>
      <p className="pt-1 text-white">Selamat Datang Kembali!</p>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  imageWidth: PropTypes.number,
  imageHeight: PropTypes.number,
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
  imagePosition: PropTypes.string,
  cardWidth: PropTypes.string,
  cardHeight: PropTypes.string,
  rounded: PropTypes.string,
  className: PropTypes.string,
};

export default Card;
