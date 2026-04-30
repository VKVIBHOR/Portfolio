"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "@/components/ui/typewriter";
import { ExperienceCard } from "@/components/ui/experience-card";
import Image from "next/image";

export default function ExperienceSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const catalogousContent = "At Catalogous, I worked on improving the performance and reliability of a Digital Asset Management (DAM) system used by e-commerce platforms. I debugged and optimized frontend components built with Next.js and enhanced backend services using MongoDB, leading to more stable system behavior. I collaborated closely with Product Managers, gaining hands-on exposure to Agile and Scrum methodologies while working with JIRA to manage tasks and track progress. This experience strengthened my understanding of product development lifecycles and cross-functional teamwork. I also contributed to the development of a catalog management module that streamlined how clients manage and update product listings. My work helped reduce catalog creation and update time by approximately 30%, significantly improving operational efficiency and accelerating workflows for end users.";
  
  const birchIndiaContent = "At Birch India, I worked as an AI Intern, focusing on building intelligent workflows to enhance productivity and streamline operations. I designed and implemented AI-powered solutions for meeting summarization, automated follow-up email drafting, and calendar organization, improving efficiency in client communication and internal processes. I also contributed to program management efforts by coordinating across stakeholders and ensuring smooth execution of projects. Additionally, I led the creative direction for multiple initiatives, designing intuitive, user-centric interfaces in Figma and translating business requirements into scalable design systems.";

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen pt-24 pb-20 px-6 sm:px-12 flex flex-col items-start justify-start overflow-hidden"
    >
      {/* Updated Background Image - Standard img tag to bypass Next.js Image caching and errors */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/pixy.jpg" 
          alt="Experience Background" 
          className="w-full h-full object-cover blur-md"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
           className="space-y-4 mb-12"
        >
          {/* Using Times New Roman as requested for a classic, professional look */}
          <h2 className="text-4xl sm:text-6xl font-normal text-white tracking-tight" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            <Typewriter 
              words={["My Experience"]} 
              speed={150} 
              delayBetweenWords={10000} 
              cursor={true} 
              cursorChar="_"
              start={isInView}
            />
          </h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "50px" }}
            transition={{ delay: 1, duration: 1.2 }}
            className="h-0.5 bg-zinc-300 rounded-full"
          />
        </motion.div>

        {/* Tightened grid gap */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <ExperienceCard 
            company="Catalogous"
            role="Software Development Engineer Intern"
            date="July 2025 – Sep 2025"
            logo="/cata.png"
            content={catalogousContent}
          />
          <ExperienceCard 
            company="Birch India"
            role="AI Intern"
            date="Mar 2024 – Aug 2024"
            logo="/birch_india_logo.jpeg"
            content={birchIndiaContent}
          />
        </div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-zinc-50 rounded-bl-full -z-10 translate-x-1/4 -translate-y-1/4" />
    </section>
  );
}
