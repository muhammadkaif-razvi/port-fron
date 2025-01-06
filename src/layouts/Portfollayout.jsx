import React, { createContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useDarkMode from "../utils/useDarkmode";
import { MuteProvider} from "../utils/MuteContext"; 


export const ThemeContext = createContext(null);

const Layout = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <MuteProvider>
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
     
        {" "}
        <div
          className={`${darkMode ? "dark" : ""} transition-colors duration-300`}
        >
          <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 dark:text-neutral-100 text-neutral-900">
            <Navbar />
            <main className="flex-1 mt-16">
              <Outlet />
            </main>
            <Footer />
          </div>
        </div>

    </ThemeContext.Provider>
    </MuteProvider>
  );
};

export default Layout;
