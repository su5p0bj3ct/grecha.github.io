/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CONCLUSIONS } from '../data';
import { BadgeHelp, ChevronDown, CheckCircle2, Award, Zap, Network, Scale, Sparkles } from 'lucide-react';

export default function ConclusionsSection() {
  const icons = [
    <Award className="w-5 h-5 text-lavrov-gold" />,
    <Scale className="w-5 h-5 text-lavrov-gold" />,
    <Zap className="w-5 h-5 text-lavrov-gold" />,
    <Network className="w-5 h-5 text-lavrov-gold" />,
    <Sparkles className="w-5 h-5 text-lavrov-gold" />
  ];

  return (
    <section id="conclusions" className="relative min-h-screen bg-zinc-950 py-24 px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden bg-grain">
      
      {/* Absolute floating lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-lavrov-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-5xl z-10">
        
        {/* Huge Headline */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-400">РЕЗЮМЕ ПРОЕКТА • ЛАВРОВСКИЙ ТРАНЗИТ</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-light tracking-tight leading-tight text-white uppercase"
          >
            ПОСТАВЛЯЕМ В СРОК <br />
            <span className="italic font-serif text-lavrov-gold normal-case">
              Качественный Продукт
            </span>
          </motion.h2>
          
          <div className="w-24 h-0.5 bg-lavrov-gold mx-auto mt-8 opacity-30" />
        </div>

        {/* Timeline Storytelling Elements */}
        <div className="relative border-l border-zinc-850/80 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12">
          
          {CONCLUSIONS.map((conclusion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative group cursor-default"
            >
              {/* Chronological index marker element */}
              <div className="absolute -left-[54px] sm:-left-[70px] top-1.5 w-10 h-10 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-lavrov-gold/50 transition-colors duration-500 z-10">
                <div className="absolute inset-0.5 rounded-full bg-zinc-900 flex items-center justify-center">
                  {icons[index]}
                </div>
              </div>

              {/* Glowing Line connector decoration */}
              <div className="absolute -left-[45px] top-6 w-9 h-px bg-gradient-to-r from-zinc-800 to-transparent group-hover:from-lavrov-gold/40 transition-all duration-500" />

              {/* Core card structure */}
              <div className="p-8 rounded-2xl bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-900/60 hover:border-lavrov-gold/15 transition-all duration-500 shadow-xl relative overflow-hidden">
                {/* Background accent glow */}
                <div className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-bl from-lavrov-gold/5 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="text-[10px] font-mono text-lavrov-gold uppercase tracking-widest block mb-1.5">
                  ПЕРСПЕКТИВА {index + 1}
                </span>
                
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3 group-hover:text-lavrov-gold transition-all duration-300">
                  {conclusion.title}
                </h3>
                
                <p className="text-zinc-400 text-sm font-light leading-relaxed tracking-wide">
                  {conclusion.descr}
                </p>
              </div>
            </motion.div>
          ))}
          
        </div>

        {/* Interactive bottom bar */}
        <div className="mt-20 text-center">
          <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            Технологический суверенитет и агрологистика завтрашнего дня
          </span>
        </div>

      </div>
    </section>
  );
}
