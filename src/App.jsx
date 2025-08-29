import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import AboutMore from "./pages/AboutMore";

function App() {
  return (
    <div className="bg-gradient-to-br from-[#161721] via-[#1b1c2d] to-[#22243a] text-white font-poppins">
      <AnimatePresence mode="wait">
        <>
          <Navbar />

          <main className="pt-20 px-4 sm:px-6 lg:px-8 py-2">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <About />
                    <Projects />
                  </>
                }
              />
              <Route path="/about-more" element={<AboutMore />} />
            </Routes>
          </main>
        </>
      </AnimatePresence>
    </div>
  );
}

export default App;
