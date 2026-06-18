"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Clock, Flame, ArrowUpRight } from "lucide-react";
import { Recipe } from "../types";

interface RelatedRecipesProps {
  recipes: Recipe[];
  onSelectRecipe: (name: string) => void;
}

export default function RelatedRecipes({ recipes, onSelectRecipe }: RelatedRecipesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - 320 : scrollLeft + 320;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const handleSelect = (name: string) => {
    onSelectRecipe(name);
    // Smooth scroll to recipe result section
    const element = document.querySelector("#recipe-result");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback scroll to home/top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="related-recipes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            You Might Also Like
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-accentGreen to-accentTeal rounded-full" />
        </div>

        {/* Scroll Navigation Arrows */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => scroll("left")}
            className="p-2.5 rounded-xl border border-black/5 dark:border-white/5 bg-lightSurface/85 dark:bg-darkSurface/85 backdrop-blur-md hover:bg-black/10 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 transition-colors shadow-sm cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2.5 rounded-xl border border-black/5 dark:border-white/5 bg-lightSurface/85 dark:bg-darkSurface/85 backdrop-blur-md hover:bg-black/10 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 transition-colors shadow-sm cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Drag-to-scroll row */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 pb-6 pt-2 scroll-smooth scrollbar-hide snap-x select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {recipes.map((recipe, idx) => (
          <motion.div
            key={recipe.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            whileHover={{ scale: 1.03, y: -4 }}
            className="min-w-[280px] sm:min-w-[320px] max-w-[320px] glass-card light-theme:bg-white/80 border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 snap-start group cursor-pointer"
            onClick={() => handleSelect(recipe.name)}
          >
            {/* Card Top: Image with overlay */}
            <div className="h-44 relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              {/* Cooking time chip (absolute top-right) */}
              <span className="absolute top-3 right-3 flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold shadow-md">
                <Clock className="w-3 h-3 text-accentTeal" />
                <span>{recipe.prepTime}</span>
              </span>

              {/* Difficulty chip (absolute top-left) */}
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold shadow-md">
                {recipe.difficulty}
              </span>

              {/* Gradient name overlay at bottom of image */}
              <div className="absolute bottom-3 left-4 right-4">
                <h3 className="font-extrabold text-white text-base leading-tight drop-shadow-sm">
                  {recipe.name}
                </h3>
              </div>
            </div>

            {/* Card Body: Ratings and Calories */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <p className="text-xs text-mutedTextLight dark:text-mutedTextDark leading-relaxed mb-4 line-clamp-2">
                {recipe.description}
              </p>

              <div className="flex items-center justify-between border-t border-black/5 dark:border-white/5 pt-4">
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {recipe.rating}
                  </span>
                  <span className="text-[10px] text-mutedTextLight dark:text-mutedTextDark">
                    ({recipe.reviewCount})
                  </span>
                </div>

                {/* Energy */}
                <div className="flex items-center space-x-1 text-xs font-bold text-orange-500">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{recipe.calories} Cal</span>
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-5 pb-5 pt-0">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect(recipe.name);
                }}
                className="w-full py-2.5 rounded-xl border border-black/10 dark:border-white/5 hover:border-accentTeal/50 dark:hover:border-accentTeal/50 hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-center space-x-1.5 text-xs font-bold text-slate-800 dark:text-white transition-all duration-300"
              >
                <span>View Recipe</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accentTeal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
