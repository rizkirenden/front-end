// Nav.js
import PropTypes from "prop-types";

function Nav({
  items,
  textColor = "text-white",
  gap = "gap-6",
  mobileGap = "gap-4",
  className = "",
}) {
  return (
    <nav className={`flex items-center ${className} ${mobileGap} md:${gap}`}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          className={`${textColor} hover:opacity-80 transition-opacity`}
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
