
import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full px-6 py-3 ${
        isScrolled ? "glass" : ""
      }`}
    >
      <div className="flex items-center justify-between space-x-8">
        <motion.a
          href="#"
          className="nav-item"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Home
        </motion.a>
        <motion.a href="#about" className="nav-item">
          About
        </motion.a>
        <motion.a href="#skills" className="nav-item">
          Skills
        </motion.a>
        <motion.a href="#projects" className="nav-item">
          Projects
        </motion.a>
        <motion.a href="#contact" className="nav-item">
          Contact
        </motion.a>
        
        <motion.button
          onClick={toggleTheme}
          className="p-2 rounded-full glass"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
