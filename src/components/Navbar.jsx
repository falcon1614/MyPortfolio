import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext"; // Import the actual ThemeContext

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Use the actual ThemeContext
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Skills", id: "skills" },
    { label: "Work", id: "work" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (sectionID) => {
    const element = document.getElementById(sectionID);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <Motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300
          ${isDarkMode
            ? "bg-gray-950/95 text-white"
            : "bg-white/95 text-gray-900"}
          backdrop-blur-xl border-b
          ${isDarkMode ? "border-gray-800/50" : "border-gray-200/50"}
          shadow-lg
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between ">
          {/* Logo */}
          <Motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <Motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={`p-2 rounded-xl ${
                isDarkMode
                  ? "bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500"
                  : "bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400"
              } shadow-lg`}
            >
              <Code2 size={24} className="text-white" />
            </Motion.div>
            <span className="font-bold text-xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Time To Program
            </span>
          </Motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 ">
            {navItems.map((item, index) => (
              <Motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-semibold relative group transition-colors cursor-pointer
                  ${isDarkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}
                `}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 group-hover:w-full transition-all duration-300 rounded-full" />
              </Motion.button>
            ))}

            {/* Desktop Theme Toggle */}
            <Motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`ml-2 p-2.5 rounded-full transition-all duration-300 cursor-pointer
                ${isDarkMode
                  ? "bg-gray-800/80 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-100 text-indigo-600 hover:bg-gray-200"}
              `}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Motion.button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            {/* Mobile Theme Toggle */}
            <Motion.button
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full transition-all duration-300
                ${isDarkMode
                  ? "bg-gray-800/80 text-yellow-400"
                  : "bg-gray-100 text-indigo-600"}
              `}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Motion.button>

            {/* Mobile Menu Toggle */}
            <Motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-lg transition-all duration-300
                ${isDarkMode
                  ? "hover:bg-gray-800/50"
                  : "hover:bg-gray-100"}
              `}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Motion.button>
          </div>
        </div>
      </Motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Content */}
            <Motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed top-0 right-0 w-80 h-full z-50 md:hidden
                ${isDarkMode
                  ? "bg-gray-900 text-white"
                  : "bg-white text-gray-900"}
                shadow-2xl
              `}
            >
              <div className="flex flex-col p-6 pt-20 gap-2">
                {navItems.map((item, index) => (
                  <Motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left py-4 px-4 rounded-xl font-semibold transition-all
                      ${isDarkMode
                        ? "hover:bg-gray-800"
                        : "hover:bg-gray-100"}
                    `}
                  >
                    {item.label}
                  </Motion.button>
                ))}
              </div>
            </Motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
