import PropTypes from "prop-types";

function Header({
  logo,
  altText = "Logo",
  logoWidth = 100,
  logoHeight = 100,
  bgColor = "#181A1C",
  mobileHeight = "65px",
  desktopHeight = "94px",
  mobilePaddingX = "16px",
  desktopPaddingX = "40px",
  paddingY = "16px",
  children,
  profileComponent,
}) {
  return (
    <header
      className={`bg-[${bgColor}] w-full h-[${mobileHeight}] md:h-[${desktopHeight}] px-[${mobilePaddingX}] md:px-[${desktopPaddingX}] py-[${paddingY}]`}
      style={{
        backgroundColor: bgColor,
        height: mobileHeight,
        paddingLeft: mobilePaddingX,
        paddingRight: mobilePaddingX,
        paddingTop: paddingY,
        paddingBottom: paddingY,
      }}
    >
      <div className="w-full flex items-center justify-between">
        {/* Logo dan Nav di kiri */}
        <div className="flex items-center gap-6 pl-12 md:gap-10">
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt={altText}
              width={logoWidth}
              height={logoHeight}
              className="object-contain"
            />
          </div>
          {children}
        </div>

        {/* Profile di kanan */}
        <div className="flex-shrink-0 pr-12">{profileComponent}</div>
      </div>
    </header>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  altText: PropTypes.string,
  logoWidth: PropTypes.number,
  logoHeight: PropTypes.number,
  bgColor: PropTypes.string,
  mobileHeight: PropTypes.string,
  desktopHeight: PropTypes.string,
  mobilePaddingX: PropTypes.string,
  desktopPaddingX: PropTypes.string,
  paddingY: PropTypes.string,
  children: PropTypes.node,
  profileComponent: PropTypes.node,
};

export default Header;
