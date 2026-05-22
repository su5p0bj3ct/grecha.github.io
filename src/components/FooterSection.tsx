/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Copy, Check, Wheat, BookOpen, Send, ShieldAlert } from 'lucide-react';

export default function FooterSection() {
  const [copied, setCopied] = useState(false);
  const email = 'lavrovka@teamwork-study.ru';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacts" className="relative h-screen w-full flex flex-col justify-between items-center bg-[#050505] overflow-hidden bg-grain px-6 md:px-12 py-12 text-center select-none">
      
      {/* Background with night theme overlay and particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Deep starry space gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/70 to-[#020202]" />
        
        {/* Floating Night Particles representing fireflies in buckwheat fields */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-lavrov-gold/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -120, 0],
                x: [0, Math.sin(i) * 30, 0],
                opacity: [0.1, 0.6, 0.1],
                scale: [0.8, 1.5, 0.8],
              }}
              transition={{
                duration: 8 + Math.random() * 12,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>

      {/* Decorative vertical separator */}
      <div className="w-px h-16 bg-gradient-to-b from-lavrov-gold/35 to-transparent z-10" />

      {/* Core Message */}
      <div className="w-full max-w-4xl flex-grow flex flex-col justify-center items-center z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <Wheat className="w-12 h-12 text-lavrov-gold opacity-80 mx-auto animate-pulse" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-4xl sm:text-6xl md:text-8xl font-light tracking-tight leading-tight text-white uppercase mb-6"
        >
          СПАСИБО <br />
          <span className="italic font-serif text-lavrov-gold normal-case">
            За Внимание
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.15 }}
          className="max-w-xl text-zinc-400 font-light text-base sm:text-lg tracking-wide leading-relaxed mb-10"
        >
          Мы полностью готовы ответить на любые ваши вопросы касательно логистики, IT-инфраструктуры, телеметрии, 1С интеграций и командных коммуникаций.
        </motion.p>

        {/* Action interactive layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex flex-col items-center space-y-4 w-full"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Команда «Лавровский транзит»
          </span>
          
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Click to Copy email container */}
            <div
              onClick={copyEmail}
              className="flex items-center space-x-3 bg-zinc-900 hover:bg-zinc-850 p-4 rounded-2xl border border-zinc-800 hover:border-lavrov-gold/30 transition-all duration-300 cursor-pointer active:scale-98"
            >
              <Mail className="w-4 h-4 text-lavrov-gold" />
              <span className="font-mono text-sm tracking-wide text-zinc-300">{email}</span>
              <button className="p-1 rounded-md bg-zinc-950/80 text-zinc-500 focus:outline-none">
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 hover:text-white" />}
              </button>
            </div>
          </div>
          
          {copied && (
            <motion.span
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] font-mono text-emerald-400"
            >
              Адрес скопирован в буфер обмена!
            </motion.span>
          )}
        </motion.div>
      </div>

      {/* Bottom Footer Credits block */}
      <div className="w-full max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 border-t border-zinc-900/60 z-10 text-xs text-zinc-650 font-mono">
        <div className="flex items-center space-x-2">
          <span>© 2026 ЛАВРОВСКИЙ ТРАНЗИТ. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</span>
        </div>
        <div>
          <span>LAUNCH SYSTEM 1.0.0 (COSMIC SLATE THEME)</span>
        </div>
      </div>

    </section>
  );
}
