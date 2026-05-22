/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MAP_HUBS, TRUCKS_TELEMETRY, TECH_PILLARS, LOGISTICS_TEAM } from '../data';
import { LogisticHub, TruckTelemetry } from '../types';
import { Navigation, ServerCrash, Cpu, FileClock, CloudCheck, Activity, MapPin, Truck, ShieldAlert, Thermometer, UserCheck } from 'lucide-react';

export default function LogisticsSection() {
  const [selectedTruckId, setSelectedTruckId] = useState<string>('t02');
  const [selectedHubId, setSelectedHubId] = useState<string>('lavrovo');
  const [simulatedTime, setSimulatedTime] = useState<string>('12:00:00');
  const [telemetryLogs, setTelemetryLogs] = useState<string[]>([
    'Система запущена. Инициализация IoT...',
    'Датчик влажности Лаврово-Силос #1 откалиброван.',
    'Грузовик #2 вышел на трассу М-2 по направлению в Тулу.',
    'Документооборот 1С СЭД по Тульской поставке завизирован.'
  ]);

  // Realtime clock and log simulation
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setSimulatedTime(now.toLocaleTimeString('ru-RU'));
    }, 1000);

    const logTimer = setInterval(() => {
      const actions = [
        'Датчик температуры [Грузовик #3]: норма (+17.9°C).',
        'AI Прогноз: Рекомендовано пополнение запаса РЦ Брянск.',
        'Пинг датчиков IoT: Успешно (потерь пакетов 0%).',
        'Электронная накладная ТОРГ-12 отправлена в 1С.',
        'Digital Twin: расчет трафика Тула-Юг завершен.',
        'Грузовик #2 сообщает координаты: 54.19° N, 37.61° E.'
      ];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      setTelemetryLogs(prev => [randomAction, ...prev.slice(0, 5)]);
    }, 6000);

    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
    };
  }, []);

  const selectedTruck = TRUCKS_TELEMETRY.find(t => t.id === selectedTruckId) || TRUCKS_TELEMETRY[1];
  const selectedHub = MAP_HUBS.find(h => h.id === selectedHubId) || MAP_HUBS[0];

  return (
    <section id="logistics" className="relative min-h-screen bg-[#060606] py-24 px-6 md:px-12 flex flex-col justify-center items-center bg-grain text-white">
      
      {/* Visual background decorations resembling control grid lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-900 to-transparent pointer-events-none" />

      <div className="w-full max-w-7xl z-10">
        
        {/* Title and stats Header */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-8 mb-16">
          <div>
            <div className="flex items-center space-x-2 text-lavrov-gold font-mono text-xs uppercase tracking-widest mb-3">
              <Cpu className="w-4 h-4 text-lavrov-gold" />
              <span>LOGISTICS COCKPIT & DIGITAL TWINS</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl font-light tracking-tight text-white uppercase leading-none mb-4">
              ЛОГИСТИКА & <br />
              <span className="italic font-serif text-lavrov-gold normal-case">
                Технологии 1.0
              </span>
            </h2>
            <p className="max-w-xl text-zinc-400 font-light text-sm tracking-wide">
              Командный центр контролирует движение органической гречихи от весов веятельного цеха до премиальных сетей. Полный цифровой стек поставок.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full xl:w-auto">
            <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">ГРУЗОВИКИ</span>
              <span className="text-xl font-display font-medium text-white">4 Рефрижератора</span>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">КОМАНДА</span>
              <span className="text-xl font-display font-medium text-white">4+1+1 Специалиста</span>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">SLA СВОЕВРЕМЕННОСТИ</span>
              <span className="text-xl font-display font-semibold text-emerald-400">95% Точно в срок</span>
            </div>
            <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-1">IoT СВЯЗЬ</span>
              <span className="text-xl font-display font-medium text-lavrov-gold">{simulatedTime}</span>
            </div>
          </div>
        </div>

        {/* Dashboard layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Futuristic Logistics SVG Map Monitor (Left Column - 7/12) */}
          <div className="lg:col-span-7 flex flex-col justify-between glass-premium rounded-3xl p-6 border border-zinc-900/80 relative overflow-hidden min-h-[560px]">
            
            {/* Radar glow */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex justify-between items-center z-10 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-mono font-medium text-emerald-400 tracking-wider">LIVE COURIER TRACKING</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase">МАСШТАБ: ЦЕНТРАЛЬНАЯ РОССИЯ</span>
            </div>

            {/* Simulated Geographic SVG Map */}
            <div className="flex-grow w-full h-[320px] relative border border-zinc-900 rounded-2xl bg-black/40 flex items-center justify-center p-4">
              
              <svg className="w-full h-full min-h-[300px]" viewBox="0 0 600 500">
                {/* Defs for gradients, filters */}
                <defs>
                  <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#D6B97B" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </radialGradient>
                  
                  <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D6B97B" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#8C6A3B" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* Simulated geographic grids */}
                <g stroke="#ffffff" strokeOpacity="0.02" strokeWidth="1">
                  {[...Array(12)].map((_, i) => (
                    <line key={`lh-${i}`} x1={i * 50} y1="0" x2={i * 50} y2="500" />
                  ))}
                  {[...Array(10)].map((_, i) => (
                    <line key={`lv-${i}`} x1="0" y1={i * 50} x2={600} y2={i * 50} />
                  ))}
                </g>

                {/* Connection lines from Lavrovo (center-ish) */}
                {MAP_HUBS.map(hub => {
                  if (hub.id === 'lavrovo') return null;
                  
                  const startX = MAP_HUBS[0].coordinates.x;
                  const startY = MAP_HUBS[0].coordinates.y;
                  const isUpcoming = hub.status === 'upcoming';
                  
                  return (
                    <g key={`route-${hub.id}`}>
                      {/* Connection path line */}
                      <path
                        d={`M ${startX} ${startY} Q ${(startX + hub.coordinates.x) / 2 + 15} ${(startY + hub.coordinates.y) / 2 - 25} ${hub.coordinates.x} ${hub.coordinates.y}`}
                        fill="none"
                        stroke={isUpcoming ? '#3a3a3a' : '#D6B97B'}
                        strokeWidth="1.5"
                        strokeDasharray={isUpcoming ? '4' : '3 3'}
                        className={isUpcoming ? '' : 'animate-[dash_10s_linear_infinite]'}
                      />
                    </g>
                  );
                })}

                {/* Hub representation circles */}
                {MAP_HUBS.map(hub => {
                  const isOrigin = hub.type === 'origin';
                  const isUpcoming = hub.status === 'upcoming';
                  const isSelected = selectedHubId === hub.id;
                  
                  return (
                    <g
                      key={`hub-${hub.id}`}
                      className="cursor-pointer group"
                      onClick={() => setSelectedHubId(hub.id)}
                    >
                      {/* Interactive hover circle */}
                      <circle
                        cx={hub.coordinates.x}
                        cy={hub.coordinates.y}
                        r={isSelected ? 16 : 10}
                        fill="url(#mapGlow)"
                        className="transition-all duration-300 group-hover:r-[18px]"
                      />
                      
                      {/* Core marker circle */}
                      <circle
                        cx={hub.coordinates.x}
                        cy={hub.coordinates.y}
                        r={isOrigin ? 6 : 4}
                        fill={isUpcoming ? '#4b5563' : isOrigin ? '#D6B97B' : '#ffffff'}
                        stroke={isUpcoming ? '#000000' : isSelected ? '#D6B97B' : '#1f1f1f'}
                        strokeWidth="2"
                      />

                      {/* Ripple pulse for active origin */}
                      {isOrigin && (
                        <circle
                          cx={hub.coordinates.x}
                          cy={hub.coordinates.y}
                          r="12"
                          fill="none"
                          stroke="#D6B97B"
                          strokeWidth="1"
                          className="animate-ping opacity-40 pointer-events-none"
                        />
                      )}

                      {/* City label text */}
                      <text
                        x={hub.coordinates.x + 10}
                        y={hub.coordinates.y + 4}
                        fill={isUpcoming ? '#52525b' : isSelected ? '#D6B97B' : '#cbd5e1'}
                        fontSize="9"
                        fontFamily="var(--font-mono)"
                        className="font-semibold select-none group-hover:fill-white"
                      >
                        {hub.name.toUpperCase()}
                      </text>
                    </g>
                  );
                })}

                {/* Moving Truck Dots based on actual telemetry positions */}
                {TRUCKS_TELEMETRY.map(truck => {
                  if (truck.status !== 'en_route') return null;
                  
                  return (
                    <g key={`map-truck-${truck.id}`}>
                      {/* Glow indicator */}
                      <circle
                        cx={truck.position.x}
                        cy={truck.position.y}
                        r="5"
                        fill="#D6B97B"
                        className="animate-pulse"
                      />
                      
                      {/* Truck identifier */}
                      <polygon
                        points={`${truck.position.x},${truck.position.y - 4} ${truck.position.x - 3},${truck.position.y + 2} ${truck.position.x + 3},${truck.position.y + 2}`}
                        fill="#ffffff"
                        className="animate-bounce"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Float Map Overlay Stats */}
              <div className="absolute bottom-4 left-4 p-3.5 glass rounded-xl border border-zinc-800 pointer-events-none max-w-[200px]">
                <div className="flex items-center space-x-1 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-lavrov-gold" />
                  <span className="text-[9px] font-mono text-zinc-400">ВЫБРАННЫЙ ХАБ</span>
                </div>
                <h4 className="text-xs font-semibold text-white truncate uppercase">{selectedHub.name}</h4>
                <p className="text-[10px] text-zinc-500 mt-1">
                  Запас: {selectedHub.metrics?.stock || '0 тонн'} <br />
                  Темп: {selectedHub.metrics?.temperature || '-'} <br />
                  Влажн: {selectedHub.metrics?.humidity || '-'}
                </p>
              </div>
            </div>

            {/* Quick telemetry terminal log view */}
            <div className="mt-4 bg-black/60 font-mono text-[10px] text-zinc-400 p-4 rounded-xl border border-zinc-900 h-[100px] overflow-y-auto flex flex-col-reverse">
              {telemetryLogs.map((log, index) => (
                <div key={index} className="flex items-start space-x-1.5 py-0.5 border-b border-zinc-950/20">
                  <span className="text-zinc-650 shrink-0">[{simulatedTime.split(':')[0]}:{(45 - index * 4 + 60) % 60}]</span>
                  <span className={log.startsWith('Датчик') ? 'text-lavrov-gold' : log.startsWith('AI') ? 'text-emerald-400' : 'text-zinc-300'}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
            
          </div>

          {/* Logistics telemetry & technology showcase (Right Column - 5/12) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Interactive Telemetry Box */}
            <div className="glass-premium rounded-3xl p-6 border border-zinc-900/80">
              <div className="flex items-center space-x-2 text-lavrov-gold font-mono text-xs uppercase tracking-widest mb-4">
                <Truck className="w-4 h-4" />
                <span>МОНИТОРИНГ РЕФРИЖЕРАТОРОВ</span>
              </div>

              {/* Truck selection tabs */}
              <div className="grid grid-cols-4 gap-2 mb-6">
                {TRUCKS_TELEMETRY.map(t => {
                  const isSelected = selectedTruckId === t.id;
                  
                  return (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTruckId(t.id)}
                      className={`py-2 px-1 rounded-lg text-xs font-mono font-medium border transition-all duration-300 ${
                        isSelected
                          ? 'bg-lavrov-gold/15 text-lavrov-gold border-lavrov-gold/50'
                          : 'bg-zinc-900/60 text-zinc-400 border-zinc-850 hover:border-zinc-800'
                      }`}
                    >
                      ГР-{t.id.slice(1)}
                    </button>
                  );
                })}
              </div>

              {/* Selected Truck Card panel */}
              <div className="rounded-2xl bg-black/40 border border-zinc-900 p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Бортовой компьютер</span>
                    <h3 className="text-lg font-bold text-white">{selectedTruck.name}</h3>
                  </div>
                  <span className={`text-[9px] font-mono px-2.5 py-1 rounded-full uppercase ${
                    selectedTruck.status === 'en_route'
                      ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                      : 'bg-blue-500/15 text-blue-400 border border-blue-500/30'
                  }`}>
                    {selectedTruck.status === 'en_route' ? 'В пути' : 'Доставлено'}
                  </span>
                </div>

                {/* Telemetry rows */}
                <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-850/60">
                    <span className="text-zinc-500 block mb-1">ВОДИТЕЛЬ</span>
                    <div className="flex items-center space-x-1.5">
                      <UserCheck className="w-3.5 h-3.5 text-lavrov-gold" />
                      <span className="text-white font-medium">{selectedTruck.driver}</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-850/60">
                    <span className="text-zinc-500 block mb-1">КАБИНА IoT СВЯЗЬ</span>
                    <span className="text-zinc-300">{selectedTruck.lastPing}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-850/60">
                    <span className="text-zinc-500 block mb-1">СКОРОСТЬ И ХОД</span>
                    <span className="text-zinc-300 font-medium">{selectedTruck.speed}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-850/60">
                    <span className="text-zinc-500 block mb-1">IoT ТЕМПЕРАТУРА</span>
                    <div className="flex items-center space-x-1 text-emerald-400">
                      <Thermometer className="w-3.5 h-3.5" />
                      <span className="font-semibold">{selectedTruck.temp}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Roles (4 trucks, 4 drivers, 1 dispatcher, 1 comms rep) */}
            <div className="p-5 rounded-3xl bg-zinc-900/30 border border-zinc-900">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-3">ШТАТНЫЙ РЕСУРС ТРАНЗИТА</span>
              <div className="grid grid-cols-2 gap-3">
                {LOGISTICS_TEAM.map((member, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-zinc-950/60 border border-zinc-900">
                    <span className="text-[11px] font-semibold text-white block">{member.role}</span>
                    <span className="text-[9px] font-mono text-lavrov-gold uppercase tracking-wider block mb-0.5">{member.label}</span>
                    <p className="text-[10px] text-zinc-400 leading-tight font-light">{member.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* 4 Tech Pillars section - Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {TECH_PILLARS.map((tech, idx) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between group hover:border-lavrov-gold/30 transition-all duration-300"
            >
              <div>
                <span className="text-[10px] font-mono text-lavrov-gold uppercase tracking-widest block mb-3">технологический стек 0{idx+1}</span>
                <h3 className="font-display font-bold text-base text-white mb-2">{tech.title}</h3>
                <p className="text-zinc-400 text-xs font-light leading-relaxed mb-4">{tech.description}</p>
              </div>
              <span className="text-[10px] font-mono text-zinc-500 leading-tight">{tech.detail}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
