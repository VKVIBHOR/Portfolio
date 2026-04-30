"use client";

import { GrainGradient, grainGradientPresets } from '@paper-design/shaders-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import MagneticDock from '@/components/ui/magnetic-dock';

interface GrainHeroSectionProps {
  title: string;
  subtitle: string;
  ctaLabel: string;
  onCtaClick: () => void;
}

export default function GrainHeroSection({
  title,
  subtitle,
  ctaLabel,
  onCtaClick,
}: GrainHeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-[40vh]">
      <GrainGradient
        {...grainGradientPresets[0]}
        style={{ position: "absolute", inset: 0, zIndex: -10 }}
      />
      
      <div className="text-center px-6 sm:px-8 max-w-4xl mx-auto">
        <h1 
          role="heading" 
          className="text-[2.475rem] sm:text-[4.125rem] font-normal text-white mb-2 animate-reveal-tracking"
        >
          {title}
        </h1>
        
        <p className="max-w-2xl text-lg sm:text-xl text-white/80 mx-auto">
          {subtitle}
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <MagneticDock />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={onCtaClick}
      >
        <motion.span 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white text-[1.75rem] font-heading"
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
