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
  hoverImage,
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
  episodeCount = null,
  duration = null,
  genre = "Action • Adventure • Drama",
  isContinueWatching = false,
  progress = 0,
  timeRemaining = "2h 13m",
  isSeries = true,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const [naturalAspectRatio, setNaturalAspectRatio] = useState(16 / 9);

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    setNaturalAspectRatio(naturalWidth / naturalHeight);
  };

  return (
    <div
      ref={cardRef}
      className={`flex flex-col p-0 ${bgColor} rounded-lg overflow-hidden shadow-md ${textColor} relative transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: imageWidth,
        transform: isHovered
          ? isContinueWatching
            ? "scale(1.10)" // Scale slightly on hover for continue watching
            : "scale(1.50)"
          : "scale(1)",
        transformOrigin: "center top",
        zIndex: isHovered ? 50 : 1,
        margin: isHovered ? (isContinueWatching ? "0 0 2%" : "0 0 10%") : "0",
      }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{
          height:
            isHovered && !isContinueWatching
              ? `calc(${imageWidth} * ${naturalAspectRatio})`
              : isContinueWatching
              ? "200px" // Increase height for continue watching card
              : imageHeight,
          transition: "height 0.3s ease",
        }}
      >
        <img
          src={image}
          alt={alt}
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ${
            isHovered && hoverImage && !isContinueWatching
              ? "opacity-0"
              : "opacity-100"
          }`}
          onLoad={handleImageLoad}
        />

        {hoverImage && !isContinueWatching && (
          <img
            src={hoverImage}
            alt={alt}
            className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

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

        {title && (
          <div className="absolute bottom-0 left-0 right-0 w-full p-3 bg-gradient-to-t from-black/80 to-transparent text-left">
            <div className="flex justify-between items-end">
              <h2 className={`font-bold text-sm ${titleSize}`}>{title}</h2>
              {!isContinueWatching && (
                <div className="flex items-center">
                  <FaStar className="text-white mr-1" />
                  <span className="font-bold text-sm">{rating}</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {isHovered && (
        <div className={`w-full bg-[#181A1C] border-t border-[#2D2F31] p-2`}>
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
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

          {/* Added age rating and duration info */}
          <div className="flex text-xs text-gray-300 gap-2 items-center mb-1">
            <span className="font-bold bg-[#CDF1FF4D] rounded px-1 py-0.5">
              {ageRating}
            </span>
            {duration && <span>{duration}</span>}
            {episodeCount && <span>{episodeCount}</span>}
          </div>

          {isContinueWatching && (
            <div className="flex items-center gap-2 text-xs text-gray-300 mb-1">
              <div className="w-full bg-[#2D2F31] h-1 rounded-full">
                <div
                  className="h-full bg-[#0F8FF3] rounded-full"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span>{timeRemaining}</span>
            </div>
          )}

          <div className="text-xs text-[#C1C2C4] truncate font-bold flex justify-center items-center w-full text-center">
            {genre}
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
  isContinueWatching = false,
  initialVisibleCards = null, // Add new prop for initial visible cards
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  // Use initialVisibleCards if provided, otherwise use visibleCards
  const effectiveVisibleCards =
    initialVisibleCards !== null ? initialVisibleCards : visibleCards;

  const updateCardWidth = () => {
    if (containerRef.current && sliderRef.current?.children[0]) {
      const containerWidth = containerRef.current.offsetWidth;
      const gap = 16;
      const width =
        (containerWidth - (effectiveVisibleCards - 1) * gap) /
        effectiveVisibleCards;
      setCardWidth(width);

      Array.from(sliderRef.current.children).forEach((child) => {
        child.style.width = `${width}px`;
      });
    }
  };

  const nextCards = () => {
    const newIndex = Math.min(
      currentIndex + effectiveVisibleCards,
      cards.length - effectiveVisibleCards
    );
    setCurrentIndex(newIndex);
    sliderRef.current.scrollTo({
      left: newIndex * (cardWidth + 16),
      behavior: "smooth",
    });
  };

  const prevCards = () => {
    const newIndex = Math.max(currentIndex - effectiveVisibleCards, 0);
    setCurrentIndex(newIndex);
    sliderRef.current.scrollTo({
      left: newIndex * (cardWidth + 16),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);
    return () => window.removeEventListener("resize", updateCardWidth);
  }, [effectiveVisibleCards, cards.length]);

  return (
    <div className="relative w-full" ref={containerRef}>
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-hidden w-full py-4 scroll-smooth"
        style={{
          scrollBehavior: "smooth",
          // Hide scrollbar for Chrome/Safari
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Hide scrollbar for Firefox */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {cards.map((card, index) => (
          <div key={index} className={`flex-shrink-0 ${cardClassName}`}>
            <Card
              {...card}
              newEpisode={showBadges ? card.newEpisode : false}
              top10={showBadges ? card.top10 : false}
              ageRating={card.ageRating || "13+"}
              episodeCount={card.episodeCount}
              duration={card.duration}
              isContinueWatching={isContinueWatching || card.isContinueWatching}
              progress={card.progress}
              timeRemaining={card.timeRemaining}
              isSeries={card.isSeries}
            />
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            onClick={prevCards}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#181A1C] bg-opacity-80 text-white p-3 rounded-full z-50 hover:bg-opacity-100 transition ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextCards}
            disabled={currentIndex >= cards.length - effectiveVisibleCards}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-[#181A1C] text-white p-3 rounded-full z-50 hover:bg-opacity-100 transition ${
              currentIndex >= cards.length - effectiveVisibleCards
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <FaChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  );
}

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
  duration: PropTypes.string,
  genre: PropTypes.string,
  isContinueWatching: PropTypes.bool,
  progress: PropTypes.number,
  timeRemaining: PropTypes.string,
  isSeries: PropTypes.bool,
};

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
      duration: PropTypes.string,
      progress: PropTypes.number,
      timeRemaining: PropTypes.string,
      isSeries: PropTypes.bool,
      initialVisibleCards: PropTypes.number,
    })
  ).isRequired,
  cardClassName: PropTypes.string,
  showArrows: PropTypes.bool,
  showBadges: PropTypes.bool,
  visibleCards: PropTypes.number,
  isContinueWatching: PropTypes.bool,
};

export { Card, CardSlider };
export default Card;
