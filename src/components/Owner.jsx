import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Instagram, Twitter, Award } from 'lucide-react';

export default function Owner() {
    return (
        <section id="owner" className="py-24 bg-cardbg relative overflow-hidden">
            {/* Background Accent Lines */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="relative h-[600px] rounded-xl overflow-hidden shadow-luxury-glass">
                            <div className="absolute inset-0 bg-accent/30 group-hover:bg-accent/0 transition-colors duration-500 z-10 mix-blend-color"></div>
                            {/* Placeholder Image - Replace with Rishabh's actual photo */}
                            <img
                                src="/supplements/gym owner.jpg"
                                alt="Rishabh - Gym Owner"
                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                            />
                        </div>
                        {/* Stats Box */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="absolute -bottom-8 -right-8 bg-background border border-white/10 p-6 rounded-lg backdrop-blur-md shadow-red-glow-lg hidden md:block"
                        >
                            <div className="flex items-center space-x-4">
                                <Award className="text-accent w-12 h-12" />
                                <div>
                                    <p className="text-3xl font-black text-white">10+</p>
                                    <p className="text-textsecondary text-sm uppercase tracking-wider font-bold">Years Experience</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="h-[2px] w-12 bg-accent"></div>
                            <span className="text-accent font-black tracking-widest uppercase text-sm">Meet The Founder</span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black text-white mb-2 uppercase leading-none tracking-tight">
                            Rishabh
                        </h2>
                        <h3 className="text-2xl text-textsecondary font-bold uppercase tracking-widest mb-8">
                            Head Coach & Owner
                        </h3>

                        <div className="space-y-6 text-lg text-textsecondary mb-10 leading-relaxed font-light">
                            <p>
                                "My vision for ELITE was simple: create an uncompromising environment for those who demand the sheer best from themselves. We are not just a gym; we are a forge for greatness."
                            </p>
                            <p>
                                With over a decade of experience in high-performance training and body transformation, I've dedicated my life to helping individuals shatter their limits. We've built a community that thrives on discipline, power, and relentless progress.
                            </p>
                        </div>

                        {/* Signature/Quote styling */}
                        <div className="border-l-4 border-accent pl-6 py-2 mb-10">
                            <p className="text-white text-xl font-bold tracking-wide italic leading-snug">
                                "EXCUSES DON'T BUILD MUSCLE. YOU EARN YOUR BODY EVERY SINGLE DAY."
                            </p>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-6">
                            {[Mail, Instagram, Twitter].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="h-12 w-12 rounded-full bg-background border border-white/10 flex items-center justify-center text-white hover:text-accent hover:border-accent transition-all duration-300 hover:shadow-red-glow"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
