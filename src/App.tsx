/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Wheat, Layers, ShieldCheck, Mail, ArrowUp } from 'lucide-react';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductSection from './components/ProductSection';
import AudienceSection from './components/AudienceSection';
import LogisticsSection from './components/LogisticsSection';
import CommunicationsSection from './components/CommunicationsSection';
import ConclusionsSection from './components/ConclusionsSection';
import FooterSection from './components/FooterSection';

export default function App() {
  const [activeSegment, setActiveSegment] = useState('home');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Monitor scroll for active section indicator and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      // Toggle back to top
      if (window.scrollY > 600) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // Check current section
      const sections = ['about', 'product', 'audience', 'logistics', 'communications', 'conclusions', 'contacts'];
      const scrollPos = window.scrollY + 200;

      if (window.scrollY < 400) {
        setActiveSegment('home');
        return;
      }

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSegment(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Paths to generated premium images
  const heroBgUrl = '/src/assets/images/hero_buckwheat_sunset_1779425773132.png';
  const productBoxUrl = '/src/assets/images/buckwheat_packaging_1779425796540.png';

  const menuItems = [
    { id: 'about', label: 'О проекте' },
    { id: 'product', label: 'Продукт' },
    { id: 'audience', label: 'Аудитория' },
    { id: 'logistics', label: 'Логистика' },
    { id: 'communications', label: 'Связь' },
    { id: 'conclusions', label: 'Итоги' },
    { id: 'contacts', label: 'Контакты' },
  ];

  return (
    <div className="bg-zinc-950 font-sans text-neutral-205 min-h-screen relative selection:bg-lavrov-gold/30 selection:text-white">
      
      {/* Sticky Premium Apple-style Glass Navigation Menu */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-center pointer-events-none">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="glass rounded-full px-6 py-3.5 flex items-center justify-between w-full max-w-5xl pointer-events-auto border border-white/[0.06] shadow-xl shadow-black/40"
        >
          {/* Logo with scrolling anchor */}
          <div
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <Wheat className="w-5 h-5 text-lavrov-gold group-hover:rotate-12 transition-transform duration-300" />
            <span className="font-display font-semibold tracking-wider text-sm text-white">ЛАВРОВСКАЯ ГРЕЧКА</span>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => {
              const isActive = activeSegment === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-display tracking-wide transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-lavrov-gold text-zinc-950 shadow-md font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-900/40'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Regional Indicator Pill */}
          <div className="flex items-center space-x-1.5 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest">ОРГАНИКА</span>
          </div>
        </motion.div>
      </nav>

      {/* Main Pages stack */}
      <main className="relative">
        <HeroSection
          onLearnMoreClick={() => scrollToSection('about')}
          onLogisticsClick={() => scrollToSection('logistics')}
          bgImageUrl={heroBgUrl}
        />
        
        <AboutSection />
        
        <ProductSection packagingImageUrl={productBoxUrl} />
        
        <AudienceSection />
        
        <LogisticsSection />
        
        <CommunicationsSection />
        
        <ConclusionsSection />
        
        <FooterSection />
      </main>

      {/* Back to Top button floating widget */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            onClick={() => scrollToSection('home')}
            className="fixed bottom-8 right-8 z-50 p-3.5 rounded-full bg-zinc-90 w-12 h-12 flex items-center justify-center border border-zinc-800 text-zinc-400 hover:text-white hover:border-lavrov-gold/60 glass-premium shadow-2xl cursor-pointer active:scale-90 transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-lavrov-gold" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
