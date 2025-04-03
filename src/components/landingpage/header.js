import PropTypes from "prop-types";

function Header({
  logo,
  logoMobile,
  altText = "Logo",
  logoWidth = 100,
  logoHeight = 100,
  mobileLogoWidth = 24,
  mobileLogoHeight = 24,
  bgColor = "#181A1C",
  mobileHeight = "70px",
  desktopHeight = "94px",
  mobilePaddingX = "16px",
  desktopPaddingX = "40px",
  paddingY = "16px",
  children,
  profileComponent,
  className = "",
}) {
  // Map color values to Tailwind classes
  const bgColorClass =
    {
      "#181A1C": "bg-[#181A1C]",
      "#ffffff": "bg-white",
      "#000000": "bg-black",
      // Add more color mappings as needed
    }[bgColor] || "bg-[#181A1C]";

  return (
    <header
      className={`${bgColorClass} w-full h-[${mobileHeight}] md:h-[${desktopHeight}] px-[${mobilePaddingX}] md:px-[${desktopPaddingX}] py-[${paddingY}] ${className}`}
      style={{
        height: mobileHeight,
        paddingLeft: mobilePaddingX,
        paddingRight: mobilePaddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
      }}
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-10 md:pl-12">
          <div className="flex-shrink-0">
            <img
              src={logoMobile || logo}
              alt={altText}
              width={mobileLogoWidth}
              height={mobileLogoHeight}
              className="object-contain md:hidden"
            />
            <img
              src={logo}
              alt={altText}
              width={logoWidth}
              height={logoHeight}
              className="object-contain hidden md:block"
            />
          </div>
          {children}
        </div>

        <div className="flex-shrink-0 md:pr-12">{profileComponent}</div>
      </div>
    </header>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  logoMobile: PropTypes.string, // Tambahkan propTypes untuk logoMobile
  altText: PropTypes.string,
  logoWidth: PropTypes.number,
  logoHeight: PropTypes.number,
  mobileLogoWidth: PropTypes.number, // Tambahkan propTypes untuk mobileLogoWidth
  mobileLogoHeight: PropTypes.number, // Tambahkan propTypes untuk mobileLogoHeight
  bgColor: PropTypes.string,
  mobileHeight: PropTypes.string,
  desktopHeight: PropTypes.string,
  mobilePaddingX: PropTypes.string,
  desktopPaddingX: PropTypes.string,
  paddingY: PropTypes.string,
  children: PropTypes.node,
  profileComponent: PropTypes.node,
};

Header.defaultProps = {
  logoMobile: null,
  mobileLogoWidth: 40,
  mobileLogoHeight: 40,
};

export default Header;
