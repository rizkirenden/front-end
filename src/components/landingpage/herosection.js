import PropTypes from "prop-types";
import Suara from "./suara"; // Assuming Suara is a sound control component
import Btn from "./btn"; // Assuming Btn is a button component
import { FaInfoCircle } from "react-icons/fa";

function HeroSection({
  title = "Welcome to Our Site",
  subtitle = "",
  bgImage = "",
  textColor = "text-white",
  titleSize = "text-4xl",
  subtitleSize = "text-xl",
  containerHeight = "h-screen",
  children,
  ctaText = "Learn More",
  ctaLink = "#",
  overlayColor = "rgba(0,0,0,0.5)",
  overlay = false,
  isMuted,
  onToggleMute,
  bgSize = "cover",
  bgPosition = "center",
}) {
  return (
    <section
      className={`relative ${containerHeight} w-full`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: bgSize,
        backgroundPosition: bgPosition,
        backgroundRepeat: "no-repeat",
      }}
    >
      {overlay && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor }}
        />
      )}

      <div className="relative z-10 flex flex-col justify-center items-start px-4 sm:px-6 h-full mt-10">
        {/* Content Section - Lebar diperpanjang ke kanan */}
        <div className="text-left mb-8 w-full max-w-3xl">
          {" "}
          {/* Tambahkan w-full dan max-w-4xl */}
          <h1 className={`${titleSize} ${textColor} font-bold mb-4`}>
            {title}
          </h1>
          {subtitle && (
            <p className={`${subtitleSize} ${textColor} mb-8 w-full`}>
              {" "}
              {/* Tambahkan w-full */}
              {subtitle}
            </p>
          )}
        </div>

        {/* Container for Buttons */}
        <div className="w-full flex items-center justify-between mb-8">
          {/* Left-aligned buttons */}
          <div className="flex items-center gap-4">
            <Btn bgColor="bg-[#0F1E93]" rounded="rounded-full" href={ctaLink}>
              {ctaText}
            </Btn>
            <Btn
              bgColor="bg-black bg-opacity-50"
              rounded="rounded-full"
              href="#"
              className="flex items-center" // Use flexbox for horizontal alignment
            >
              <FaInfoCircle className="mr-2" /> Selengkapnya
              {/* Add margin-left to space out the icon */}
            </Btn>

            <div className="text-white bg-black bg-opacity-10 border-white border-2 px-2 py-2 rounded-full">
              18+
            </div>
          </div>

          {/* Right-aligned mute button */}
          <div className="ml-4">
            <Suara isMuted={isMuted} onToggle={onToggleMute} />
          </div>
        </div>
      </div>

      {children}
    </section>
  );
}

HeroSection.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  alt: PropTypes.string,
  imageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
  textColor: PropTypes.string,
  titleSize: PropTypes.string,
  subtitleSize: PropTypes.string,
  contentPosition: PropTypes.string,
  containerWidth: PropTypes.string,
  containerHeight: PropTypes.string,
  rounded: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  ctaBgColor: PropTypes.string,
  ctaTextColor: PropTypes.string,
  ctaRounded: PropTypes.string,
  overlayColor: PropTypes.string,
  overlay: PropTypes.bool,
  isMuted: PropTypes.bool,
  onToggleMute: PropTypes.func,
};

export default HeroSection;
