/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CITIES_DATA } from '../data';
import { Landmark, Compass, Target, BadgeCheck, TrendingUp, Calendar, ChevronRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen bg-zinc-950 py-24 px-6 md:px-12 flex flex-col justify-center items-center bg-grain">
      
      {/* Dynamic Background Accents */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-lavrov-bronze/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[400px] h-[400px] bg-lavrov-gold/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-7xl">
        
        {/* Storytelling Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="flex items-center space-x-2.5 mb-4 text-lavrov-gold font-mono text-xs uppercase tracking-widest"
            >
              <Landmark className="w-4 h-4" />
              <span>Целевые ориентиры проекта</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="font-display text-4xl sm:text-5xl font-light tracking-tight leading-none text-white uppercase"
            >
              ЛАВРОВСКИЙ <br />
              <span className="italic font-serif text-lavrov-gold normal-case">
                Путь к вершине
              </span>
            </motion.h2>
          </div>
          
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, delay: 0.1 }}
              className="text-zinc-400 text-lg sm:text-xl font-light leading-relaxed tracking-wide mb-6"
            >
              Проект реализует комплексную логистику премиального качества, поставляя гречку высочайшего сорта из экологически чистого села Лаврово в крупнейшие гастрономические хабы Черноземья с последующим выходом на федеральный уровень.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-zinc-500 text-base font-light font-display"
            >
              Регулярные, бесперебойные поставки осуществляются в Орёл, Брянск, Тулу и Курск. Инфраструктура выстроена «с запасом» для плавного охвата московских торговых сетей здорового питания через 24 месяца.
            </motion.p>
          </div>
        </div>

        {/* Hero KPIs - Bento Grid Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* KPI Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="glass-premium p-8 rounded-3xl relative overflow-hidden group hover:border-lavrov-gold/30 transition-all duration-500"
          >
            <div className="absolute right-3.5 top-3.5 opacity-10">
              <Target className="w-24 h-24 text-lavrov-gold" />
            </div>
            
            <div className="flex items-center space-x-2 text-lavrov-gold font-mono text-xs uppercase tracking-widest mb-6">
              <Compass className="w-3.5 h-3.5" />
              <span>ГЕОГРАФИЯ</span>
            </div>
            
            <h3 className="font-display text-5xl font-extrabold text-white mb-2 tracking-tight">4 + 1</h3>
            <p className="font-display font-medium text-lavrov-gold mb-3 text-sm">Города постоянного присутствия</p>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Орёл, Брянск, Тула, Курск — оперативно покрыты логистикой. Москва — стратегический запуск на горизонте 2 лет.
            </p>
          </motion.div>

          {/* KPI Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-premium p-8 rounded-3xl relative overflow-hidden group hover:border-lavrov-gold/30 transition-all duration-500"
          >
            <div className="absolute right-3.5 top-3.5 opacity-10">
              <TrendingUp className="w-24 h-24 text-lavrov-gold" />
            </div>
            
            <div className="flex items-center space-x-2 text-lavrov-gold font-mono text-xs uppercase tracking-widest mb-6">
              <Target className="w-3.5 h-3.5" />
              <span>эффективность</span>
            </div>
            
            <h3 className="font-display text-5xl font-extrabold text-white mb-2 tracking-tight">95%</h3>
            <p className="font-display font-medium text-lavrov-gold mb-3 text-sm">Гарантированный SLA KPI</p>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Достигнуто жесткое соответствие графику разгрузки сетей. Своевременность прибытия находится под контролем IoT на всем маршруте.
            </p>
          </motion.div>

          {/* KPI Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-premium p-8 rounded-3xl relative overflow-hidden group hover:border-lavrov-gold/30 transition-all duration-500"
          >
            <div className="absolute right-3.5 top-3.5 opacity-10">
              <BadgeCheck className="w-24 h-24 text-lavrov-gold" />
            </div>
            
            <div className="flex items-center space-x-2 text-lavrov-gold font-mono text-xs uppercase tracking-widest mb-6">
              <BadgeCheck className="w-3.5 h-3.5" />
              <span>Качество продукта</span>
            </div>
            
            <h3 className="font-display text-5xl font-extrabold text-white mb-2 tracking-tight">VIP</h3>
            <p className="font-display font-medium text-lavrov-gold mb-3 text-sm">Премиальный ритейл-формат</p>
            <p className="text-zinc-400 text-sm font-light leading-relaxed">
              Отбираются только цельные калиброванные ядра. Исключительный уровень очистки и гигиеничности для золотой полки.
            </p>
          </motion.div>
        </div>

        {/* Cities Map Timeline View */}
        <h4 className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-6 text-center">
          Географическая цепочка распределения поставок
        </h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CITIES_DATA.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                city.active
                  ? 'bg-zinc-900/60 border-zinc-800 hover:border-lavrov-gold/30'
                  : 'bg-zinc-950/20 border-zinc-900/40 relative'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${
                  city.active ? 'bg-lavrov-gold/10 text-lavrov-gold' : 'bg-zinc-800 text-zinc-500'
                }`}>
                  {city.distance}
                </span>
                {city.active ? (
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                ) : (
                  <Calendar className="w-4.5 h-4.5 text-zinc-600" />
                )}
              </div>
              
              <h5 className={`font-display font-semibold text-lg mb-1 ${city.active ? 'text-white' : 'text-zinc-500'}`}>
                {city.name}
              </h5>
              
              <span className={`text-[10px] font-mono uppercase tracking-wider block mb-3 ${city.active ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {city.status}
              </span>
              
              <p className={`text-xs font-light leading-relaxed ${city.active ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {city.desc}
              </p>
              
              {!city.active && (
                <div className="mt-4 flex items-center space-x-1.5 text-[10px] font-mono text-lavrov-gold">
                  <span>Фокус масштабирования</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
