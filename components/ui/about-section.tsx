"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen py-24 px-6 sm:px-12 flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/pexels-solenfeyissa-5243527.jpg"
          alt="About Background"
          fill
          className="object-cover opacity-80"
          priority
        />
        {/* Subtle overlay for better text contrast */}
        <div className="absolute inset-0 bg-blue-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* Left Box: About Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
          viewport={{ once: true }}
          className="lg:col-span-3 bg-white/5 backdrop-blur-3xl border border-white/20 rounded-[3.5rem] p-10 sm:p-16 flex flex-col justify-center space-y-8 shadow-2xl relative overflow-hidden group"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -mr-16 -mt-16 group-hover:bg-white/10 transition-all duration-500" />
          
          <h2 className="text-4xl sm:text-6xl font-normal text-white tracking-tight font-heading">
            About <span className="font-light italic text-blue-200">Me</span>
          </h2>
          
          <div className="space-y-6 text-lg sm:text-lg text-white/90 leading-relaxed font-light" style={{ fontFamily: 'var(--font-geist-sans), system-ui, sans-serif' }}>
            <p>
              I’m a B.Tech student passionate about building at the intersection of AI, technology, and product management. I enjoy transforming ideas into impactful, real-world solutions that are both scalable and user-focused.
            </p>
            <p>
              Through my internship experiences at Catalogous and Birch India, I’ve worked on applying machine learning and software development to solve practical problems. These experiences strengthened my ability to take ideas from concept to execution while understanding how real-world products are built, iterated, and improved.
            </p>
            <p>
              My projects span across healthcare AI, recommendation systems, and intelligent applications, where I focus on combining technical depth with meaningful outcomes. I don’t just build models—I think about why they matter, who they serve, and how they scale.
            </p>
            <p>
              I approach problems with a product mindset, balancing user needs, business goals, and technical feasibility. Whether it’s designing an AI system or planning a product feature, I enjoy breaking down complexity into simple, effective solutions.
            </p>
            <p>
              I’m currently seeking opportunities in AI and Product Management, where I can contribute, learn, and build products that truly make a difference.
            </p>
          </div>
        </motion.div>

        {/* Right Box: Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-white/5 backdrop-blur-3xl border border-white/20 rounded-[3.5rem] p-10 flex flex-col items-center text-center space-y-8 shadow-2xl relative overflow-hidden"
        >
          {/* Profile Photo Container */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-[3rem] overflow-hidden border border-white/20 p-2 bg-white/10 group">
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden">
               <Image 
                src="/profile-photo.jpeg" 
                alt="Vibhor Koshal" 
                fill 
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                priority
               />
            </div>
          </div>
          
          <div className="space-y-3">
            <h3 className="text-3xl sm:text-4xl font-normal text-white tracking-tight uppercase font-heading">VIBHOR KOSHAL</h3>
            <p className="text-blue-200/90 text-lg font-light tracking-wide italic leading-tight">AI/ML Engineer &<br/>Aspiring PM</p>
          </div>

          <div className="pt-8 border-t border-white/5 w-full">
            <div className="flex justify-center gap-3 flex-wrap">
              {['Innovation', 'Data', 'Design'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-light tracking-[0.2em] uppercase text-white/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
