import PropTypes from "prop-types";

function Header({
  logo,
  logoMobile, // Tambahkan prop logoMobile
  altText = "Logo",
  logoWidth = 100,
  logoHeight = 100,
  mobileLogoWidth = 20, // Tambahkan prop untuk lebar logo mobile
  mobileLogoHeight = 20, // Tambahkan prop untuk tinggi logo mobile
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
            {/* Logo untuk mobile */}
            <img
              src={logoMobile || logo} // Fallback ke logo biasa jika logoMobile tidak ada
              alt={altText}
              width={mobileLogoWidth}
              height={mobileLogoHeight}
              className="object-contain md:hidden" // Hanya tampil di mobile
            />
            {/* Logo untuk desktop */}
            <img
              src={logo}
              alt={altText}
              width={logoWidth}
              height={logoHeight}
              className="object-contain hidden md:block" // Hanya tampil di desktop
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
