// components/landingpage/suara.js
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import PropTypes from "prop-types";

export default function Suara({ isMuted, onToggle, className = "" }) {
  return (
    <button
      onClick={onToggle}
      className={`p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition ${className}`}
      aria-label={isMuted ? "Unmute" : "Mute"}
    >
      {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
    </button>
  );
}

Suara.propTypes = {
  isMuted: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  className: PropTypes.string,
};
