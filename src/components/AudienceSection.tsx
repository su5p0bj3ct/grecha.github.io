/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { TARGET_AUDIENCES } from '../data';
import { Users, Heart, Quote } from 'lucide-react';

export default function AudienceSection() {
  return (
    <section id="audience" className="relative min-h-screen bg-zinc-950 py-24 px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden bg-grain">
      
      {/* Background blobs for premium illumination */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-lavrov-gold/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-lavrov-bronze/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-7xl z-10">
        
        {/* Title Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div>
            <div className="flex items-center space-x-2 text-lavrov-gold font-mono text-xs uppercase tracking-widest mb-3">
              <Users className="w-4 h-4" />
              <span>Целевые Сергменты рынка</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-light tracking-tight text-white uppercase leading-none">
              ДЛЯ КОГО МЫ СОЗДАЕМ <br />
              <span className="italic font-serif text-lavrov-gold normal-case">
                Наш Стандарт
              </span>
            </h2>
          </div>
          
          <p className="max-w-md text-zinc-400 font-light text-sm sm:text-base leading-relaxed tracking-wide">
            Лавровская гречка — это не просто крупа в ассортименте. Это продуманный гастрономический выбор для ценителей безукоризненной эстетики и безупречной пользы.
          </p>
        </div>

        {/* Premium Audience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TARGET_AUDIENCES.map((audience, index) => (
            <motion.div
              key={audience.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative h-[520px] rounded-3xl overflow-hidden bg-zinc-950 border border-zinc-900 flex flex-col justify-end p-8 shadow-xl transition-all duration-500 hover:border-lavrov-gold/20"
            >
              {/* Blurred Image Background */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={audience.image}
                  alt={audience.title}
                  className="w-full h-full object-cover filter brightness-[0.35] saturate-[0.85] transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950/70 to-zinc-950/95" />
              </div>

              {/* Decorative category label */}
              <div className="absolute top-8 left-8 z-10 bg-zinc-900/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/5 flex items-center space-x-2">
                <Heart className="w-3 h-3 text-lavrov-gold" />
                <span className="text-[10px] font-mono text-white tracking-widest uppercase">
                  {audience.subtitle}
                </span>
              </div>

              {/* Main Contents */}
              <div className="relative z-10 flex flex-col">
                <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-lavrov-gold transition-colors duration-300">
                  {audience.title}
                </h3>
                
                <p className="text-zinc-400 text-xs font-light tracking-wide leading-relaxed mb-6 block">
                  {audience.description}
                </p>

                {/* Styled Quote */}
                <div className="pt-6 border-t border-white/5 relative">
                  <Quote className="w-8 h-8 text-lavrov-gold/15 absolute -top-1 -left-2" />
                  <p className="text-zinc-300 text-xs italic font-light pl-6 leading-relaxed relative z-10">
                    {audience.quote}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Micro-Interaction Bar */}
        <div className="mt-16 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass px-6 py-4 rounded-full flex flex-col sm:flex-row items-center gap-4 border border-zinc-900"
          >
            <span className="text-xs font-mono text-zinc-400">
              Позиционирование на премиум-полке:
            </span>
            <div className="flex gap-3">
              <span className="text-[10px] font-mono border border-lavrov-gold/20 text-lavrov-gold bg-lavrov-gold/5 px-3 py-1 rounded-full uppercase">
                Органическое Стан-ое Сырье
              </span>
              <span className="text-[10px] font-mono border border-emerald-500/20 text-emerald-400 bg-emerald-500/5 px-3 py-1 rounded-full uppercase">
                Здоровый Образ Жизни
              </span>
              <span className="text-[10px] font-mono border border-zinc-700 text-zinc-300 px-3 py-1 rounded-full uppercase">
                Эко-формат
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
