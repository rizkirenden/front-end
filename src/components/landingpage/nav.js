// Nav.js
import PropTypes from "prop-types";

function Nav({
  items,
  textColor = "text-white",
  gap = "gap-6",
  mobileGap = "gap-3", // Mengurangi gap di mobile
  className = "",
}) {
  return (
    <nav className={`flex items-center ${className} ${mobileGap} md:${gap}`}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={`${textColor} text-xs md:text-sm hover:opacity-80 transition-opacity`} // text-xs untuk mobile, md:text-sm untuk desktop
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

Nav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  textColor: PropTypes.string,
  gap: PropTypes.string,
  mobileGap: PropTypes.string,
};

export { Nav };
