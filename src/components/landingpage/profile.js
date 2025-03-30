import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { FaCog, FaArrowUp, FaSignOutAlt } from "react-icons/fa"; // Example import

function Profile({
  profileImage = "/src/assets/profile.png",
  dropdownItems = [],
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const defaultItems = [
    { label: "Profile", action: "#", icon: <FaCog /> },
    { label: "Upgrade ke Premium", action: "#", icon: <FaArrowUp /> },
    { label: "Keluar", action: "#", icon: <FaSignOutAlt /> },
  ];

  const items = dropdownItems.length > 0 ? dropdownItems : defaultItems;

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 focus:outline-none"
        aria-label="Menu profil"
      >
        <div className="w-10 h-10 rounded-full overflow-hidden border-1 border-white">
          <img
            src={profileImage}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-[#181A1C] rounded-md shadow-lg py-1 z-50">
          {items.map((item, index) => (
            <div key={index}>
              {console.log(item.icon)}{" "}
              {/* Check if icon is coming as expected */}
              {item.isDivider && (
                <div className="border-t border-gray-200 my-1"></div>
              )}
              <a
                href={item.action}
                className={`block px-4 py-2 text-sm flex items-center gap-2 ${
                  item.isDanger ? "text-red-600" : "text-white"
                } hover:text-[#3254FF]`}
                onClick={(e) => {
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
              >
                {item.icon && <span className="text-lg">{item.icon}</span>}
                {item.label}
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

Profile.propTypes = {
  userName: PropTypes.string,
  accountType: PropTypes.string,
  profileImage: PropTypes.string,
  dropdownItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      action: PropTypes.string,
      onClick: PropTypes.func,
      icon: PropTypes.node,
      isDivider: PropTypes.bool,
      isDanger: PropTypes.bool,
    })
  ),
  className: PropTypes.string,
};

export default Profile;
