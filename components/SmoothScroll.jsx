"use client";

import { ReactLenis, useLenis } from 'lenis/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

function AnchorManager() {
  const lenis = useLenis();
  
  useEffect(() => {
    if (!lenis) return;
    
    // Intercept clicks on hash links to use Lenis smooth scrolling
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.hash && target.origin === window.location.origin) {
        e.preventDefault();
        // Scroll to the hash with a slight offset for headers
        lenis.scrollTo(target.hash, { offset: -50, duration: 1.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [lenis]);
  
  return null;
}

export function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Sync GSAP ScrollTrigger with Lenis
    const update = (time) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0); // Prevent GSAP from messing with Lenis scrolling during lag

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis 
      ref={lenisRef}
      autoRaf={false} // Let GSAP Ticker handle the RAF
      root 
      options={{
        lerp: 0.08, // Adjusted for a snappy yet smooth feel
        wheelMultiplier: 1, // Normalized wheel speed
        smoothWheel: true,
      }}
    >
      <AnchorManager />
      {children}
    </ReactLenis>
  );
}
