import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
            {/* Cinematic Background Layer */}
            <div className="absolute inset-0 z-0">
                <motion.video
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.6 }}
                    transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/supplements/background.mp4" type="video/mp4" />
                </motion.video>
                <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-80"></div>

                {/* Red Lighting Effects */}
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/10 blur-[150px] animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 blur-[120px]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                >
                    <motion.span
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="inline-block text-accent font-black tracking-[0.8em] uppercase text-[9px] mb-4 border-b-2 border-accent/30 pb-2"
                    >
                        Built for the Bold
                    </motion.span>
                    <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black text-white uppercase tracking-[-0.05em] leading-[0.85] mb-10">
                        <span className="block italic text-accent">Power</span>
                        <span className="stroke-text block mt-4 text-white">Elite</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center"
                >
                    <p className="text-white/40 text-sm md:text-base font-black uppercase tracking-[0.4em] max-w-xl mb-16 italic">
                        The ultimate high-performance fitness club
                    </p>

                    <div className="flex flex-col sm:flex-row gap-8 w-full sm:w-auto">
                        <motion.button
                            whileHover={{ scale: 1.02, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-accent px-14 py-6 rounded-md text-[10px] font-black text-white uppercase tracking-[0.3em] group relative overflow-hidden shadow-[0_0_30px_rgba(255,59,47,0.4)]"
                        >
                            <span className="relative z-10">Get In The Zone</span>
                            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-black text-accent transition-all duration-500 flex items-center justify-center font-black">
                                Join the Elite
                            </div>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.02, y: -5 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-transparent border border-white/10 px-14 py-6 rounded-full text-[10px] font-black text-white/50 hover:text-white hover:border-white transition-all duration-500 uppercase tracking-[0.3em]"
                        >
                            Tour the Club
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Cinematic Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-white/20 text-[8px] font-black uppercase tracking-[0.5em] -rotate-90 origin-center mb-8">Scroll</span>
                <div className="w-[1px] h-20 bg-gradient-to-b from-accent/50 to-transparent"></div>
            </motion.div>
        </section>
    );
}
