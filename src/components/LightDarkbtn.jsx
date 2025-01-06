import { FaSun, FaMoon } from "react-icons/fa";
import { useMuteContext } from "../utils/MuteContext";
import { ThemeContext } from "../layouts/Portfollayout";
import { useContext } from "react";

const LightDarkbtn = () => {
  const { toggleMute,playClickSound } = useMuteContext();

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const handleClick = () => {
    toggleDarkMode(); // Toggle the dark mode state
    toggleMute(); // Toggle mute state when dark mode changes
  };

  return (
    <button onClick={()=>{
      handleClick();
      playClickSound();
    }} className="focus:outline-none">
      {darkMode ? (
        <FaMoon size={24} className="text-[#545454] hover:scale-110" />
      ) : (
        <FaSun size={24} className="text-yellow-500 hover:scale-110" />
      )}
    </button>
  );
};

export default LightDarkbtn;
