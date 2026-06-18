"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Heart, ShoppingBag, Check } from "lucide-react";
import { Product } from "../types";

interface EssentialProductsSectionProps {
  products: Product[];
}

export default function EssentialProductsSection({ products }: EssentialProductsSectionProps) {
  const [wishlistedIds, setWishlistedIds] = useState<string[]>([]);
  const [addedProductId, setAddedProductId] = useState<string | null>(null);

  const toggleWishlist = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (wishlistedIds.includes(id)) {
      setWishlistedIds(wishlistedIds.filter((item) => item !== id));
    } else {
      setWishlistedIds([...wishlistedIds, id]);
    }
  };

  const handleAddToCart = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setAddedProductId(id);
    setTimeout(() => setAddedProductId(null), 2000);
  };

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-10">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            Recommended Products
          </h2>
          <div className="mt-2 h-1 w-20 bg-gradient-to-r from-accentGreen to-accentTeal rounded-full" />
        </div>
        <span className="inline-block px-3 py-1 rounded-full bg-slate-200 dark:bg-white/5 border border-black/5 dark:border-white/5 text-mutedTextLight dark:text-mutedTextDark text-xs font-bold uppercase tracking-wider">
          Sponsored
        </span>
      </div>

      {/* Grid wrapper: Horizontal scroll on mobile, 4-col grid on desktop */}
      <div className="flex overflow-x-auto pb-4 gap-6 scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
        {products.map((product, idx) => {
          const isWishlisted = wishlistedIds.includes(product.id);
          const isAdded = addedProductId === product.id;

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="min-w-[280px] sm:min-w-[300px] lg:min-w-0 glass-card light-theme:bg-white/80 border border-black/5 dark:border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 relative group"
            >
              {/* Product Image Container */}
              <div className="h-48 relative overflow-hidden bg-white flex items-center justify-center p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Badge top-left */}
                {product.tag && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-bold rounded-lg text-white bg-gradient-to-r from-accentGreen to-accentTeal shadow-sm uppercase tracking-wider">
                    {product.tag}
                  </span>
                )}

                {/* Wishlist button top-right */}
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  onClick={(e) => toggleWishlist(product.id, e)}
                  className="absolute top-3 right-3 p-2 rounded-xl bg-lightBg/90 dark:bg-darkBg/80 backdrop-blur-md border border-black/5 dark:border-white/5 text-slate-400 hover:text-rose-500 shadow-md transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart
                    className={`w-4 h-4 transition-colors ${
                      isWishlisted ? "fill-rose-500 text-rose-500" : ""
                    }`}
                  />
                </motion.button>
              </div>

              {/* Product Details */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="mb-2">
                  <span className="text-xs font-bold text-accentTeal uppercase tracking-wider">
                    {product.brand}
                  </span>
                  <h3 className="font-bold text-slate-800 dark:text-white text-base mt-0.5 line-clamp-1">
                    {product.name}
                  </h3>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1.5 mb-4">
                  <div className="flex items-center space-x-0.5">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {product.rating}
                  </span>
                  <span className="text-[10px] text-mutedTextLight dark:text-mutedTextDark">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price and Cart Action */}
                <div className="mt-auto space-y-4">
                  <div className="flex items-baseline space-x-2">
                    <span className="text-xl font-extrabold text-slate-850 dark:text-white">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-mutedTextLight dark:text-mutedTextDark line-through">
                      ₹{product.originalPrice}
                    </span>
                    <span className="text-xs font-bold text-emerald-500">
                      {product.discount}
                    </span>
                  </div>

                  {/* Add to Cart button */}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => handleAddToCart(product.id, e)}
                    className="w-full py-2.5 rounded-xl text-white font-bold text-sm bg-gradient-to-r from-accentGreen via-accentTeal to-accentPurple shadow-lg shadow-accentTeal/10 hover:shadow-accentTeal/25 flex items-center justify-center space-x-2 transition-all"
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>Added to Cart</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 text-white" />
                        <span>Add to Cart</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
