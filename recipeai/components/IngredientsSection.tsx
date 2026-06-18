"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Check, CheckSquare, Square } from "lucide-react";
import { Ingredient } from "../types";

interface IngredientsSectionProps {
  ingredients: Ingredient[];
}

export default function IngredientsSection({ ingredients }: IngredientsSectionProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [addedMessage, setAddedMessage] = useState(false);

  // Sync selection when ingredients change (on new search)
  useEffect(() => {
    // By default, select all available ingredients
    const initialSelected = ingredients
      .filter((ing) => ing.isAvailable)
      .map((ing) => ing.id);
    setSelectedIds(initialSelected);
  }, [ingredients]);

  const toggleSelect = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === ingredients.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(ingredients.map((ing) => ing.id));
    }
  };

  const handleAddToList = () => {
    if (selectedIds.length === 0) return;
    setAddedMessage(true);
    setTimeout(() => setAddedMessage(false), 3000);
  };

  // Ingredient emojis mapping
  const getIngredientEmoji = (name: string) => {
    const n = name.toLowerCase();
    if (n.includes("rice")) return "🌾";
    if (n.includes("cumin") || n.includes("jeera")) return "🟤";
    if (n.includes("ghee") || n.includes("butter")) return "🧈";
    if (n.includes("leaf") || n.includes("leaves")) return "🍃";
    if (n.includes("salt")) return "🧂";
    if (n.includes("water")) return "💧";
    if (n.includes("cardamom")) return "🟢";
    if (n.includes("cloves")) return "🟫";
    if (n.includes("paneer") || n.includes("cheese")) return "🧀";
    if (n.includes("tomato")) return "🍅";
    if (n.includes("cream")) return "🥛";
    if (n.includes("garlic") || n.includes("ginger")) return "🧄";
    if (n.includes("masala") || n.includes("spice")) return "🌶️";
    if (n.includes("onion")) return "🧅";
    if (n.includes("vegetable")) return "🥦";
    if (n.includes("saffron")) return "🌸";
    if (n.includes("mint") || n.includes("basil")) return "🌿";
    if (n.includes("pasta")) return "🍝";
    if (n.includes("oil")) return "🍾";
    return "🥣";
  };

  return (
    <section id="ingredients" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
        {/* Section Heading */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Required Ingredients
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-accentGreen to-accentTeal rounded-full" />
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleSelectAll}
            className="flex items-center space-x-2 text-sm font-semibold text-mutedTextLight dark:text-mutedTextDark hover:text-accentTeal dark:hover:text-accentTeal transition-colors"
          >
            {selectedIds.length === ingredients.length ? (
              <CheckSquare className="w-5 h-5 text-accentTeal" />
            ) : (
              <Square className="w-5 h-5" />
            )}
            <span>Select All</span>
          </button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAddToList}
            disabled={selectedIds.length === 0}
            className="flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-accentGreen to-accentTeal text-slate-950 font-bold rounded-xl shadow-lg shadow-accentTeal/10 hover:shadow-accentTeal/25 disabled:opacity-50 disabled:pointer-events-none transition-all text-sm"
          >
            {addedMessage ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to List!</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Shopping List ({selectedIds.length})</span>
              </>
            )}
          </motion.button>
        </div>
      </div>

      {/* Grid of Ingredients */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {ingredients.map((ingredient, idx) => {
          const isSelected = selectedIds.includes(ingredient.id);
          return (
            <motion.div
              key={ingredient.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.04, y: -4 }}
              onClick={() => toggleSelect(ingredient.id)}
              className={`glass-card light-theme:bg-white/80 border p-6 rounded-2xl flex flex-col items-center text-center cursor-pointer transition-all duration-300 relative select-none ${
                isSelected
                  ? "border-accentTeal bg-accentTeal/[0.03] shadow-md dark:shadow-accentTeal/5"
                  : "border-black/5 dark:border-white/5 shadow-sm hover:border-black/10 dark:hover:border-white/10"
              }`}
            >
              {/* Checkbox badge absolute */}
              <div className="absolute top-4 right-4">
                {isSelected ? (
                  <div className="w-5 h-5 rounded-md bg-accentTeal text-slate-950 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-md border border-slate-300 dark:border-slate-600" />
                )}
              </div>

              {/* Circular Gradient-bordered Icon Container */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-accentGreen/20 via-accentTeal/20 to-accentPurple/20 p-[1.5px] mb-4 flex items-center justify-center shadow-inner relative group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-lightSurface dark:bg-darkSurface rounded-full flex items-center justify-center text-2xl">
                  {getIngredientEmoji(ingredient.name)}
                </div>
              </div>

              {/* Ingredient Name */}
              <h3 className="font-bold text-slate-800 dark:text-white text-base mb-1">
                {ingredient.name}
              </h3>

              {/* Quantity */}
              <span className="text-sm font-semibold text-accentTeal mb-4">
                {ingredient.quantity}
              </span>

              {/* Availability Indicator */}
              <div className="flex items-center space-x-1.5 mt-auto">
                <span
                  className={`w-2 h-2 rounded-full ${
                    ingredient.isAvailable ? "bg-emerald-500" : "bg-amber-400"
                  }`}
                />
                <span className="text-xs font-semibold text-mutedTextLight dark:text-mutedTextDark">
                  {ingredient.isAvailable ? "Available" : "Optional"}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
