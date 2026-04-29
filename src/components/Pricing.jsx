import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const pricingPlans = [
    {
        name: 'Silver Elite',
        monthlyPrice: 2499,
        badge: 'Standard Access',
        features: [
            'Olympic Grade Arena Access',
            'Full Hydro-Therapy Spa',
            'Bio-Hack Lab Basics',
            'Standard Personal Mentor',
            'Executive Locker Room'
        ],
        theme: 'silver',
        popular: false,
    },
    {
        name: 'Platinum Pro',
        monthlyPrice: 4999,
        badge: 'The Gold Standard',
        features: [
            'All Silver Protocols',
            '24/7 VIP Multi-Club Access',
            'Private Master Mentor',
            'Metabolic Blueprint Analysis',
            'The Zenith Lounge Access'
        ],
        theme: 'gold',
        popular: true,
    },
    {
        name: 'Royal Elite',
        monthlyPrice: 9999,
        badge: 'Absolute Pinnacle',
        features: [
            'All Platinum Protocols',
            'Private Suite Access',
            'In-House Longevity Lab',
            'Personal Nutrition Chef',
            'Invite-Only Founder Events'
        ],
        theme: 'platinum',
        popular: false,
    }
];

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section id="pricing" className="py-32 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-accent font-black tracking-[0.6em] uppercase text-[9px] border-b border-accent/20 pb-2 mb-6 inline-block"
                    >
                        Membership Protocol
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-12">
                        Elite <span className="stroke-text">Tiers</span>
                    </h2>

                    {/* Luxury Toggle */}
                    <div className="flex items-center justify-center space-x-8">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${!isYearly ? 'text-white' : 'text-white/20'}`}>Monthly</span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="w-20 h-10 bg-white/5 rounded-full border border-white/10 p-1 relative transition-all"
                        >
                            <div className={`absolute top-1 bottom-1 w-8 bg-accent rounded-full transition-all duration-500 ${isYearly ? 'left-11' : 'left-1'}`}></div>
                        </button>
                        <span className={`text-[10px] font-black uppercase tracking-widest ${isYearly ? 'text-white' : 'text-white/20'}`}>Annual <span className="text-accent ml-2 italic underline underline-offset-4">(-20%)</span></span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {pricingPlans.map((plan, index) => {
                        const price = isYearly ? Math.floor(plan.monthlyPrice * 0.8) : plan.monthlyPrice;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className={`luxury-glass rounded-[3rem] p-12 relative flex flex-col group ${plan.popular ? 'border-accent shadow-red-glow-lg scale-105 z-10' : 'border-white/5'}`}
                            >
                                {/* Badge */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full glass-card border-accent/20 text-[8px] font-black uppercase tracking-[0.4em] text-accent">
                                    {plan.badge}
                                </div>

                                <div className="mb-12 text-center">
                                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-8 italic">{plan.name}</h3>
                                    <div className="flex justify-center items-end">
                                        <span className="text-6xl font-black text-white tracking-tighter">₹{price}</span>
                                        <span className="text-white/20 text-xs font-black uppercase tracking-widest mb-2 ml-2">/MO</span>
                                    </div>
                                </div>

                                <ul className="space-y-6 mb-16 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center space-x-4">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                                            <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full py-6 rounded-md text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-500 overflow-hidden relative ${plan.popular ? 'bg-accent text-white' : 'bg-white/5 text-white hover:bg-white/10'}`}
                                >
                                    <span className="relative z-10">Initiate Membership</span>
                                    <div className="red-glow absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </motion.button>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
