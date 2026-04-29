import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-accent font-black tracking-[0.6em] uppercase text-[9px] border-b border-accent/20 pb-2 mb-6 inline-block"
                        >
                            VIP Recruitment
                        </motion.span>
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8">
                            Initiate <span className="stroke-text">Evolution</span>
                        </h2>
                        <p className="text-white/40 text-xs font-medium leading-relaxed italic mb-12 uppercase tracking-[0.1em]">
                            Contact our recruitment specialists to begin your journey.
                        </p>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] ml-4">Identity</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white text-xs placeholder:text-white/10 focus:border-accent transition-all outline-none"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] ml-4">Comm Link</label>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white text-xs placeholder:text-white/10 focus:border-accent transition-all outline-none"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] ml-4">Protocol Selection</label>
                                <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white text-xs focus:border-accent transition-all outline-none appearance-none">
                                    <option className="bg-black">Silver Elite Request</option>
                                    <option className="bg-black">Platinum Pro Inquiry</option>
                                    <option className="bg-black">Royal Elite Invitation</option>
                                    <option className="bg-black">Private Coaching Consultation</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em] ml-4">Briefing</label>
                                <textarea
                                    rows="4"
                                    placeholder="Your fitness objectives..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 text-white text-xs placeholder:text-white/10 focus:border-accent transition-all outline-none resize-none"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-accent text-white font-black uppercase tracking-[0.4em] text-[10px] py-6 rounded-md relative overflow-hidden group shadow-red-glow"
                            >
                                <span className="relative z-10">Send Transmission</span>
                                <div className="red-glow absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Info Side */}
                    <div className="flex flex-col gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="luxury-glass rounded-[3rem] p-12 border border-white/5 relative overflow-hidden"
                        >
                            <h3 className="text-xl font-black text-white uppercase tracking-[0.3em] mb-12 italic border-l-2 border-accent pl-6">Intel Center</h3>

                            <div className="space-y-12">
                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                                        <MapPin size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">Sector</p>
                                        <p className="text-white text-sm font-black uppercase italic tracking-tighter">Gate No. 3 Sector 15 Gurugam</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                                        <Phone size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">Secure Line</p>
                                        <p className="text-white text-sm font-black uppercase italic tracking-tighter">+91 8858935531</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                                        <Mail size={18} />
                                    </div>
                                    <div>
                                        <p className="text-[8px] font-black text-white/20 uppercase tracking-[0.3em]">Channel</p>
                                        <p className="text-white text-sm font-black uppercase italic tracking-tighter underline underline-offset-4 decoration-accent/20">join@elitegym.com</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex-grow rounded-[3rem] overflow-hidden border border-white/5 h-64 luxury-glass relative group">
                            <iframe
                                title="Gym Location"
                                src="https://maps.google.com/maps?q=Sector%2015,%20Gurugram&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                className="absolute inset-0 w-full h-full border-0 grayscale invert opacity-20 group-hover:opacity-40 transition-opacity duration-1000"
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background to-transparent"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
