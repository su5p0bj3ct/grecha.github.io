/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowDown, Wheat, Eye, Navigation } from 'lucide-react';

interface HeroSectionProps {
  onLearnMoreClick: () => void;
  onLogisticsClick: () => void;
  bgImageUrl: string;
}

export default function HeroSection({ onLearnMoreClick, onLogisticsClick, bgImageUrl }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen lg:h-screen w-full flex flex-col justify-between items-center bg-zinc-950 overflow-hidden bg-grain px-6 md:px-12 pt-24 lg:pt-28 pb-8 gap-12 lg:gap-0">
      {/* Background with zoom animation and premium subtle overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 0.55 }}
          transition={{ duration: 2.5, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src={bgImageUrl || "https://picsum.photos/seed/buckwheat/1920/1080?blur=1"}
            alt="Buckwheat Field at Sunset"
            className="w-full h-full object-cover filter brightness-[0.7] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        {/* Deep cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950/95 z-1" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-1" />
        
        {/* Interactive floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-2">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-lavrov-gold/30"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -60, 0],
                opacity: [0.2, 0.7, 0.2],
                scale: [1, 1.8, 1],
              }}
              transition={{
                duration: 6 + Math.random() * 8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      {/* Header element (minimalist luxury product feeling) */}
      <div className="w-full max-w-7xl flex justify-between items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex items-center space-x-3 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full bg-zinc-900 border border-lavrov-gold/25 flex items-center justify-center group-hover:border-lavrov-gold/50 transition-colors duration-300">
            <Wheat className="w-5 h-5 text-lavrov-gold" />
          </div>
          <div>
            <span className="font-display font-semibold tracking-wider text-white text-base">ЛАВРОВСКИЙ</span>
            <span className="font-display font-light text-lavrov-gold ml-1 tracking-widest text-base">ТРАНЗИТ</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden sm:flex space-x-6 items-center"
        >
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
            Регион: Орловская область, Лаврово
          </span>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-emerald-400">ПОСТАВКИ ОНЛАЙН</span>
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="w-full max-w-4xl text-center z-10 flex-grow flex flex-col justify-center items-center mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="mb-3 px-3 py-1.5 border border-lavrov-gold/15 bg-zinc-950/40 rounded-full backdrop-blur-md"
        >
          <span className="text-xs font-mono text-lavrov-gold uppercase tracking-widest font-medium">
            от поля до премиум-полки
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-white mb-6 uppercase leading-none"
        >
          Лавровская <br/><span className="italic font-serif text-lavrov-gold normal-case">Гречка</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="max-w-2xl text-zinc-400 text-base sm:text-lg md:text-xl font-light leading-relaxed mb-10 tracking-wide"
        >
          Организация высокотехнологичных бесперебойных поставок органического суперфуда премиум-класса из села Лаврово в крупнейшие сети здорового питания.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          <button
            onClick={onLearnMoreClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-lavrov-gold hover:bg-white text-zinc-950 hover:text-zinc-950 font-display font-medium tracking-wide transition-all duration-300 transform active:scale-95 shadow-lg shadow-lavrov-gold/15 flex items-center justify-center space-x-2.5 cursor-pointer border border-lavrov-gold"
          >
            <Eye className="w-4 h-4" />
            <span>Изучить проект</span>
          </button>
          
          <button
            onClick={onLogisticsClick}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-950 hover:bg-zinc-900 text-white font-display tracking-widest text-xs uppercase transition-all duration-300 border border-zinc-800 hover:border-lavrov-gold/50 backdrop-blur-md flex items-center justify-center space-x-2 cursor-pointer active:scale-95"
          >
            <Navigation className="w-3.5 h-3.5 text-lavrov-gold" />
            <span>Смотреть логистику</span>
          </button>
        </motion.div>
      </div>

      {/* Footer / Scroll Indicator element */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="flex flex-col items-center space-y-2 z-10 cursor-pointer"
        onClick={onLearnMoreClick}
      >
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 hover:text-lavrov-gold transition-colors duration-300">
          Скролл вниз
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-5 flex items-center justify-center"
        >
          <ArrowDown className="w-4 h-4 text-lavrov-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
