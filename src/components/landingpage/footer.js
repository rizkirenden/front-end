import PropTypes from "prop-types";

function Footer({ logo, altText, genres, helpLinks }) {
  return (
    <footer className="bg-[#181A1C] text-white py-8 px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Left Section - Logo and Copyright */}
          <div className="mb-6 md:mb-0">
            <div className="flex flex-col items-start">
              {logo && <img src={logo} alt={altText} className="h-7 mb-5" />}
              <span className="text-sm opacity-75">
                ©2023 Chill All Rights Reserved
              </span>
            </div>
          </div>

          {/* Middle Section - Genre */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-3">Genre</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {genres.map((genre, index) => (
                <a
                  key={index}
                  href={genre.link}
                  className="text-sm opacity-75 hover:opacity-100 hover:text-blue-400 transition"
                >
                  {genre.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Help */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Bantuan</h3>
            <div className="flex flex-col gap-2">
              {helpLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-sm opacity-75 hover:opacity-100 hover:text-blue-400 transition"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  logo: PropTypes.string,
  altText: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  helpLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Footer.defaultProps = {
  altText: "Logo Chill",
};

export default Footer;
