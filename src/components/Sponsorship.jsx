import React from 'react';
import { motion } from 'framer-motion';
import { Flame, ShieldCheck, Dumbbell, Zap } from 'lucide-react';

const benefits = [
    {
        title: "Clinically Proven",
        desc: "Formulated for elite athletes with scientifically backed ingredients for optimal performance and recovery.",
        icon: ShieldCheck
    },
    {
        title: "Maximum Bioavailability",
        desc: "Advanced absorption technology ensuring every gram of protein reaches your muscles faster.",
        icon: Zap
    },
    {
        title: "Uncompromising Purity",
        desc: "Rigorously tested to be free from banned substances, ensuring clean and effective fuel.",
        icon: Dumbbell
    }
];

export default function Sponsorship() {
    return (
        <section id="sponsorship" className="py-32 bg-black relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[160px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 relative group">
                            {/* We use a placeholder that fits the aggressive theme until a real image is provided */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
                            <img
                                src= '/supplements/mb_protein.png'
                                alt="MuscleBlaze Whey Protein"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                            />

                            <div className="absolute bottom-12 left-12 right-12 z-20">
                                <span className="inline-block px-4 py-2 bg-accent text-white font-black text-[10px] uppercase tracking-[0.3em] mb-4">
                                    Official Partner
                                </span>
                                <h3 className="text-4xl font-black text-white uppercase tracking-tighter">
                                    MuscleBlaze
                                </h3>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent font-black tracking-[0.5em] uppercase text-[9px] border-b border-accent/20 pb-2 mb-8 inline-block">
                            Elite Fuelation
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                            Fuel Your <br /> <span className="stroke-text">Beast Mode</span>
                        </h2>

                        <p className="text-white/40 text-lg font-medium leading-relaxed italic mb-12">
                            We have partnered with MuscleBlaze, the leading sports nutrition brand, to provide our elite members with the highest quality whey protein. Because world-class training demands world-class fuel.
                        </p>

                        <div className="space-y-8 mb-12">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-start space-x-6"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent">
                                        <benefit.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-white uppercase tracking-tight mb-2">{benefit.title}</h4>
                                        <p className="text-white/30 text-sm font-medium leading-relaxed">{benefit.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-accent text-white px-10 py-5 rounded-md text-[10px] font-black uppercase tracking-[0.2em] shadow-red-glow hover:shadow-red-glow-lg transition-all duration-500 overflow-hidden relative group"
                        >
                            <span className="relative z-10 flex items-center">
                                Claim Discount <Flame size={16} className="ml-2" />
                            </span>
                            <div className="absolute inset-x-0 bottom-0 h-0 bg-white/20 transition-all duration-300 group-hover:h-full"></div>
                        </motion.button>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
