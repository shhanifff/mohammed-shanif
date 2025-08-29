

/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const rotatingTitles = [
  "MERN Stack Developer",
  "React & Node.js Specialist",
  "MongoDB + Express Expert",
];

const details = [
  "BASED IN INDIA",
  "FREELANCE AVAILABLE",
  "FULL-STACK PROJECTS",
];

function Home() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentDetailIndex, setCurrentDetailIndex] = useState(0);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 3200);

    const detailInterval = setInterval(() => {
      setCurrentDetailIndex((prev) => (prev + 1) % details.length);
    }, 4200);

    return () => {
      clearInterval(titleInterval);
      clearInterval(detailInterval);
    };
  }, []);

  return (
    <section
      id="Home"
      className="min-h-screen bg-transparent text-white flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 lg:px-24 relative overflow-hidden"
    >
      
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 text-xs tracking-widest text-gray-400">
        © {new Date().getFullYear()}
      </div>

      <div className="w-full max-w-7xl z-10">
        {/* Heading */}
        <div className="overflow-hidden">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Building web apps
            <br />
            <span className="font-medium text-[#c4f000]">with passion</span> and purpose
          </motion.h1>
        </div>

        {/* Rotating Subtitle */}
        <div className="h-14 sm:h-16 md:h-20 overflow-hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTitleIndex}
              className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-gray-400 to-gray-100 bg-clip-text text-transparent"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {rotatingTitles[currentTitleIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Animated Line */}
        <motion.div
          className="w-full h-px bg-gray-600 my-8 sm:my-10 md:my-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        />

        {/* Skills & Info Section */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex-1">
            <div className="text-sm uppercase tracking-widest mb-2 text-gray-400">
              Proficient In
            </div>
            <div className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200">
              HTML · CSS · JavaScript · React · Tailwind CSS
              <br />
              Node.js · Express.js · MongoDB · PostgreSQL 
            </div>
          </div>

          <div className="h-16 overflow-hidden flex-1 text-right">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDetailIndex}
                className="text-right"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="text-sm uppercase tracking-widest mb-1 text-gray-400">
                  Info
                </div>
                <div className="text-base sm:text-lg text-gray-200">
                  {details[currentDetailIndex]}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <div className="text-xs tracking-widest mb-2">SCROLL</div>
          <div className="w-px h-6 sm:h-8 bg-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
