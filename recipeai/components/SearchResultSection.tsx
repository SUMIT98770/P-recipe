"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Clock, Users, ShieldAlert, Flame, Share2, Heart, Check } from "lucide-react";
import { Recipe } from "../types";

interface SearchResultSectionProps {
  recipeDetails: Recipe | null;
  isVisible: boolean;
}

export default function SearchResultSection({ recipeDetails, isVisible }: SearchResultSectionProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isShared, setIsShared] = useState(false);

  if (!isVisible || !recipeDetails) return null;

  const handleShare = () => {
    setIsShared(true);
    navigator.clipboard.writeText(window.location.href);
    setTimeout(() => setIsShared(false), 2000);
  };

  // Star rating helper
  const renderStars = (rating: number) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= floorRating) {
        stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 shrink-0" />);
      } else if (i === floorRating + 1 && hasHalfStar) {
        stars.push(
          <div key={i} className="relative shrink-0">
            <Star className="w-4 h-4 text-slate-300 dark:text-slate-600" />
            <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} className="w-4 h-4 text-slate-300 dark:text-slate-600 shrink-0" />);
      }
    }
    return stars;
  };

  return (
    <motion.section
      id="recipe-result"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Container with top-left gradient border effect */}
      <div className="relative glass-card light-theme:bg-white/80 rounded-3xl border border-black/5 dark:border-white/10 overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10">
        
        {/* Top-Left Border Accent */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accentGreen to-accentTeal opacity-30 blur-2xl pointer-events-none" />
        <div className="absolute top-0 left-0 w-1.5 h-16 bg-gradient-to-b from-accentGreen to-accentTeal rounded-br-full" />
        <div className="absolute top-0 left-0 h-1.5 w-16 bg-gradient-to-r from-accentGreen to-accentTeal rounded-br-full" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Image with overlays */}
          <div className="lg:col-span-5 relative group rounded-2xl overflow-hidden shadow-lg border border-black/5 dark:border-white/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={recipeDetails.image}
              alt={recipeDetails.name}
              className="w-full h-[300px] sm:h-[350px] lg:h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            
            {/* Vegetarian Tag */}
            {recipeDetails.isVegetarian && (
              <span className="absolute top-4 left-4 inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-bold shadow-md">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span>100% VEG</span>
              </span>
            )}
          </div>

          {/* Right Column: Recipe Meta Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              {/* Rating and Reviews */}
              <div className="flex items-center space-x-2 mb-3">
                <div className="flex items-center space-x-0.5">{renderStars(recipeDetails.rating)}</div>
                <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{recipeDetails.rating}</span>
                <span className="text-xs text-mutedTextLight dark:text-mutedTextDark">({recipeDetails.reviewCount})</span>
              </div>

              {/* Recipe Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-accentGreen via-accentTeal to-accentPurple bg-clip-text text-transparent mb-4">
                {recipeDetails.name}
              </h2>

              {/* Recipe Description */}
              <p className="text-sm sm:text-base text-mutedTextLight dark:text-mutedTextDark leading-relaxed">
                {recipeDetails.description}
              </p>
            </div>

            {/* Badges/Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-black/5 dark:border-white/5">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-accentTeal/10 text-accentTeal rounded-lg">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-mutedTextLight dark:text-mutedTextDark font-medium">Prep Time</div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200">{recipeDetails.prepTime}</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-accentPurple/10 text-accentPurple rounded-lg">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-mutedTextLight dark:text-mutedTextDark font-medium">Servings</div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200">{recipeDetails.servings} Servings</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-accentGreen/10 text-accentGreen rounded-lg">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-mutedTextLight dark:text-mutedTextDark font-medium">Difficulty</div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200">{recipeDetails.difficulty}</div>
                </div>
              </div>

              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-orange-500/10 text-orange-500 rounded-lg">
                  <Flame className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs text-mutedTextLight dark:text-mutedTextDark font-medium">Energy</div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200">{recipeDetails.calories} kcal</div>
                </div>
              </div>
            </div>

            {/* Tags section */}
            <div className="flex flex-wrap gap-2">
              {recipeDetails.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-accentTeal/20 hover:bg-black/10 dark:hover:bg-white/10 text-mutedTextLight dark:text-mutedTextDark cursor-default transition-all"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setIsSaved(!isSaved)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl border text-sm font-bold transition-all ${
                  isSaved
                    ? "bg-accentPurple/20 border-accentPurple text-accentPurple"
                    : "border-black/10 hover:border-accentPurple/50 dark:border-white/10 dark:hover:border-accentPurple/50 hover:bg-black/5 dark:hover:bg-white/5 text-slate-800 dark:text-slate-100"
                }`}
              >
                <Heart className={`w-4 h-4 ${isSaved ? "fill-accentPurple text-accentPurple" : ""}`} />
                <span>{isSaved ? "Saved to Cooklist" : "Save Recipe"}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleShare}
                className="flex items-center space-x-2 px-6 py-3 rounded-xl border border-black/10 hover:border-accentTeal/50 dark:border-white/10 dark:hover:border-accentTeal/50 hover:bg-black/5 dark:hover:bg-white/5 text-slate-800 dark:text-slate-100 text-sm font-bold transition-all"
              >
                {isShared ? <Check className="w-4 h-4 text-accentTeal" /> : <Share2 className="w-4 h-4" />}
                <span>{isShared ? "Copied Link!" : "Share Recipe"}</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
