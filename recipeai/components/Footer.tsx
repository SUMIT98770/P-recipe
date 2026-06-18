"use client";

import React from "react";
import { ChefHat, Github, Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="bg-[#0A0F1E] text-slate-300 relative overflow-hidden border-t-2 border-transparent">
      {/* Top Gradient Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accentGreen via-accentTeal to-accentPurple" />

      {/* Background Subtle Orbs */}
      <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-accentTeal/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-accentPurple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand details */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-gradient-to-tr from-accentGreen via-accentTeal to-accentPurple rounded-xl text-white">
                <ChefHat className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-accentGreen via-accentTeal to-accentPurple bg-clip-text text-transparent">
                RecipeAI
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Experience the future of cooking with our AI-powered culinary companion. Generate recipes, track nutrition, and discover ingredients seamlessly.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              {[
                { Icon: Github, href: "https://github.com" },
                { Icon: Twitter, href: "https://twitter.com" },
                { Icon: Instagram, href: "https://instagram.com" },
                { Icon: Youtube, href: "https://youtube.com" },
                { Icon: Linkedin, href: "https://linkedin.com" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-900 border border-white/5 hover:border-accentTeal/30 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-accentTeal transition-all duration-300"
                >
                  <social.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { name: "Home", href: "#home" },
                { name: "Recipes", href: "#recipe" },
                { name: "Ingredients", href: "#ingredients" },
                { name: "Categories", href: "#features" },
                { name: "About", href: "#about" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-accentTeal hover:underline transition-all duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Features */}
          <div>
            <h3 className="text-base font-bold text-white mb-6 tracking-wide">AI Features</h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { name: "AI Recipe Search", href: "#home" },
                { name: "Ingredient Auto-check", href: "#ingredients" },
                { name: "Nutrition Dashboard", href: "#nutrition" },
                { name: "Grocery Deals", href: "#products" },
                { name: "Interactive Timeline", href: "#timeline" },
              ].map((feat) => (
                <li key={feat.name}>
                  <a
                    href={feat.href}
                    onClick={(e) => handleLinkClick(e, feat.href)}
                    className="hover:text-accentTeal hover:underline transition-all duration-200"
                  >
                    {feat.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white tracking-wide">Contact & Newsletter</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-accentTeal shrink-0" />
                <span>support@recipeai.com</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-accentPurple shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-accentGreen shrink-0 mt-0.5" />
                <span>B.Tech AI/ML Lab, Innovation Block, Sector 62, Noida, UP</span>
              </div>
            </div>
            {/* Newsletter input */}
            <div className="space-y-2">
              <p className="text-xs text-slate-500">Subscribe for weekly recipes & tips.</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-slate-900 border border-white/5 focus:border-accentTeal focus:ring-1 focus:ring-accentTeal text-slate-200 placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm w-full outline-none transition-all duration-200"
                />
                <button
                  type="submit"
                  className="p-2.5 bg-gradient-to-r from-accentGreen to-accentTeal text-slate-950 font-bold rounded-xl hover:shadow-lg hover:shadow-accentTeal/20 transition-all duration-300"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} RecipeAI – Smart Recipe & Ingredient Assistant. B.Tech Semester Project.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
