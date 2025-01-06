import { useState, useEffect } from "react";

// Custom hook for handling dark mode
const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is stored in localStorage
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (savedDarkMode !== null) {
      setDarkMode(savedDarkMode);
    } else {
      setDarkMode(false); // Default to light mode
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => {
      const newState = !prevState;
      localStorage.setItem("darkMode", JSON.stringify(newState)); // Save dark mode preference
      return newState;
    });
  };

  return { darkMode, toggleDarkMode };
};

export default useDarkMode;

