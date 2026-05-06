"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('#home');
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold for active state
          if (rect.top <= 250 && rect.bottom >= 250) {
            current = `#${section}`;
          }
        }
      }
      if (current) setActiveTab(current);
    };
    
    handleScroll(); // init
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDrawerOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [isDrawerOpen, lenis]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-40 py-4 transition-all duration-500 ${isScrolled ? 'bg-white/5 backdrop-blur-md md:backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]' : 'bg-transparent py-6'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
          <Link href="#home" onClick={() => setActiveTab('#home')} className="font-extrabold text-xl tracking-widest hover:text-brand-red transition-all cursor-pointer text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            PORTFOLIO<span className="text-brand-red drop-shadow-[0_0_8px_rgba(225,29,72,0.8)]">.</span>
          </Link>
          
          {/* Framer Motion Glassy Desktop Nav */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-1 text-sm font-medium text-gray-300 bg-white/5 border border-white/10 px-2 py-1.5 rounded-full backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-500 hover:bg-white/10">
            {navLinks.map((link) => {
              const isActive = activeTab === link.href;
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  onClick={() => setActiveTab(link.href)}
                  className={`px-5 py-2 rounded-full transition-all duration-300 relative ${isActive ? 'text-white' : 'hover:text-white hover:bg-white/10'}`}
                >
                  {isActive && (
                    <motion.span 
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)] border border-white/20"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDrawerOpen(true)} 
            className="md:hidden text-white p-2.5 focus:outline-none transition-all bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:bg-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            <Menu className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Framer Motion Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[55]"
              onClick={() => setIsDrawerOpen(false)}
            />

            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-72 bg-[#0a0a0a]/80 backdrop-blur-3xl border-l border-white/10 z-[60] flex flex-col pt-24 px-8 gap-6 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
            >
              <button onClick={() => setIsDrawerOpen(false)} className="absolute top-6 right-6 text-white p-2.5 focus:outline-none transition-all bg-white/5 rounded-full border border-white/10 hover:bg-white/20 hover:text-brand-red hover:shadow-[0_0_15px_rgba(225,29,72,0.3)]">
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link, i) => {
                  const isActive = activeTab === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.1 }}
                    >
                      <Link 
                        href={link.href} 
                        onClick={() => {
                          setActiveTab(link.href);
                          setIsDrawerOpen(false);
                        }} 
                        className={`text-lg font-medium transition-all duration-300 px-5 py-3 rounded-2xl flex items-center ${isActive ? 'bg-white/10 text-white border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] translate-x-2' : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent hover:translate-x-2'}`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
