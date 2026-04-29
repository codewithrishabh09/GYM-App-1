import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { label: 'Active Warriors', value: '500+', accent: true },
    { label: 'Pro Mentors', value: '25', accent: false },
    { label: 'Power Stations', value: '150+', accent: true },
    { label: 'Elite Victories', value: '12', accent: false },
];

export default function Stats() {
    return (
        <section className="py-24 bg-background relative overflow-hidden border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="text-center group"
                        >
                            <div className={`text-4xl md:text-6xl font-black tracking-tighter mb-4 transition-colors duration-500 ${stat.accent ? 'text-accent shadow-red-glow' : 'text-white'}`}>
                                {stat.value}
                            </div>
                            <div className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em] group-hover:text-white/40 transition-colors duration-500 italic">
                                {stat.label}
                            </div>
                            {/* High-Performance Line */}
                            <div className="w-12 h-[1px] bg-accent mx-auto mt-6 group-hover:w-20 transition-all duration-700"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
