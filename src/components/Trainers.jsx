import React from 'react';
import { Instagram, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const trainers = [
    {
        id: 1,
        name: 'Marcus Thorne',
        spec: 'Head Strength Coach',
        bio: 'Former competitive bodybuilder with 15 years of experience building raw power and elite physiques.',
        image: '/supplements/trainer1.jpg',
    },
    {
        id: 2,
        name: 'Sarah Jenkins',
        spec: 'HIIT & Mobility Expert',
        bio: 'Specializes in high-intensity conditioning and foundational mobility to make you move perfectly.',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop',
    },
    {
        id: 3,
        name: 'Davin Chen',
        spec: 'Fight & Conditioning',
        bio: 'Ex-MMA fighter turning everyday people into relentless athletes through boxing and cross-training.',
        image: '/supplements/trainer2.jpg',
    },
];

export default function Trainers() {
    return (
        <section id="trainers" className="py-32 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-accent font-black tracking-[0.6em] uppercase text-[9px] border-b border-accent/20 pb-2 mb-6 inline-block"
                    >
                        Master Mentors
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
                        Elite <span className="stroke-text">Specialists</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {trainers.map((trainer, index) => (
                        <motion.div
                            key={trainer.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group relative h-[600px] rounded-[3rem] overflow-hidden luxury-glass border border-white/5"
                        >
                            <img
                                src={trainer.image}
                                alt={trainer.name}
                                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                            <div className="absolute bottom-10 left-10 right-10 flex flex-col items-center text-center">
                                <span className="text-accent font-black tracking-[0.3em] uppercase text-[8px] mb-4">{trainer.spec}</span>
                                <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-6 italic leading-none">{trainer.name}</h3>

                                <div className="flex gap-4 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent transition-all">
                                        <Instagram size={16} />
                                    </a>
                                    <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-accent hover:border-accent transition-all">
                                        <Twitter size={16} />
                                    </a>
                                </div>

                                <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] pt-6 border-t border-white/5 w-full">
                                    Master Level Coach
                                </p>
                            </div>

                            {/* Red Glow Effect */}
                            <div className="red-glow absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
