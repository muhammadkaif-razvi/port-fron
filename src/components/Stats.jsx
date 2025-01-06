import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SmallStatCard = ({ title, endValue, duration }) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = endValue / ((duration * 1000) / 60);

    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(counter);
      }
      setValue(Math.floor(start));
    }, 16); // ~60 FPS

    return () => clearInterval(counter);
  }, [endValue, duration]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 shadow-md rounded-lg p-2 w-[100px] h-[100px] xl:w-[120px] xl:h-[120px]"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <p className="text-2xl font-bold text-[#545454] dark:text-[#f9b449]">
        {value}
      </p>
      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{title}</p>
    </motion.div>
  );
};

export default SmallStatCard;
