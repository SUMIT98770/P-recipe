"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { ChefHat, Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Recipes", href: "#recipe" },
    { name: "Ingredients", href: "#ingredients" },
    { name: "Categories", href: "#features" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string, href: string) => {
    e.preventDefault();
    setActiveLink(name);
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Nav animations
  const navContainerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-lightBg/80 dark:bg-darkBg/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2 group"
            onClick={(e) => handleNavClick(e, "Home", "#home")}
          >
            <motion.div
              whileHover={{ rotate: 15, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-2 bg-gradient-to-tr from-accentGreen via-accentTeal to-accentPurple rounded-xl text-white shadow-md shadow-accentTeal/20"
            >
              <ChefHat className="w-6 h-6" />
            </motion.div>
            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-accentGreen via-accentTeal to-accentPurple bg-clip-text text-transparent group-hover:opacity-95 transition-opacity">
              RecipeAI
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <motion.div
              variants={navContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex items-center space-x-6"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={navItemVariants}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.name, link.href)}
                    className="relative py-2 text-sm font-semibold tracking-wide transition-colors duration-200 text-mutedTextLight hover:text-bodyTextLight dark:text-mutedTextDark dark:hover:text-bodyTextDark"
                  >
                    {link.name}
                    {activeLink === link.name && (
                      <motion.div
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accentGreen via-accentTeal to-accentPurple rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side Controls */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2.5 rounded-xl border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-mutedTextLight dark:text-mutedTextDark transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <Sun className="w-5 h-5 text-accentTeal" /> : <Moon className="w-5 h-5 text-accentPurple" />)}
              {!mounted && <div className="w-5 h-5" />}
            </motion.button>

            {/* Login button */}
            <button className="px-4 py-2 text-sm font-semibold text-mutedTextLight hover:text-bodyTextLight dark:text-mutedTextDark dark:hover:text-bodyTextDark transition-colors">
              Login
            </button>

            {/* Get Started Button */}
            <motion.button
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 text-sm font-bold rounded-xl text-white bg-gradient-to-r from-accentGreen via-accentTeal to-accentPurple shadow-lg shadow-accentTeal/20 border border-white/10"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu and theme button */}
          <div className="flex items-center space-x-3 lg:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 text-mutedTextLight dark:text-mutedTextDark"
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <Sun className="w-5 h-5 text-accentTeal" /> : <Moon className="w-5 h-5 text-accentPurple" />)}
              {!mounted && <div className="w-5 h-5" />}
            </button>

            {/* Hamburger button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 text-mutedTextLight dark:text-mutedTextDark"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-lightSurface/95 dark:bg-darkSurface/95 backdrop-blur-lg border-b border-black/5 dark:border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.name, link.href)}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                    activeLink === link.name
                      ? "text-white bg-gradient-to-r from-accentGreen via-accentTeal to-accentPurple"
                      : "text-mutedTextLight hover:bg-black/5 dark:text-mutedTextDark dark:hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-black/5 dark:border-white/5 flex flex-col space-y-3 px-4">
                <button className="py-2.5 font-semibold text-mutedTextLight dark:text-mutedTextDark hover:text-bodyTextLight dark:hover:text-bodyTextDark text-center transition-colors">
                  Login
                </button>
                <button className="py-3 font-bold rounded-xl text-white bg-gradient-to-r from-accentGreen via-accentTeal to-accentPurple shadow-lg text-center">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
