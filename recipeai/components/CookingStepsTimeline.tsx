"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, CheckCircle2, Circle, HelpCircle } from "lucide-react";
import { Step } from "../types";

interface CookingStepsTimelineProps {
  steps: Step[];
}

export default function CookingStepsTimeline({ steps }: CookingStepsTimelineProps) {
  // Store completed steps
  const [completedIds, setCompletedIds] = useState<string[]>([]);

  // Sync completion when recipe steps change
  useEffect(() => {
    const initialCompleted = steps
      .filter((step) => step.status === "Completed")
      .map((step) => step.id);
    setCompletedIds(initialCompleted);
  }, [steps]);

  const toggleStepCompleted = (id: string) => {
    if (completedIds.includes(id)) {
      setCompletedIds(completedIds.filter((item) => item !== id));
    } else {
      setCompletedIds([...completedIds, id]);
    }
  };

  const progressPercent = Math.round((completedIds.length / steps.length) * 100);

  return (
    <section id="timeline" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">
          Cooking Instructions
        </h2>
        <div className="mt-2 h-1 w-20 bg-gradient-to-r from-accentGreen to-accentTeal mx-auto rounded-full" />
      </div>

      {/* Progress Bar Container */}
      <div className="glass-card light-theme:bg-white/80 border border-black/5 dark:border-white/10 p-5 rounded-2xl mb-12 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-sm font-bold text-slate-800 dark:text-white block">Cooking Progress</span>
          <span className="text-xs text-mutedTextLight dark:text-mutedTextDark">
            Check off steps as you complete them
          </span>
        </div>
        <div className="flex-1 max-w-md w-full flex items-center space-x-3.5">
          <div className="w-full h-2.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-accentGreen via-accentTeal to-accentPurple rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <span className="text-sm font-extrabold text-accentTeal whitespace-nowrap">
            {progressPercent}% Done
          </span>
        </div>
      </div>

      {/* Vertical Timeline container */}
      <div className="relative">
        {/* Animated vertical connector line (desktop center, mobile left) */}
        <div className="absolute top-8 bottom-8 left-6 md:left-1/2 w-0.5 bg-slate-300/30 dark:bg-slate-700/30 -translate-x-1/2 pointer-events-none" />
        
        {/* Draw-in progress line */}
        <div className="absolute top-8 bottom-8 left-6 md:left-1/2 w-[3px] -translate-x-1/2 pointer-events-none overflow-hidden">
          <motion.div
            className="w-full bg-gradient-to-b from-accentGreen via-accentTeal to-accentPurple h-full origin-top"
            style={{
              scaleY: completedIds.length / steps.length,
            }}
            transition={{ duration: 0.4 }}
          />
        </div>

        {/* Steps Nodes */}
        <div className="space-y-12">
          {steps.map((step, idx) => {
            const isCompleted = completedIds.includes(step.id);
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={step.id}
                className="flex flex-col md:flex-row items-start md:items-center relative"
              >
                {/* Node Dot / Badge (desktop center, mobile left) */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleStepCompleted(step.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-sm shadow-lg border-2 transition-all cursor-pointer ${
                      isCompleted
                        ? "bg-gradient-to-tr from-accentGreen to-accentTeal border-transparent text-slate-950"
                        : "bg-slate-800 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-white"
                    }`}
                  >
                    {step.number}
                  </motion.button>
                </div>

                {/* Left side empty placeholder on desktop to maintain alignment */}
                <div className="hidden md:block w-1/2 pr-16 text-right" />

                {/* Right side Card (actual instruction details) */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "spring", stiffness: 80, delay: 0.05 }}
                  className={`w-full md:w-1/2 pl-16 md:pl-16 md:odd:pl-0 md:odd:pr-16 md:odd:text-right ${
                    isLeft ? "md:order-first" : ""
                  }`}
                >
                  <div
                    onClick={() => toggleStepCompleted(step.id)}
                    className={`glass-card light-theme:bg-white/80 p-5 rounded-2xl border cursor-pointer select-none transition-all duration-300 shadow-sm hover:shadow-md ${
                      isCompleted
                        ? "border-accentGreen bg-accentGreen/[0.02]"
                        : "border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10"
                    }`}
                  >
                    {/* Header: Title, Emoji, Duration */}
                    <div className={`flex items-center gap-3.5 mb-2.5 ${isLeft ? "md:justify-end" : "justify-start"}`}>
                      <span className="text-2xl">{step.emoji}</span>
                      <h3 className="font-bold text-slate-800 dark:text-white text-base">
                        {step.title}
                      </h3>
                      <div className="flex items-center text-xs text-accentTeal font-bold bg-accentTeal/10 px-2 py-0.5 rounded-md space-x-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{step.duration}</span>
                      </div>
                    </div>

                    {/* Instruction text */}
                    <p className="text-sm text-mutedTextLight dark:text-mutedTextDark leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Status Badge */}
                    <div className={`flex items-center space-x-2 text-xs font-bold uppercase tracking-wider ${isLeft ? "md:justify-end" : "justify-start"}`}>
                      {isCompleted ? (
                        <span className="flex items-center space-x-1 text-emerald-500">
                          <CheckCircle2 className="w-4 h-4 fill-emerald-500/10" />
                          <span>Completed</span>
                        </span>
                      ) : step.status === "In Progress" ? (
                        <span className="flex items-center space-x-1 text-accentPurple animate-pulse">
                          <Circle className="w-4 h-4 text-accentPurple animate-spin" />
                          <span>In Progress</span>
                        </span>
                      ) : (
                        <span className="flex items-center space-x-1 text-slate-400">
                          <HelpCircle className="w-4 h-4" />
                          <span>Pending</span>
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
