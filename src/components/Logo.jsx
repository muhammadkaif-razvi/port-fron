import React from "react"
import { Link } from "react-router-dom";
import { useMuteContext } from "../utils/MuteContext";

const Logo= ()=>{
  const { playClickSound } = useMuteContext();
  
return(
<Link to="/" className="flex-shrink-0">
<img
  src="/assets/reallogo.png"
  alt="Logo"
  className="w-[166px] h-[40px] hover:scale-105 transition-transform"
  onClick={playClickSound}
/>
</Link>
)
}
export default Logo;