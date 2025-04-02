import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaPlay,
  FaCheck,
  FaChevronDown,
} from "react-icons/fa";

function Card({
  title,
  image,
  hoverImage, // Add this new prop
  alt,
  rating,
  imageWidth = "100%",
  imageHeight = "140px",
  bgColor = "bg-[#181A1C]",
  textColor = "text-white",
  titleSize = "text-lg",
  children,
  newEpisode = false,
  top10 = false,
  ageRating = "13+",
  episodeCount = "16 Episode",
  genre = "Action • Adventure • Drama",
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col items-start justify-between w-full p-0 ${bgColor} rounded-lg overflow-hidden shadow-md ${textColor} relative transition-all duration-300 ${
        isHovered ? "transform scale-110 z-10" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: "transform 0.3s ease, z-index 0.3s ease",
      }}
    >
      {/* Image Section with Hover Effect */}
      <div className="relative w-full">
        <div
          className="relative"
          style={{ width: imageWidth, height: imageHeight }}
        >
          {/* Main Image */}
          <img
            src={image}
            alt={alt}
            className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ${
              isHovered && hoverImage ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Hover Image (only shown when hovered and hoverImage provided) */}
          {hoverImage && (
            <img
              src={hoverImage}
              alt={alt}
              className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          )}
        </div>

        {/* Badges */}
        {newEpisode && (
          <div className="absolute top-2 left-2 bg-[#0F1E93] text-white text-xs font-bold px-2 py-1 rounded-lg">
            Episode Baru
          </div>
        )}
        {top10 && (
          <div className="absolute top-0 right-4 bg-red-600 text-white text-center leading-none p-1">
            <div className="text-[8px] font-bold uppercase tracking-wider">
              TOP
            </div>
            <div className="text-lg font-bold">10</div>
          </div>
        )}
      </div>

      {/* Hover Content */}
      {isHovered && (
        <>
          <div className="w-full bg-[#181A1C] p-3">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <button className="bg-white text-black rounded-full p-2 hover:bg-opacity-90">
                  <FaPlay size={12} />
                </button>
                <button className="bg-white text-black rounded-full p-2 hover:bg-opacity-90">
                  <FaCheck size={12} />
                </button>
              </div>
              <button className="bg-white text-black rounded-full p-2 hover:bg-opacity-90">
                <FaChevronDown size={12} />
              </button>
            </div>
            <div className="flex text-xs text-gray-300 space-x-2 items-center">
              <span className="font-bold bg-[#CDF1FF4D] rounded-lg px-1 py-0.5">
                {ageRating}
              </span>
              <span>{episodeCount}</span>
            </div>
          </div>
          <div className="w-full px-3 pb-3 bg-[#181A1C]">
            <div className="text-sm text-gray-400 truncate w-full font-bold">
              {genre}
            </div>
          </div>
        </>
      )}

      {/* Title and Rating */}
      {title && (
        <div className="w-full p-3 bg-gradient-to-t from-black to-transparent text-left">
          <div className="flex justify-between items-end">
            <h2 className={`font-bold text-sm ${titleSize}`}>{title}</h2>
            <div className="flex items-center">
              <FaStar className="text-white mr-1" />
              <span className="font-bold text-sm">{rating}</span>
            </div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
}
function CardSlider({
  cards,
  cardClassName = "",
  showArrows = true,
  showBadges = false,
  visibleCards = 5,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current && sliderRef.current?.children[0]) {
        const containerWidth = containerRef.current.offsetWidth;
        const gap = 16;
        const width =
          (containerWidth - (visibleCards - 1) * gap) / visibleCards;
        setCardWidth(width);

        Array.from(sliderRef.current.children).forEach((child) => {
          child.style.width = `${width}px`;
        });
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, [visibleCards, cards.length]);

  const nextCards = () => {
    const newIndex = Math.min(
      currentIndex + visibleCards,
      cards.length - visibleCards
    );
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  const prevCards = () => {
    const newIndex = Math.max(currentIndex - visibleCards, 0);
    setCurrentIndex(newIndex);
    scrollToCard(newIndex);
  };

  const scrollToCard = (index) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * (cardWidth + 16),
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-hidden w-full py-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {cards.map((card, index) => (
          <div key={index} className={`flex-shrink-0 ${cardClassName}`}>
            <Card
              {...card}
              newEpisode={showBadges ? card.newEpisode : false}
              top10={showBadges ? card.top10 : false}
              ageRating={card.ageRating || "13+"}
              episodeCount={card.episodeCount || "16 Episode"}
            />
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            onClick={prevCards}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#181A1C] bg-opacity-80 text-white p-3 rounded-full z-20 hover:bg-opacity-100 transition ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            style={{
              boxShadow: "0 0 8px rgba(0,0,0,0.5)",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextCards}
            disabled={currentIndex >= cards.length - visibleCards}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[#181A1C] text-white p-3 rounded-full z-20 hover:bg-opacity-100 transition ${
              currentIndex >= cards.length - visibleCards
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            style={{
              boxShadow: "0 0 8px rgba(0,0,0,0.5)",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
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
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
  hoverImage: PropTypes.string,
  alt: PropTypes.string.isRequired,
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  titleSize: PropTypes.string,
  children: PropTypes.node,
  newEpisode: PropTypes.bool,
  top10: PropTypes.bool,
  ageRating: PropTypes.string,
  episodeCount: PropTypes.string,
};

// Prop Types untuk CardSlider
CardSlider.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      imageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      bgColor: PropTypes.string,
      textColor: PropTypes.string,
      newEpisode: PropTypes.bool,
      top10: PropTypes.bool,
      ageRating: PropTypes.string,
      episodeCount: PropTypes.string,
    })
  ).isRequired,
  cardClassName: PropTypes.string,
  showArrows: PropTypes.bool,
  showBadges: PropTypes.bool,
  visibleCards: PropTypes.number,
};

export { Card, CardSlider };
export default Card;
