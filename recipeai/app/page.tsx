"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SearchResultSection from "@/components/SearchResultSection";
import IngredientsSection from "@/components/IngredientsSection";
import EssentialProductsSection from "@/components/EssentialProductsSection";
import CookingStepsTimeline from "@/components/CookingStepsTimeline";
import NutritionDashboard from "@/components/NutritionDashboard";
import RelatedRecipes from "@/components/RelatedRecipes";
import AIFeaturesSection from "@/components/AIFeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { recipeDatabase, relatedRecipes, features, testimonials } from "@/lib/mockData";

export default function Home() {
  const [activeRecipeKey, setActiveRecipeKey] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (query: string) => {
    setIsLoading(true);
    setActiveRecipeKey(null);

    // Simulate AI generation loading time
    setTimeout(() => {
      const q = query.toLowerCase();
      let matchedKey = "jeera rice"; // default fallback

      if (q.includes("pasta")) {
        matchedKey = "pasta";
      } else if (q.includes("biryani")) {
        matchedKey = "biryani";
      } else if (
        q.includes("paneer") ||
        q.includes("butter") ||
        q.includes("masala")
      ) {
        matchedKey = "paneer butter masala";
      }

      setActiveRecipeKey(matchedKey);
      setIsLoading(false);

      // Scroll to the results block
      setTimeout(() => {
        const element = document.getElementById("recipe-result");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }, 1500);
  };

  const handleSelectRelatedRecipe = (name: string) => {
    handleSearch(name);
  };

  const activeRecipe = activeRecipeKey ? recipeDatabase[activeRecipeKey] : null;

  return (
    <div className="flex flex-col min-h-screen bg-lightBg dark:bg-darkBg text-bodyTextLight dark:text-bodyTextDark transition-colors duration-300">
      {/* Navigation */}
      <Navbar />

      {/* Hero Header Area */}
      <main className="flex-grow">
        <HeroSection onSearch={handleSearch} isLoading={isLoading} />

        {/* Loading Skeleton */}
        {isLoading && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            {/* Mocking SearchResultSection */}
            <div className="glass-card rounded-3xl border border-black/5 dark:border-white/10 p-6 sm:p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 h-[300px] bg-slate-350 dark:bg-slate-800 rounded-2xl animate-pulse" />
                <div className="lg:col-span-7 space-y-4">
                  <div className="h-4 w-28 bg-slate-350 dark:bg-slate-800 rounded-md animate-pulse" />
                  <div className="h-10 w-2/3 bg-slate-350 dark:bg-slate-800 rounded-md animate-pulse" />
                  <div className="h-16 w-full bg-slate-350 dark:bg-slate-800 rounded-md animate-pulse" />
                  <div className="h-12 w-full bg-slate-350 dark:bg-slate-800 rounded-md animate-pulse" />
                </div>
              </div>
            </div>

            {/* Mocking IngredientsSection */}
            <div className="space-y-6">
              <div className="h-8 w-48 bg-slate-350 dark:bg-slate-800 rounded-md animate-pulse" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="glass-card border border-black/5 dark:border-white/10 p-6 rounded-2xl flex flex-col items-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-slate-350 dark:bg-slate-800 animate-pulse" />
                    <div className="h-5 w-24 bg-slate-350 dark:bg-slate-800 rounded-md animate-pulse" />
                    <div className="h-4 w-12 bg-slate-350 dark:bg-slate-800 rounded-md animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Recipe Details Dashboard */}
        {activeRecipe && !isLoading && (
          <div className="space-y-4 animate-fade-in-up">
            {/* Search results Hero Header */}
            <SearchResultSection
              recipeDetails={activeRecipe.recipeDetails}
              isVisible={true}
            />

            {/* Required Ingredients */}
            <IngredientsSection ingredients={activeRecipe.ingredients} />

            {/* Recommended Products */}
            <EssentialProductsSection products={activeRecipe.products} />

            {/* Cooking steps Timeline */}
            <CookingStepsTimeline steps={activeRecipe.cookingSteps} />

            {/* Nutrition dashboard details */}
            <NutritionDashboard nutritionData={activeRecipe.nutritionData} />
          </div>
        )}

        {/* You Might Also Like */}
        <RelatedRecipes
          recipes={relatedRecipes}
          onSelectRecipe={handleSelectRelatedRecipe}
        />

        {/* AI Features section info */}
        <AIFeaturesSection features={features} />

        {/* User Testimonials reviews */}
        <TestimonialsSection testimonials={testimonials} />
      </main>

      {/* Footer copyright */}
      <Footer />
    </div>
  );
}
