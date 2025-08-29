/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const navItems = [
    { name: "HOME", id: "Home" },
    { name: "ABOUT", id: "About" },
    { name: "PROJECT", id: "Project" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const scrollPos = window.scrollY + window.innerHeight / 2;
      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elTop = rect.top + window.scrollY;
          const elBottom = elTop + el.offsetHeight;
          if (scrollPos >= elTop && scrollPos <= elBottom) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-[#161721]/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left side social icons */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() =>
                  window.open("https://github.com/shhanifff", "_blank")
                }
                className="text-gray-300 hover:text-[#c4f000] transition"
                data-cursor-hover
              >
                <Github size={22} />
              </button>

              <button
                onClick={() =>
                  window.open(
                    "https://linkedin.com/in/mohammed-shanif-cc",
                    "_blank"
                  )
                }
                className="text-gray-300 hover:text-[#c4f000] transition"
                data-cursor-hover
              >
                <Linkedin size={22} />
              </button>

              <button
                onClick={() => {
                  window.location.href = "mailto:mohammedshanifcc@gmail.com";
                }}
                className="text-gray-300 hover:text-[#c4f000] transition"
                data-cursor-hover
              >
                <Mail size={22} />
              </button>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex ml-auto items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  navigate("/");
                  scrollToSection(item.id);
                }}
                className={`px-3 py-2 text-sm font-medium tracking-widest transition-all duration-300 cursor-pointer  ${
                  activeSection === item.id
                    ? "text-[#c4f000]"
                    : "text-gray-300 hover:text-[#c4f000]"
                }`}
                data-cursor-hover
              >
                {item.name}
              </button>
            ))}

            {/* CV Button */}
            <a
              href="https://drive.google.com/file/d/1_GEC1ZWIGkDHEPAWEfltLM67CNfWtZGQ/view?usp=sharing"
              target="_blank"
              className="px-4 py-2 rounded-md bg-[#c4f000] text-black font-semibold text-sm hover:bg-[#a8d800] transition"
              data-cursor-hover
            >
              Download CV
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              data-cursor-hover
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#161721]/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  navigate("/");
                  scrollToSection(item.id);
                }}
                className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors ${
                  activeSection === item.id
                    ? "text-[#c4f000]"
                    : "text-gray-300 hover:text-[#c4f000]"
                }`}
                data-cursor-hover
              >
                {item.name}
              </button>
            ))}

            {/* Mobile CV Button */}
            <a
              href="/cv.pdf"
              download
              className="block mt-2 px-3 py-2 rounded-md bg-[#c4f000] text-black font-semibold text-base text-center hover:bg-[#a8d800] transition"
              data-cursor-hover
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
