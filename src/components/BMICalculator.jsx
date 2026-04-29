import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function BMICalculator() {
    const [height, setHeight] = useState(180); // cm
    const [weight, setWeight] = useState(75);  // kg
    const [bmi, setBmi] = useState(23.1);

    const calculateBMI = () => {
        const heightInMeters = height / 100;
        const result = (weight / (heightInMeters * heightInMeters)).toFixed(1);
        setBmi(result);
    };

    const getBmiStatus = () => {
        if (bmi < 18.5) return { label: "Underweight", color: "#666666" };
        if (bmi < 24.9) return { label: "Elite Optimal", color: "#FF3B2F" };
        if (bmi < 29.9) return { label: "Above Standard", color: "#CC0000" };
        return { label: "Critical Focus Required", color: "#880000" };
    };

    const status = getBmiStatus();

    return (
        <section id="bmi" className="py-32 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent font-black tracking-[0.5em] uppercase text-[9px] border-b border-accent/20 pb-2 mb-8 inline-block">
                            Performance Analytics
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                            Body Composition <br /> <span className="stroke-text">Intelligence</span>
                        </h2>
                        <p className="text-white/30 text-lg font-medium leading-relaxed italic max-w-xl">
                            Elite status begins with data. Analyze your starting point to architect the ultimate transformation.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="luxury-glass rounded-[3rem] p-12 border border-white/5 relative overflow-hidden group"
                    >
                        {/* Background Decoration */}
                        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/5 blur-[100px] group-hover:bg-accent/10 transition-all duration-700"></div>

                        <div className="space-y-12 relative z-10">
                            {/* Height Slider */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Height</label>
                                    <span className="text-3xl font-black text-white tracking-tighter">{height} <span className="text-xs text-white/20 ml-1">CM</span></span>
                                </div>
                                <input
                                    type="range"
                                    min="100"
                                    max="250"
                                    value={height}
                                    onChange={(e) => { setHeight(e.target.value); calculateBMI(); }}
                                    className="w-full h-1 bg-white/5 rounded-lg appearance-none cursor-pointer accent-accent"
                                />
                            </div>

                            {/* Weight Slider */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <label className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Weight</label>
                                    <span className="text-3xl font-black text-white tracking-tighter">{weight} <span className="text-xs text-white/20 ml-1">KG</span></span>
                                </div>
                                <input
                                    type="range"
                                    min="30"
                                    max="200"
                                    value={weight}
                                    onChange={(e) => { setWeight(e.target.value); calculateBMI(); }}
                                    className="w-full h-1 bg-white/5 rounded-lg appearance-none cursor-pointer accent-accent"
                                />
                            </div>

                            {/* Result Area */}
                            <div className="pt-12 border-t border-white/5 flex items-center justify-between">
                                <div>
                                    <h4 className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] mb-2">Calculated Index</h4>
                                    <div className="text-6xl font-black text-accent tracking-tighter">{bmi}</div>
                                </div>
                                <div className="text-right">
                                    <h4 className="text-[9px] font-black text-white/20 uppercase tracking-[0.4em] mb-2">Tier Status</h4>
                                    <div
                                        className="text-xl font-black uppercase tracking-tighter px-6 py-2 rounded-full border"
                                        style={{ color: status.color, borderColor: `${status.color}30`, backgroundColor: `${status.color}05` }}
                                    >
                                        {status.label}
                                    </div>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={calculateBMI}
                                className="w-full bg-accent text-white font-black uppercase tracking-[0.3em] text-[10px] py-6 rounded-md shadow-red-glow hover:shadow-red-glow-lg transition-all"
                            >
                                Re-Calculate Metrics
                            </motion.button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
