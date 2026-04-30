"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionWrapperProps {
  children: ReactNode;
}

export default function PageTransitionWrapper({ children }: PageTransitionWrapperProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: 1.05,
        filter: "blur(10px)"
      }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        filter: "blur(0px)"
      }}
      transition={{ 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1], // Custom cinematic easing
        delay: 0.1
      }}
      viewport={{ 
        once: false, // Re-trigger when scrolling back
        amount: 0.2 // Trigger when 20% of section is visible
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
