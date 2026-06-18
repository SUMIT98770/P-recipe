"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, ChevronDown, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
}

const floatingEmojis = [
  { emoji: "🍛", position: "top-[20%] left-[8%] md:left-[12%]", delay: 0, duration: 5 },
  { emoji: "🥘", position: "top-[28%] right-[8%] md:right-[12%]", delay: 0.8, duration: 6 },
  { emoji: "🍝", position: "bottom-[22%] left-[10%] md:left-[15%]", delay: 0.4, duration: 5.5 },
  { emoji: "🌿", position: "bottom-[35%] right-[12%] md:right-[18%]", delay: 1.2, duration: 4.5 },
  { emoji: "🥗", position: "top-[15%] left-[45%] md:left-[35%]", delay: 0.6, duration: 4.8 },
  { emoji: "🍚", position: "bottom-[18%] right-[35%] md:right-[40%]", delay: 1.5, duration: 5.2 },
];

export default function HeroSection({ onSearch, isLoading }: HeroSectionProps) {
  const [searchVal, setSearchVal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      onSearch(searchVal.trim());
    }
  };

  const handleScrollDown = () => {
    const element = document.querySelector("#recipe-result");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden py-24 sm:py-32"
    >
      {/* Background Animated Orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[15%] left-[10%] w-[350px] h-[350px] bg-accentPurple/20 dark:bg-accentPurple/15 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 30, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.9, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-accentTeal/20 dark:bg-accentTeal/15 rounded-full blur-[140px]"
        />
      </div>

      {/* Floating Emojis */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {floatingEmojis.map((item, idx) => (
          <motion.div
            key={idx}
            className={`absolute text-4xl md:text-5xl drop-shadow-lg filter ${item.position}`}
            animate={{
              y: [0, -18, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
            }}
          >
            {item.emoji}
          </motion.div>
        ))}
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-4 relative z-20 text-center flex flex-col items-center">
        {/* Sparkle Tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4.5 py-1.5 rounded-full bg-accentTeal/10 border border-accentTeal/20 text-accentTeal text-xs font-semibold tracking-wider uppercase mb-8 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Next-Gen AI Cooking Assistant</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6"
        >
          Cook Smarter with{" "}
          <span className="bg-gradient-to-r from-accentGreen via-accentTeal to-accentPurple bg-clip-text text-transparent drop-shadow-sm">
            RecipeAI
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl text-mutedTextLight dark:text-mutedTextDark max-w-2xl leading-relaxed mb-10"
        >
          Enter any dish name and instantly get full recipe details, ingredient quantities, cooking instructions, nutritional analysis, and smart grocery recommendations.
        </motion.p>

        {/* Search Bar Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="w-full max-w-2xl px-2 sm:px-0 mb-14"
        >
          <form
            onSubmit={handleSubmit}
            className="glass-card light-theme:bg-white/90 p-2 rounded-full border border-black/5 dark:border-white/10 flex items-center shadow-2xl relative group focus-within:ring-2 focus-within:ring-accentTeal/30 focus-within:border-accentTeal/30 transition-all duration-300"
          >
            <Search className="w-6 h-6 ml-4 text-mutedTextLight dark:text-mutedTextDark pointer-events-none group-focus-within:text-accentTeal transition-colors" />
            <input
              type="text"
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              placeholder="Try 'Jeera Rice', 'Paneer Butter Masala', 'Biryani', 'Pasta'..."
              className="bg-transparent text-bodyTextLight dark:text-bodyTextDark font-medium text-base sm:text-lg placeholder-slate-400 dark:placeholder-slate-500 py-3 px-3 w-full outline-none"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-gradient-to-r from-accentGreen via-accentTeal to-accentPurple text-white font-bold rounded-full shadow-lg shadow-accentTeal/20 hover:shadow-accentTeal/30 hover:scale-[1.02] disabled:scale-100 disabled:opacity-75 transition-all duration-300 whitespace-nowrap"
            >
              {isLoading ? "Searching..." : "Search Recipe"}
            </button>
          </form>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } },
          }}
          className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 md:gap-x-12 px-6 py-4 glass-card rounded-2xl border border-black/5 dark:border-white/5 shadow-md max-w-3xl w-full"
        >
          {[
            { value: "10,000+", label: "Recipes" },
            { value: "500+", label: "Ingredients" },
            { value: "AI", label: "Powered" },
            { value: "Free", label: "to Use" },
          ].map((stat, idx) => (
            <React.Fragment key={idx}>
              {idx > 0 && (
                <div className="hidden sm:block h-8 w-[1px] bg-slate-300/35 dark:bg-slate-700/35" />
              )}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-center sm:text-left min-w-[100px] sm:min-w-0"
              >
                <div className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-accentGreen via-accentTeal to-accentPurple bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-mutedTextLight dark:text-mutedTextDark uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScrollDown}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-2 rounded-full border border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5 text-mutedTextLight dark:text-mutedTextDark hover:text-accentTeal dark:hover:text-accentTeal transition-colors z-20 cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
