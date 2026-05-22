/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCT_SPECS } from '../data';
import { Star, Eye, ShieldCheck, HeartPulse, Sparkles, ChevronRight } from 'lucide-react';

interface ProductSectionProps {
  packagingImageUrl: string;
}

export default function ProductSection({ packagingImageUrl }: ProductSectionProps) {
  const [activeSpecIndex, setActiveSpecIndex] = useState(0);

  return (
    <section id="product" className="relative min-h-screen bg-zinc-950 py-24 px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden bg-grain">
      
      {/* Background radial soft light for premium keynote feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-lavrov-gold/5 to-transparent blur-[120px] pointer-events-none" />

      {/* Decorative Golden Line Accent */}
      <div className="absolute top-0 left-1/4 w-px h-24 bg-gradient-to-b from-transparent to-lavrov-gold/15" />

      <div className="w-full max-w-7xl z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-lavrov-gold font-mono text-xs uppercase tracking-widest px-3 py-1 border border-lavrov-gold/10 rounded-full bg-zinc-900/40 backdrop-blur-sm mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Премиальное качество • Без компромиссов</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-6xl font-light tracking-tight text-white mb-4 uppercase"
          >
            Истинный <span className="italic font-serif text-lavrov-gold normal-case">Суперфуд</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="max-w-xl mx-auto text-zinc-400 font-light text-sm sm:text-base tracking-wide"
          >
            Качество нашей гречихи выше цены. Это безупречный гастрономический продукт для искушенных покупателей.
          </motion.p>
        </div>

        {/* 2-Column Product Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Packaging & Live Texture (Left Column) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-zinc-950/80 border border-zinc-800 bg-zinc-900/40 p-4 group"
            >
              {/* Image Container with Hover glow */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img
                  src={packagingImageUrl || "https://picsum.photos/seed/buckwheat-box/800/800"}
                  alt="Premium Lavrovka Buckwheat Packaging"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-zinc-950/10" />
                
                {/* Hover glowing aura */}
                <div className="absolute inset-0 bg-gradient-to-tr from-lavrov-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Brand Card Label Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl flex justify-between items-center">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-lavrov-gold block mb-1">
                      сертификат соответствия
                    </span>
                    <h4 className="text-white font-display text-sm font-semibold tracking-wide">
                      ОРГАНИКА ЭКО-ЗОНА
                    </h4>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
            </motion.div>

            {/* Slogans Showcase */}
            <div className="flex justify-center items-center space-x-6 mt-8">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Качество выше цены</span>
              <div className="w-1.5 h-1.5 rounded-full bg-lavrov-gold/30" />
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Без компромиссов</span>
              <div className="w-1.5 h-1.5 rounded-full bg-lavrov-gold/30" />
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Premium Nutrition</span>
            </div>
          </div>

          {/* Interactive Specifications (Right Column) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            <div className="space-y-4">
              {PRODUCT_SPECS.map((spec, index) => {
                const isActive = activeSpecIndex === index;
                
                return (
                  <motion.div
                    key={spec.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    onClick={() => setActiveSpecIndex(index)}
                    className={`p-6 rounded-2xl cursor-pointer border transition-all duration-500 relative flex items-start space-x-5 ${
                      isActive
                        ? 'bg-zinc-900 border-lavrov-gold/40 shadow-xl'
                        : 'bg-zinc-950/60 border-zinc-900/60 hover:border-zinc-800 hover:bg-zinc-900/30'
                    }`}
                  >
                    {/* Big metric indicator or status icon */}
                    <div className={`w-14 h-14 rounded-xl flex flex-col justify-center items-center font-mono shrink-0 transition-colors duration-500 ${
                      isActive ? 'bg-lavrov-gold text-zinc-950' : 'bg-zinc-900 text-zinc-300'
                    }`}>
                      <span className="text-sm font-bold tracking-tighter leading-none">{spec.metric}</span>
                      <span className="text-[8px] font-medium uppercase mt-1 opacity-80 leading-none block text-center max-w-[48px] truncate">
                        {spec.subtext.split(' ')[0]}
                      </span>
                    </div>

                    <div className="flex-grow">
                      <div className="flex items-center space-x-1.5 mb-1">
                        <h3 className={`font-display text-base font-semibold transition-colors duration-500 ${
                          isActive ? 'text-white' : 'text-zinc-400'
                        }`}>
                          {spec.title}
                        </h3>
                        {isActive && <motion.div layoutId="star" className="w-1.5 h-1.5 rounded-full bg-lavrov-gold shrink-0" />}
                      </div>
                      
                      {/* Description with slide-down transition on active */}
                      <p className={`text-xs font-light leading-relaxed tracking-wide transition-all duration-500 ${
                        isActive ? 'text-zinc-300 height-auto' : 'text-zinc-500 line-clamp-1'
                      }`}>
                        {spec.description}
                      </p>
                    </div>

                    <div className={`shrink-0 flex items-center justify-center p-1 transition-transform duration-500 ${
                      isActive ? 'rotate-90 text-lavrov-gold' : 'text-zinc-600'
                    }`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Micro details panel under specs */}
            <motion.div
              layout
              className="mt-8 p-6 glass-premium rounded-2xl flex items-center space-x-4 border border-lavrov-gold/10"
            >
              <div className="w-10 h-10 rounded-full bg-zinc-905 border border-lavrov-gold/20 flex items-center justify-center">
                <HeartPulse className="w-5 h-5 text-lavrov-gold" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-lavrov-gold uppercase tracking-widest block mb-0.5">
                  Энергетический баланс
                </span>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  Благодаря технологии бережного запекания, гликемический индекс семян Лаврово на 15% ниже стандартного, что сохраняет пролонгированное чувство сытости.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
