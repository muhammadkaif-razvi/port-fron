"use client";
import { motion } from "framer-motion";

const Photo = () => {
  return (
    <div className="relative flex items-center justify-center w-[300px] h-[300px] xl:w-[506px] xl:h-[506px] mx-auto xl:ml-0 rounded-full xl:mt-0 overflow-hidden">
      {/* Animated Rotating Dotted Circle */}
      <motion.svg
        className="absolute w-full h-full"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
        fill="transparent"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f9b449" />
            <stop offset="100%" stopColor="#545454" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.circle
          cx="300"
          cy="300"
          r="270"
          stroke="url(#gradient)" // Gradient color
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="8 16 4 12" // Varied dash pattern
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
          }}
          filter="url(#glow)" // Glow effect
        />
      </motion.svg>

      {/* Animated Image */}
      <motion.div
        className="absolute w-[250px] h-[250px] xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.3,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <img
          src="../public/assets/kaif.png"
          alt="Muhammad Kaif Razvi"
          className="object-cover w-full h-full"
        />
      </motion.div>
    </div>
  );
};

export default Photo;





