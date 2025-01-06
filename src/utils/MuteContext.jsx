import React, { createContext, useState, useContext, useEffect } from "react";

// Create the MuteContext
const MuteContext = createContext();

// Custom hook to use the MuteContext
export const useMuteContext = () => useContext(MuteContext);

// MuteProvider component to wrap your app
export const MuteProvider = ({ children }) => {
  // Load the initial mute state from localStorage or default to false
  const [isMuted, setIsMuted] = useState(() => {
    if (typeof window !== "undefined") {
      const savedMuteState = localStorage.getItem("isMuted");
      return savedMuteState ? JSON.parse(savedMuteState) : false;
    }
    return false;
  });
  

  useEffect(() => {
    // Store the mute state in localStorage whenever it changes
    localStorage.setItem("isMuted", JSON.stringify(isMuted));
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev); // Toggle mute state
  };

  const playClickSound = () => {
    if (!isMuted) {
      const audio = new Audio("/audio/click-sound.mp3");
      audio.play();
    }
  };

  return (
    <MuteContext.Provider value={{ isMuted, toggleMute, playClickSound }}>
      {children}
    </MuteContext.Provider>
  );
};