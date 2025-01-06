import { useState, useEffect } from "react";

// Custom hook for handling scroll behavior, social icons visibility, and navbar size
const useNavbarBehavior = () => {
  const [showSocialIcons, setShowSocialIcons] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavSmall, setIsNavSmall] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsAtTop(true);
        setShowSocialIcons(true); // Show icons at the top
        setIsNavSmall(false); // Reset navbar size
      } else {
        setIsAtTop(false);
        if (currentScrollY > lastScrollY) {
          setShowSocialIcons(false); // Hide on scroll down
          setIsNavSmall(true); // Shrink navbar
        } else {
          setShowSocialIcons(true); // Show on scroll up
          setIsNavSmall(false); // Restore navbar
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return { showSocialIcons, isNavSmall, isAtTop };
};

export default useNavbarBehavior;
