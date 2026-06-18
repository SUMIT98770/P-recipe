"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Leaf, BarChart3, ShoppingCart, Sparkles, Bot, ArrowRight } from "lucide-react";
import { Feature } from "../types";

interface AIFeaturesSectionProps {
  features: Feature[];
}

export default function AIFeaturesSection({ features }: AIFeaturesSectionProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case "Search":
        return <Search className="w-6 h-6 text-white" />;
      case "Leaf":
        return <Leaf className="w-6 h-6 text-white" />;
      case "BarChart3":
        return <BarChart3 className="w-6 h-6 text-white" />;
      case "ShoppingCart":
        return <ShoppingCart className="w-6 h-6 text-white" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-white" />;
      case "Bot":
        return <Bot className="w-6 h-6 text-white" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20 relative overflow-hidden">
      
      {/* Background Gradient Mesh */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute -top-[10%] left-[20%] w-[350px] h-[350px] bg-accentTeal/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[10%] right-[20%] w-[350px] h-[350px] bg-accentPurple/20 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Powered by Artificial Intelligence
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accentGreen via-accentTeal to-accentPurple mx-auto rounded-full" />
          <p className="text-sm sm:text-base text-mutedTextLight dark:text-mutedTextDark leading-relaxed">
            Our AI engine understands your needs and delivers personalized culinary experiences
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-card light-theme:bg-white/80 border border-black/5 dark:border-white/10 p-6 rounded-2xl flex flex-col justify-between shadow-lg hover:shadow-xl hover:shadow-accentTeal/5 hover:border-accentTeal/25 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Card top right glowing dot */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-accentGreen to-accentTeal opacity-20 blur-md pointer-events-none group-hover:scale-150 transition-transform duration-500" />
              
              <div className="space-y-4">
                {/* Gradient Icon Container */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-md shadow-accentTeal/10`}
                >
                  {getIcon(feature.iconName)}
                </div>

                {/* Feature Title */}
                <h3 className="text-lg font-bold text-slate-850 dark:text-white group-hover:text-accentTeal transition-colors">
                  {feature.title}
                </h3>

                {/* Feature Description */}
                <p className="text-sm text-mutedTextLight dark:text-mutedTextDark leading-relaxed line-clamp-3">
                  {feature.description}
                </p>
              </div>

              {/* Learn More Link */}
              <div className="pt-6 mt-4 border-t border-black/5 dark:border-white/5">
                <a
                  href="#home"
                  className="inline-flex items-center space-x-1 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-accentTeal dark:hover:text-accentTeal transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
