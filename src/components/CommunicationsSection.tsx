/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CHAT_HISTORY } from '../data';
import { MessageSquare, Users, Store, Radio, ArrowRight, Bot, ShieldCheck } from 'lucide-react';

export default function CommunicationsSection() {
  const [visibleMessages, setVisibleMessages] = useState<typeof CHAT_HISTORY>([CHAT_HISTORY[0]]);
  const [currentIndex, setCurrentIndex] = useState(1);

  // Live sequential conversation trickle
  useEffect(() => {
    if (currentIndex >= CHAT_HISTORY.length) {
      const restartTimer = setTimeout(() => {
        setVisibleMessages([CHAT_HISTORY[0]]);
        setCurrentIndex(1);
      }, 7000);
      return () => clearTimeout(restartTimer);
    }

    const nextMessageTimer = setTimeout(() => {
      setVisibleMessages(prev => [...prev, CHAT_HISTORY[currentIndex]]);
      setCurrentIndex(prev => prev + 1);
    }, 3500);

    return () => clearTimeout(nextMessageTimer);
  }, [currentIndex]);

  return (
    <section id="communications" className="relative min-h-screen bg-zinc-950 py-24 px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden bg-grain">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 right-0 w-[500px] h-[500px] bg-lavrov-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full max-w-7xl z-10">
        
        {/* Title blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 text-lavrov-gold font-mono text-xs uppercase tracking-widest mb-4"
            >
              <Users className="w-4 h-4 text-lavrov-gold" />
              <span>КОММУНИКАЦИОННЫЕ ИНСТРУМЕНТЫ</span>
            </motion.div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-light tracking-tight text-white uppercase leading-tight">
              СВЕРХСВЯЗАННАЯ <br />
              <span className="italic font-serif text-lavrov-gold normal-case">
                Операционная среда
              </span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pt-8">
            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed tracking-wide">
              Каждый этап — от элеватора до торгового зала — пронизан мгновенной обратной связью. Мы связали диспетчерскую службу проекта с водителями-экспедиторами, экспедиторской ИТ-системой и магазинами-заказчиками.
            </p>
          </div>
        </div>

        {/* Column layout: Chat mockup left, Tech aspects right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Telegram / Slack Modern Chat Mockup (Left Column 6/12) */}
          <div className="lg:col-span-6 flex flex-col justify-between glass-premium rounded-3xl p-6 border border-zinc-900/80 min-h-[460px] relative">
            
            {/* Minimalist Phone Header */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-900 mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-zinc-900 flex items-center justify-center border border-lavrov-gold/20">
                  <span className="font-mono text-xs text-lavrov-gold font-bold">ЛТ</span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-wide">Чат: Лавровский Транзит</h4>
                  <span className="text-[10px] text-zinc-500 font-mono">5 участников • Оперативный канал</span>
                </div>
              </div>

              {/* Status pill */}
              <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-widest font-bold">ОК</span>
              </div>
            </div>

            {/* Chat Messages viewport */}
            <div className="flex-grow flex flex-col gap-4 overflow-y-auto mb-6 pr-1 max-h-[300px] min-h-[250px]">
              <AnimatePresence>
                {visibleMessages.map((msg) => {
                  const isDispatch = msg.role === 'dispatch';
                  const isSales = msg.role === 'sales';
                  const isDriver = msg.role === 'driver';
                  const isStore = msg.role === 'store';
                  
                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      className={`flex flex-col max-w-[85%] ${
                        isDispatch ? 'self-start' : isSales ? 'self-start' : isDriver ? 'self-start' : 'self-end'
                      }`}
                    >
                      {/* Name tags and timestamps */}
                      <div className="flex items-center space-x-1.5 mb-1 px-1">
                        <span className={`text-[10px] font-mono font-medium ${
                          isDispatch ? 'text-lavrov-gold' : isSales ? 'text-pink-400' : isDriver ? 'text-sky-400' : 'text-emerald-400 font-bold'
                        }`}>
                          {msg.sender}
                        </span>
                        <span className="text-[8px] text-zinc-650 font-mono">{msg.timestamp}</span>
                      </div>

                      {/* Bubble box */}
                      <div className={`p-3.5 rounded-2xl text-xs font-light leading-relaxed ${
                        isStore 
                          ? 'bg-emerald-500/10 text-emerald-100 border border-emerald-500/20 rounded-tr-none'
                          : isDispatch
                          ? 'bg-zinc-900/90 text-zinc-200 border border-lavrov-gold/10 rounded-tl-none'
                          : isSales
                          ? 'bg-zinc-900/70 text-zinc-300 border border-pink-500/10 rounded-tl-none'
                          : 'bg-zinc-900/70 text-zinc-300 border border-sky-500/10 rounded-tl-none'
                      }`}>
                        {msg.text}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Interactive Chat Input Area */}
            <div className="pt-4 border-t border-zinc-900 flex items-center justify-between">
              <span className="text-[10px] font-mono text-zinc-500 italic">
                {currentIndex < CHAT_HISTORY.length 
                  ? 'Печатает следующее оперативное сообщение...' 
                  : 'Все сообщения выведены на экран. Ожидаем авто-повтор.'
                }
              </span>
              <div className="flex gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 animate-pulse font-mono flex items-center justify-center text-[10px]" />
              </div>
            </div>

          </div>

          {/* Action Cards (Right Column 6/12) */}
          <div className="lg:col-span-6 flex flex-col justify-center gap-4">
            
            {/* About briefings */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-lavrov-gold/25 transition-all duration-300 flex items-start space-x-4"
            >
              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-lavrov-gold/15 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-lavrov-gold" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-base text-white mb-1.5">Ежедневный орг-брифинг</h4>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  Каждое утро в 08:00 диспетчерская, водители и представители ритейла сверяют статус готовности рефрижераторов, объемы отгрузки и лимиты складов.
                </p>
              </div>
            </motion.div>

            {/* Alert chats */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-lavrov-gold/25 transition-all duration-300 flex items-start space-x-4"
            >
              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-sky-500/15 flex items-center justify-center shrink-0">
                <Radio className="w-5 h-5 text-sky-450" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-base text-white mb-1.5">Чат для оперативных оповещений</h4>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  Постоянная интеграция с IoT-системой. При отклонении давления в шинах или температуры внутри отсека чат автоматически публикует предупреждение.
                </p>
              </div>
            </motion.div>

            {/* Syncing Store notifications */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-lavrov-gold/25 transition-all duration-300 flex items-start space-x-4"
            >
              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-emerald-500/15 flex items-center justify-center shrink-0">
                <Store className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-base text-white mb-1.5">Коммуникация с магазинами</h4>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  Магазины заходят на приемку товара планово. Они видят динамическое расчетное время прибытия рефрижератора, снижая простои у дебаркадера.
                </p>
              </div>
            </motion.div>

            {/* Feedback loops */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-850 hover:border-lavrov-gold/25 transition-all duration-300 flex items-start space-x-4"
            >
              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-lavrov-gold/15 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5 text-lavrov-gold" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-base text-white mb-1.5">Обратная связь</h4>
                <p className="text-zinc-400 text-xs font-light leading-relaxed">
                  Потребительские отзывы из сетей о качестве гречки моментально переводятся агроному и мельничному отряду для микрокалибровки процессов.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
