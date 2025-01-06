import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { useMuteContext } from "../utils/MuteContext"; // Use the context to manage mute state

const MuteToggle = () => {
  const { isMuted, toggleMute } = useMuteContext(); // Access mute state and functions

  const handleClick = () => {
    toggleMute();
     // Toggle mute state
  };

  return (
    <button
      onClick={handleClick}
      className="focus:outline-none text-[#545454] hover:text-[#f9b449] transition-transform hover:scale-125"
    >
      {/* Mute or Unmute icon */}
      {isMuted ? (
        <FaVolumeMute
          size={24}
         
        />
      ) : (
        <FaVolumeUp
          size={24}
       
        />
      )}
    </button>
  );
};

export default MuteToggle;






