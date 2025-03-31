// components/landingpage/btn.js
import PropTypes from "prop-types";

export default function Btn({
  children,
  onClick,
  href,
  bgColor = "bg-[#0F1E93]",
  textColor = "text-white",
  rounded = "rounded-md",
  className = "",
  ...props
}) {
  const commonClasses = `px-6 py-2 ${bgColor} ${textColor} ${rounded} font-medium hover:opacity-90 transition ${className}`;

  return href ? (
    <a href={href} className={commonClasses} {...props}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={commonClasses} {...props}>
      {children}
    </button>
  );
}

Btn.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  rounded: PropTypes.string,
  className: PropTypes.string,
};
