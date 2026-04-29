import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Download, ShieldCheck, Activity } from 'lucide-react';

export default function MobileApp() {
    return (
        <section id="mobile-app" className="py-32 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        {/* Device Mockup - Luxury Style */}
                        <div className="relative mx-auto w-[300px] h-[600px] bg-charcoal rounded-[3rem] border-[8px] border-white/5 shadow-2xl flex flex-col overflow-hidden">
                            <div className="absolute top-0 inset-x-0 h-10 bg-black/40 flex items-center justify-center">
                                <div className="w-20 h-4 bg-black rounded-full"></div>
                            </div>

                            <div className="flex-grow p-6 pt-12 flex flex-col">
                                <span className="text-accent font-black tracking-widest text-[8px] uppercase mb-4">Master Dashboard</span>
                                <div className="h-40 glass-card rounded-2xl mb-6 p-4 flex flex-col justify-between">
                                    <div className="w-10 h-10 bg-accent/20 rounded-lg"></div>
                                    <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                                    <div className="h-8 w-full bg-accent/5 rounded"></div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="h-24 glass-card rounded-2xl"></div>
                                    <div className="h-24 glass-card rounded-2xl"></div>
                                    <div className="h-24 glass-card rounded-2xl"></div>
                                    <div className="h-24 glass-card rounded-2xl"></div>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                            <div className="absolute inset-0 border border-accent/10 rounded-[2.5rem] pointer-events-none"></div>
                        </div>

                        {/* Floating Icons */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -top-10 -right-10 w-24 h-24 luxury-glass rounded-3xl flex items-center justify-center text-accent shadow-red-glow"
                        >
                            <ShieldCheck size={40} />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute bottom-20 -left-16 w-20 h-20 luxury-glass rounded-3xl flex items-center justify-center text-accent/50 shadow-2xl"
                        >
                            <Activity size={32} />
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent font-black tracking-[0.5em] uppercase text-[9px] border-b border-accent/20 pb-2 mb-8 inline-block">
                            Digital Integration
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                            The Elite <br /> <span className="stroke-text">Omni-Channel</span>
                        </h2>
                        <p className="text-white/30 text-lg font-medium leading-relaxed italic mb-12 max-w-xl">
                            Your performance ecosystem, anywhere in the world. Real-time biometrics, world-class coaching, and direct VIP connectivity.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-center space-x-6">
                                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                                    <Smartphone size={24} />
                                </div>
                                <span className="text-white font-black uppercase tracking-widest text-[11px]">Seamless Biometric Sync</span>
                            </div>
                            <div className="flex items-center space-x-6">
                                <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center text-accent/50">
                                    <Activity size={24} />
                                </div>
                                <span className="text-white font-black uppercase tracking-widest text-[11px]">Real-time Performance Lab</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <button className="bg-white text-black px-10 py-5 rounded-md flex items-center space-x-4 font-black uppercase tracking-widest text-[10px] hover:bg-accent transition-all group shadow-2xl">
                                <Download size={18} className="group-hover:animate-bounce" />
                                <span>App Store</span>
                            </button>
                            <button className="luxury-glass px-10 py-5 rounded-md flex items-center space-x-4 font-black uppercase tracking-widest text-[10px] text-white hover:border-accent transition-all">
                                <Download size={18} />
                                <span>Play Store</span>
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
