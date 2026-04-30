"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Link, Send, Terminal, Gamepad2, User, MessageCircle, ChevronRight } from "lucide-react";

const SOCIAL_LINKS = [
  { name: "Email", icon: <Mail className="w-5 h-5" />, href: "mailto:hello@vibhorkoshal.com", color: "text-red-400" },
  { name: "LinkedIn", icon: <Link className="w-5 h-5" />, href: "https://linkedin.com/in/vibhorkoshal", color: "text-blue-400" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate RPG style loading
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section 
      className="relative min-h-screen py-24 px-6 sm:px-12 bg-black overflow-hidden font-sans"
      id="contact"
    >
      {/* CRT Scanline Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.03] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl sm:text-7xl font-normal text-white tracking-tighter font-heading mb-6 uppercase">
            Challenger <span className="text-green-400">Approaching</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-zinc-500 uppercase tracking-[0.3em] text-[10px] font-bold">
            <Gamepad2 className="w-4 h-4" />
            <span>Select Action to Continue</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Game Menu Socials */}
          <div className="lg:col-span-4 space-y-8">
            <div className="relative p-1 bg-white border-2 border-white rounded-sm">
              <div className="bg-black p-6">
                <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold mb-6 border-b border-zinc-800 pb-2 flex items-center gap-2">
                  <Terminal className="w-3 h-3" />
                  Inventory
                </h3>
                <div className="space-y-4">
                  {SOCIAL_LINKS.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 group cursor-pointer"
                    >
                      <div className={`p-2 bg-zinc-900 border border-zinc-800 group-hover:border-white transition-colors ${link.color}`}>
                        {link.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest leading-none mb-1">Link</span>
                        <span className="text-white font-bold uppercase tracking-tight group-hover:text-green-400 transition-colors">
                          {link.name}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 text-green-400 transition-all" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Status Window */}
            <div className="bg-zinc-900/50 border-2 border-zinc-800 p-6 rounded-sm backdrop-blur-sm">
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4">Player Status</h4>
              <div className="space-y-3">
                {[
                  { label: "Innovation", val: "99%", color: "bg-blue-500" },
                  { label: "Reliability", val: "100%", color: "bg-green-500" },
                  { label: "Creativity", val: "MAX", color: "bg-orange-500" },
                ].map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="flex justify-between text-[10px] uppercase font-bold">
                      <span className="text-zinc-400">{stat.label}</span>
                      <span className="text-white">{stat.val}</span>
                    </div>
                    <div className="h-1 bg-zinc-800 w-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className={`h-full ${stat.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: RPG Dialogue Form */}
          <div className="lg:col-span-8">
            <div className="relative bg-black border-[3.5px] border-white p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]">
              {/* Box Corner Decorations */}
              <div className="absolute -top-1 -left-1 w-4 h-4 bg-white border-2 border-black" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-white border-2 border-black" />
              <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-white border-2 border-black" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white border-2 border-black" />

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-8"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] text-green-400">
                          <User className="w-3 h-3" />
                          Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-zinc-900 border-2 border-zinc-800 p-4 text-white font-bold outline-none focus:border-green-400 focus:bg-zinc-800 transition-all placeholder:text-zinc-600 uppercase tracking-tight"
                          placeholder="Your Display Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] text-blue-400">
                          <Mail className="w-3 h-3" />
                          Contact
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-zinc-900 border-2 border-zinc-800 p-4 text-white font-bold outline-none focus:border-blue-400 focus:bg-zinc-800 transition-all placeholder:text-zinc-600 uppercase tracking-tight"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-[10px] uppercase font-bold tracking-[0.2em] text-orange-400">
                        <MessageCircle className="w-3 h-3" />
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-zinc-900 border-2 border-zinc-800 p-4 text-white font-bold outline-none focus:border-orange-400 focus:bg-zinc-800 transition-all placeholder:text-zinc-600 uppercase tracking-tight resize-none"
                        placeholder="Write your quest description..."
                      />
                    </div>

                    <div className="flex justify-end pt-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isSubmitting}
                        className="relative group overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-white group-hover:bg-green-400 transition-colors" />
                        <div className="relative px-8 py-4 m-[2px] bg-black group-hover:bg-white transition-colors flex items-center gap-3">
                          <span className={`text-sm uppercase font-bold tracking-widest ${isSubmitting ? "text-zinc-500" : "text-white group-hover:text-black"}`}>
                            {isSubmitting ? "Sending..." : "Send Quest"}
                          </span>
                          {!isSubmitting && <Send className="w-4 h-4 text-green-400 group-hover:text-black" />}
                        </div>
                      </motion.button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-400 mx-auto rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(74,222,128,0.4)]">
                      <Send className="w-10 h-10 text-black" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-heading text-white uppercase tracking-tight">Quest Accepted!</h3>
                      <p className="text-zinc-400 font-bold uppercase text-xs tracking-widest pt-2">
                        Message received. I will respond to your transmission as soon as possible.
                      </p>
                    </div>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-[10px] uppercase font-bold text-green-400 hover:text-white transition-colors tracking-[0.2em] border-b-2 border-green-400/30 pb-1"
                    >
                      Send Another Message?
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
