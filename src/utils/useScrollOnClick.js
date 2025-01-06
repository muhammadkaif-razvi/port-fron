import { useState, useEffect } from "react";

const useScrollOnClick = (scrollThreshold = 100) => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsButtonVisible(false);
      } else {
        setIsButtonVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  const handleScrollClick = (targetId = "learnMoreSection") => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`No element found with id: ${targetId}`);
    }
  };

  return { handleScrollClick, isButtonVisible };
};

export default useScrollOnClick;

