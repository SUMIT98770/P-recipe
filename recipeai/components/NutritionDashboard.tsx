"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Flame, Dumbbell, Wheat, Droplet, Layers, AlertTriangle, CheckSquare } from "lucide-react";
import { NutritionInfo } from "../types";

interface NutritionDashboardProps {
  nutritionData: NutritionInfo;
}

// Custom Counter Component using standard React hooks trigger when in view
function AnimatedValue({ value }: { value: string }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  // Extract number from string (e.g. "320 kcal" -> 320, "58g" -> 58, "420mg" -> 420)
  const numValue = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
  const suffix = value.replace(/[0-9.]/g, "");

  useEffect(() => {
    if (!isInView) return;
    
    const start = 0;
    const duration = 1500; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function outQuad
      const easedProgress = progress * (2 - progress);
      const val = Math.round(start + easedProgress * (numValue - start) * 10) / 10;
      
      setCurrent(val);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCurrent(numValue);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, numValue]);

  return <span ref={ref}>{current}{suffix}</span>;
}

export default function NutritionDashboard({ nutritionData }: NutritionDashboardProps) {
  const containerRef = useRef(null);
  const isContainerInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Macro calculation details for Donut Chart
  // Carbs: 58g, Protein: 6g, Fat: 8g (Jeera Rice example)
  const carbsG = parseFloat(nutritionData.carbs) || 0;
  const proteinG = parseFloat(nutritionData.protein) || 0;
  const fatG = parseFloat(nutritionData.fat) || 0;
  const totalMacros = carbsG + proteinG + fatG || 1;

  const carbsPct = carbsG / totalMacros;
  const fatPct = fatG / totalMacros;
  const proteinPct = proteinG / totalMacros;

  // SVG ring settings
  const radius = 75;
  const circ = 2 * Math.PI * radius; // ~471.2

  const carbsLength = circ * carbsPct;
  const fatLength = circ * fatPct;
  const proteinLength = circ * proteinPct;

  const carbsOffset = 0;
  const fatOffset = -carbsLength;
  const proteinOffset = -(carbsLength + fatLength);

  const getMetricIcon = (label: string) => {
    const l = label.toLowerCase();
    if (l.includes("calor")) return <Flame className="w-5 h-5 text-accentTeal" />;
    if (l.includes("protein")) return <Dumbbell className="w-5 h-5 text-accentGreen" />;
    if (l.includes("carbo")) return <Wheat className="w-5 h-5 text-accentPurple" />;
    if (l.includes("fat")) return <Droplet className="w-5 h-5 text-orange-500" />;
    if (l.includes("fiber")) return <Layers className="w-5 h-5 text-pink-500" />;
    return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
  };

  return (
    <section
      id="nutrition"
      ref={containerRef}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Nutritional Information
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-accentGreen to-accentTeal rounded-full" />
        </div>

        <div className="flex items-center space-x-3">
          <span className="inline-block px-3 py-1 rounded-full bg-slate-200 dark:bg-white/5 border border-black/5 dark:border-white/5 text-mutedTextLight dark:text-mutedTextDark text-xs font-bold">
            Per Serving
          </span>
          <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 text-xs font-bold shadow-sm">
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Healthy Choice</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Side: Large donut progress chart */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-[220px] h-[220px] flex items-center justify-center">
            {/* Background circle */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="110"
                cy="110"
                r={radius}
                className="stroke-black/5 dark:stroke-white/5"
                strokeWidth="18"
                fill="transparent"
              />
              {/* Carbs Segment (Blue) */}
              {isContainerInView && (
                <motion.circle
                  cx="110"
                  cy="110"
                  r={radius}
                  stroke="#7B61FF"
                  strokeWidth="18"
                  fill="transparent"
                  strokeDasharray={`${carbsLength} ${circ}`}
                  initial={{ strokeDashoffset: circ }}
                  animate={{ strokeDashoffset: carbsOffset }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  strokeLinecap="round"
                />
              )}
              {/* Fat Segment (Orange) */}
              {isContainerInView && (
                <motion.circle
                  cx="110"
                  cy="110"
                  r={radius}
                  stroke="#FF6B35"
                  strokeWidth="18"
                  fill="transparent"
                  strokeDasharray={`${fatLength} ${circ}`}
                  initial={{ strokeDashoffset: circ }}
                  animate={{ strokeDashoffset: fatOffset }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  strokeLinecap="round"
                />
              )}
              {/* Protein Segment (Green) */}
              {isContainerInView && (
                <motion.circle
                  cx="110"
                  cy="110"
                  r={radius}
                  stroke="#00F5A0"
                  strokeWidth="18"
                  fill="transparent"
                  strokeDasharray={`${proteinLength} ${circ}`}
                  initial={{ strokeDashoffset: circ }}
                  animate={{ strokeDashoffset: proteinOffset }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                  strokeLinecap="round"
                />
              )}
            </svg>

            {/* Inner Content */}
            <div className="absolute text-center flex flex-col items-center justify-center">
              <span className="text-3xl sm:text-4xl font-black text-slate-800 dark:text-white">
                <AnimatedValue value={`${nutritionData.calories} Cal`} />
              </span>
              <span className="text-xs uppercase tracking-widest text-mutedTextLight dark:text-mutedTextDark font-bold mt-1">
                Calories
              </span>
            </div>
          </div>

          {/* Macro legend below chart */}
          <div className="flex space-x-6 mt-8">
            <div className="flex items-center space-x-2">
              <span className="w-3.5 h-3.5 rounded-md bg-[#7B61FF] shadow-sm shadow-[#7B61FF]/20" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Carbs ({Math.round(carbsPct * 100)}%)
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3.5 h-3.5 rounded-md bg-[#FF6B35] shadow-sm shadow-[#FF6B35]/20" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Fat ({Math.round(fatPct * 100)}%)
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-3.5 h-3.5 rounded-md bg-[#00F5A0] shadow-sm shadow-[#00F5A0]/20" />
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Protein ({Math.round(proteinPct * 100)}%)
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Grid of 6 metric cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {nutritionData.metrics.map((metric, idx) => {
            // Mini Ring Settings
            const miniRadius = 15;
            const miniCirc = 2 * Math.PI * miniRadius; // ~94.2
            const strokeOffset = miniCirc - (miniCirc * metric.percentage) / 100;

            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-card light-theme:bg-white/80 p-5 rounded-2xl border border-black/5 dark:border-white/5 flex items-center justify-between shadow-sm"
              >
                {/* Metric text details */}
                <div className="space-y-1">
                  <div className="flex items-center space-x-1.5 text-xs text-mutedTextLight dark:text-mutedTextDark font-bold uppercase tracking-wide">
                    {getMetricIcon(metric.label)}
                    <span>{metric.label}</span>
                  </div>
                  <div
                    className="text-xl font-extrabold"
                    style={{ color: metric.color }}
                  >
                    <AnimatedValue value={metric.value} />
                  </div>
                  <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/5 text-slate-500 dark:text-slate-400">
                    {metric.dv} DV
                  </span>
                </div>

                {/* SVG Progress Circle right-aligned */}
                <div className="relative w-11 h-11 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="22"
                      cy="22"
                      r={miniRadius}
                      className="stroke-black/5 dark:stroke-white/5"
                      strokeWidth="3.5"
                      fill="transparent"
                    />
                    {isContainerInView && (
                      <motion.circle
                        cx="22"
                        cy="22"
                        r={miniRadius}
                        stroke={metric.color}
                        strokeWidth="3.5"
                        fill="transparent"
                        strokeDasharray={miniCirc}
                        initial={{ strokeDashoffset: miniCirc }}
                        animate={{ strokeDashoffset: strokeOffset }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: idx * 0.1 }}
                        strokeLinecap="round"
                      />
                    )}
                  </svg>
                  <span className="absolute text-[9px] font-black text-slate-800 dark:text-white">
                    {metric.percentage}%
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
