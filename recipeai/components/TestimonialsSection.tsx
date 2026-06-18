"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, CheckCircle } from "lucide-react";
import { Testimonial } from "../types";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    const stars = [];
    const floorRating = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= floorRating) {
        stars.push(<Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400 shrink-0" />);
      } else if (i === floorRating + 1 && hasHalfStar) {
        stars.push(
          <div key={i} className="relative shrink-0">
            <Star className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600" />
            <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        );
      } else {
        stars.push(<Star key={i} className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 shrink-0" />);
      }
    }
    return stars;
  };

  // Get visible items based on index (simulating carousel looping)
  const getVisibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const idx = (activeIdx + i) % testimonials.length;
      items.push(testimonials[idx]);
    }
    return items;
  };

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Loved by Food Enthusiasts
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-accentGreen via-accentTeal to-accentPurple mx-auto rounded-full" />
          <p className="text-sm font-semibold text-accentTeal uppercase tracking-wider">
            Join 50,000+ happy home cooks
          </p>
        </div>

        {/* Testimonials Desktop (3 visible) / Mobile (1 visible) */}
        <div className="relative overflow-hidden py-4">
          {/* Desktop view */}
          <div className="hidden lg:grid grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {getVisibleTestimonials().map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  layout
                  initial={{ opacity: 0, x: 50, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="glass-card light-theme:bg-white/80 p-6 rounded-2xl border border-black/5 dark:border-white/10 flex flex-col justify-between shadow-lg relative group h-[260px]"
                >
                  <Quote className="w-8 h-8 text-accentTeal/20 absolute top-4 right-4" />
                  
                  <div className="space-y-4">
                    {/* Stars */}
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                    {/* Quote Text */}
                    <p className="text-sm italic text-mutedTextLight dark:text-mutedTextDark leading-relaxed line-clamp-4">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </div>

                  {/* Profile info footer */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-black/5 dark:border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accentGreen via-accentTeal to-accentPurple p-[1px] flex items-center justify-center shadow-inner">
                      <div className="w-full h-full bg-lightSurface dark:bg-darkSurface rounded-full flex items-center justify-center text-xs font-bold text-slate-800 dark:text-white">
                        {testimonial.avatarInitials}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-bold text-slate-850 dark:text-white">
                          {testimonial.name}
                        </span>
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/10 shrink-0" />
                      </div>
                      <span className="text-[11px] text-mutedTextLight dark:text-mutedTextDark font-medium">
                        {testimonial.role}, {testimonial.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile view */}
          <div className="lg:hidden block">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[activeIdx].id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card light-theme:bg-white/80 p-6 rounded-2xl border border-black/5 dark:border-white/10 flex flex-col justify-between shadow-lg relative h-[250px] max-w-md mx-auto"
              >
                <Quote className="w-8 h-8 text-accentTeal/20 absolute top-4 right-4" />
                
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonials[activeIdx].rating)}
                  </div>
                  {/* Quote Text */}
                  <p className="text-sm italic text-mutedTextLight dark:text-mutedTextDark leading-relaxed line-clamp-4">
                    &ldquo;{testimonials[activeIdx].text}&rdquo;
                  </p>
                </div>

                {/* Profile info footer */}
                <div className="flex items-center space-x-3 pt-4 border-t border-black/5 dark:border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-accentGreen via-accentTeal to-accentPurple p-[1px] flex items-center justify-center shadow-inner">
                    <div className="w-full h-full bg-lightSurface dark:bg-darkSurface rounded-full flex items-center justify-center text-xs font-bold text-slate-800 dark:text-white">
                      {testimonials[activeIdx].avatarInitials}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-1">
                      <span className="text-sm font-bold text-slate-850 dark:text-white">
                        {testimonials[activeIdx].name}
                      </span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/10 shrink-0" />
                    </div>
                    <span className="text-[11px] text-mutedTextLight dark:text-mutedTextDark font-medium">
                      {testimonials[activeIdx].role}, {testimonials[activeIdx].location}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Indicators Dots */}
        <div className="flex justify-center space-x-2.5">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeIdx === idx
                  ? "w-8 bg-gradient-to-r from-accentGreen to-accentTeal"
                  : "w-2.5 bg-black/10 dark:bg-white/10"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
