import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

function Card({
  title,
  image,
  alt,
  rating,
  imageWidth = "100%",
  imageHeight = "170px",
  bgColor = "bg-[#181A1C]",
  textColor = "text-white",
  titleSize = "text-lg",
  children,
}) {
  return (
    <div
      className={`flex flex-col items-start justify-between w-full p-0 ${bgColor} rounded-lg overflow-hidden shadow-md ${textColor} relative hover:scale-105 transition-transform duration-300`}
    >
      <img
        src={image}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
        className="object-cover w-full transition-opacity duration-300 hover:opacity-90"
        style={{
          width: imageWidth,
          height: imageHeight,
        }}
      />
      {/* Hanya tampilkan title dan rating jika title ada */}
      {title && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-left">
          <div className="flex justify-between items-end">
            <h2 className={`font-bold ${titleSize}`}>{title}</h2>
            <div className="flex items-center px-2 py-1 rounded bg-black bg-opacity-50">
              <FaStar className="text-yellow-400 mr-1" />
              <span className="font-bold">{rating}</span>
            </div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
}
function CardSlider({ cards, cardClassName = "", showArrows = true }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  const nextCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
    scrollToCard(currentIndex + 1);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
    scrollToCard(currentIndex - 1);
  };

  const scrollToCard = (index) => {
    const cardWidth = sliderRef.current?.children[0]?.offsetWidth || 0;
    sliderRef.current.scrollTo({
      left: index * (cardWidth + 16),
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide w-full py-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex-shrink-0 ml-4 first:ml-0 ${cardClassName}`}
          >
            <Card {...card} />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - only show if showArrows is true */}
      {showArrows && (
        <>
          <button
            onClick={prevCard}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition ml-1"
            style={{ boxShadow: "0 0 8px rgba(0,0,0,0.5)" }}
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextCard}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10 hover:bg-opacity-75 transition mr-1"
            style={{ boxShadow: "0 0 8px rgba(0,0,0,0.5)" }}
          >
            <FaChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  );
}

// Prop Types untuk Card
Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  titleSize: PropTypes.string,
  children: PropTypes.node,
};

CardSlider.propTypes = {
  cards: PropTypes.array.isRequired,
  cardClassName: PropTypes.string,
  showArrows: PropTypes.bool,
};
// Prop Types untuk CardSlider
CardSlider.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      bgColor: PropTypes.string,
      textColor: PropTypes.string,
    })
  ).isRequired,
};

export { Card, CardSlider };
export default Card;
