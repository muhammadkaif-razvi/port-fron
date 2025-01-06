import React from "react";
import { useMuteContext } from "../utils/MuteContext";
import { Link } from "react-router-dom";

const Hiremebtn = () => {
const { toggleMute,isMuted,playClickSound } = useMuteContext();

  return (
    <Link
      to="/contact"
      className="btn-hire-me bg-[#545454] rounded-lg py-2 px-4 text-[#f9b449] hover:bg-[#f9b449] hover:text-[#545454] dark:bg-[#f9b449] dark:hover:bg-[#545454] dark:text-[#545454] dark:hover:text-[#f9b449] hover:scale-90"
      onClick={playClickSound}
    >
      Hire Me
    </Link>
  );
};
export default Hiremebtn;
