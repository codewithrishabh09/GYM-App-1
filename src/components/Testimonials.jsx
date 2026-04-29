import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'James Anderson',
        initials: 'JA',
        since: 'Member since 2021',
        text: '"Joining Elite Gym was the best decision of my life. The trainers are incredibly knowledgeable and the community keeps you accountable. I have lost 30lbs and never felt better."',
        rating: 5,
    },
    {
        id: 2,
        name: 'Emily Roberts',
        initials: 'ER',
        since: 'Member since 2022',
        text: '"The facilities here are world-class. From the Olympic lifting platforms to the recovery sauna, everything is designed for serious athletes. Absolutely premium experience."',
        rating: 5,
    },
    {
        id: 3,
        name: 'Michael Chang',
        initials: 'MC',
        since: 'Member since 2020',
        text: '"The functional fitness programming is unmatched. Everyday is a new challenge and I have seen massive gains in my conditioning and absolute strength. 10/10 would recommend."',
        rating: 5,
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="testimonials" className="py-32 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-accent font-black tracking-[0.6em] uppercase text-[9px] border-b border-accent/20 pb-2 mb-6 inline-block"
                    >
                        Success Architecture
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
                        Elite <span className="stroke-text">Circle</span>
                    </h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="luxury-glass rounded-[4rem] p-16 md:p-24 relative overflow-hidden group"
                        >
                            <div className="absolute top-10 left-10 text-9xl font-black text-white/5 italic select-none">"</div>

                            <div className="relative z-10">
                                <div className="flex gap-2 mb-12">
                                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                        <Star key={i} size={14} className="text-accent fill-accent" />
                                    ))}
                                </div>

                                <p className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-tight mb-16 italic">
                                    {testimonials[currentIndex].text}
                                </p>

                                <div className="flex items-center gap-6">
                                    <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xl font-black text-white">
                                        {testimonials[currentIndex].initials}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-black text-white uppercase tracking-tighter italic">{testimonials[currentIndex].name}</h4>
                                        <p className="text-accent text-[9px] font-black uppercase tracking-[0.3em]">{testimonials[currentIndex].since}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Red Glow Effect */}
                            <div className="red-glow absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"></div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Custom Navigation */}
                    <div className="flex justify-center mt-16 gap-4">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1 rounded-full transition-all duration-700 ${currentIndex === index ? 'w-12 bg-accent' : 'w-4 bg-white/10'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
