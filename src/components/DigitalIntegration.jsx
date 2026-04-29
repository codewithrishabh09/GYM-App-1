import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export default function DigitalIntegration() {
    return (
        <section className="relative w-full bg-[#0a0a0a] py-24 overflow-hidden selection:bg-[#e01010] selection:text-white">
            {/* Red glow radial gradient top-left */}
            <div
                className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(200,20,20,0.12) 0%, rgba(10,10,10,0) 70%)',
                    transform: 'translate(-30%, -30%)'
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE — Two phone mockups */}
                <div className="relative w-full h-[600px] sm:h-[700px] flex justify-center lg:justify-start items-center">

                    {/* Second phone (behind, slightly right, 85% opacity) */}
                    <motion.div
                        animate={{ y: [-8, 8, -8] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
                        className="absolute right-4 sm:right-12 lg:right-0 top-12"
                    >
                        <div className="w-[280px] h-[580px] bg-[#111] border-[0.5px] border-[#2a2a2a] rounded-[28px] p-4 shadow-2xl opacity-85 transform translate-x-4 transition-all duration-500 hover:scale-[1.08] hover:opacity-100 hover:z-30 cursor-zoom-in">
                            {/* Leaderboard Screen */}
                            <div className="w-full h-full rounded-[20px] bg-[#1a1a1a] overflow-hidden flex flex-col relative border border-white/5">
                                <div className="p-4 border-b border-[#2a2a2a]">
                                    <h3 className="text-white text-sm font-barlow tracking-wider font-bold">MONTHLY LEADERBOARD</h3>
                                </div>
                                <div className="flex-1 p-4 space-y-3">
                                    {[
                                        { rank: 1, name: 'MARCUS T.', score: '984', highlight: false },
                                        { rank: 2, name: 'VICTOR R.', score: '842', highlight: true },
                                        { rank: 3, name: 'JAMES L.', score: '721', highlight: false },
                                        { rank: 4, name: 'SARAH M.', score: '694', highlight: false },
                                        { rank: 5, name: 'DAVID K.', score: '612', highlight: false },
                                    ].map((member, index) => (
                                        <motion.div
                                            key={member.rank}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className={`flex items-center justify-between p-3 rounded-lg ${member.highlight ? 'bg-[#e01010]/10 border border-[#e01010]/30' : 'bg-[#111]'}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className={`text-xs font-bold ${member.highlight ? 'text-[#e01010]' : 'text-gray-500'}`}>#{member.rank}</span>
                                                <span className={`text-sm font-barlow ${member.highlight ? 'text-white' : 'text-gray-300'}`}>{member.name}</span>
                                            </div>
                                            <span className={`text-sm font-bold ${member.highlight ? 'text-[#e01010]' : 'text-gray-400'}`}>{member.score}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                {/* AI Coach tip card */}
                                <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-r from-[#e01010]/20 to-[#e01010]/5 border border-[#e01010]/20 p-3 rounded-xl backdrop-blur-md">
                                    <div className="flex items-center gap-2 mb-1">
                                        <svg className="w-4 h-4 text-[#e01010]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" /></svg>
                                        <span className="text-[#e01010] text-[10px] font-bold tracking-wider uppercase">AI Analysis</span>
                                    </div>
                                    <p className="text-gray-300 text-xs font-barlow leading-snug">Track 142 more points to reclaim Rank #1. Push your cardio window.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main phone (front, slightly left) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        animate={{ y: [0, -12, 0] }}
                        transition={{
                            y: { repeat: Infinity, duration: 7, ease: "easeInOut" },
                            opacity: { duration: 0.8 },
                            default: { duration: 0.8 }
                        }}
                        className="absolute left-0 sm:left-8 lg:left-12 top-0 z-10"
                    >
                        <div className="w-[300px] h-[620px] bg-[#111] border-[0.5px] border-[#2a2a2a] rounded-[28px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 hover:scale-[1.08] hover:z-30 cursor-zoom-in group">
                            {/* Fitness Dashboard */}
                            <div className="w-full h-full rounded-[20px] bg-[#1a1a1a] overflow-hidden flex flex-col relative border border-white/5">
                                {/* Header */}
                                <div className="p-5 flex justify-between items-center">
                                    <h3 className="text-white text-lg font-barlow-condensed font-black tracking-widest uppercase">ELITE.</h3>
                                    <div className="w-8 h-8 rounded-full bg-[#2a2a2a] overflow-hidden border border-[#333]">
                                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=100&h=100" alt="User" className="w-full h-full object-cover" />
                                    </div>
                                </div>

                                {/* Activity Ring */}
                                <div className="flex flex-col items-center justify-center mt-2 relative">
                                    <svg width="160" height="160" viewBox="0 0 160 160" className="rotate-[-90deg]">
                                        <circle cx="80" cy="80" r="70" fill="none" stroke="#2a2a2a" strokeWidth="12" />
                                        <motion.circle
                                            initial={{ strokeDashoffset: 440 }}
                                            whileInView={{ strokeDashoffset: 110 }}
                                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
                                            viewport={{ once: true }}
                                            cx="80" cy="80" r="70" fill="none" stroke="#e01010" strokeWidth="12" strokeDasharray="440" strokeLinecap="round"
                                        />
                                        <circle cx="80" cy="80" r="54" fill="none" stroke="#2a2a2a" strokeWidth="12" />
                                        <motion.circle
                                            initial={{ strokeDashoffset: 340 }}
                                            whileInView={{ strokeDashoffset: 170 }}
                                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                            viewport={{ once: true }}
                                            cx="80" cy="80" r="54" fill="none" stroke="#e01010" strokeWidth="12" strokeDasharray="340" strokeLinecap="round" opacity="0.6"
                                        />
                                    </svg>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center mt-1">
                                        <span className="text-3xl font-barlow-condensed font-black text-white">
                                            <CountUp end={748} duration={2.5} enableScrollSpy scrollSpyOnce />
                                        </span>
                                        <span className="text-[10px] text-gray-400 font-barlow uppercase tracking-wider">Score</span>
                                    </div>
                                </div>

                                {/* Stats Grid */}
                                <div className="grid grid-cols-2 gap-3 px-5 mt-6">
                                    <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-3 flex flex-col items-center justify-center">
                                        <svg className="w-5 h-5 text-[#e01010] mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>
                                        <span className="text-lg font-bold text-white font-barlow">486</span>
                                        <span className="text-[9px] text-gray-500 uppercase tracking-widest">Kcal</span>
                                    </div>
                                    <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-3 flex flex-col items-center justify-center">
                                        <svg className="w-5 h-5 text-[#e01010] mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        <span className="text-lg font-bold text-white font-barlow">42</span>
                                        <span className="text-[9px] text-gray-500 uppercase tracking-widest">Min Active</span>
                                    </div>
                                </div>

                                {/* Heart rate bar */}
                                <div className="mt-4 px-5">
                                    <div className="bg-[#111] border border-[#2a2a2a] rounded-2xl p-4 flex items-center justify-between">
                                        <div>
                                            <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Heart Rate</div>
                                            <div className="text-2xl font-bold text-white font-barlow">142 <span className="text-xs text-[#e01010] font-normal tracking-wide">BPM</span></div>
                                        </div>
                                        <div className="flex items-end gap-1 h-8">
                                            {[40, 70, 45, 90, 60, 100, 80].map((h, i) => (
                                                <div key={i} className="w-[3px] bg-[#e01010] rounded-full animate-pulse" style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Coach message card */}
                                <div className="absolute bottom-5 left-5 right-5 bg-[#111] border-l-2 border-l-[#e01010] border-y border-r border-[#2a2a2a] rounded-xl p-3 shadow-lg">
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-[#1a1a1a] flex-shrink-0 border border-[#333] overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80&w=100&h=100" alt="Coach Vikram" className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-white mb-1">Coach Vikram</div>
                                            <p className="text-[10px] text-gray-400 font-barlow leading-tight">Increase tempo, your zone 4 window closes in 3 min.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* External Badges */}
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                                className="absolute -left-6 top-32 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-4 py-2 flex items-center gap-2 shadow-xl z-20"
                            >
                                <div className="w-2 h-2 rounded-full bg-[#e01010] animate-pulse"></div>
                                <span className="text-xs text-white uppercase tracking-wider font-bold">Live session active</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 6, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 2 }}
                                className="absolute -right-12 sm:-right-24 top-64 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full px-4 py-2 flex items-center gap-2 shadow-xl z-20"
                            >
                                <div className="w-2 h-2 rounded-full bg-[#22c55e]"></div>
                                <span className="text-xs text-white uppercase tracking-wider font-bold">+12% strength this week</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT SIDE — Content block */}
                <div className="flex flex-col lg:pl-10">
                    <span className="text-[#e01010] text-[10px] tracking-[0.2em] font-bold uppercase mb-4">DIGITAL INTEGRATION</span>
                    <h1 className="text-white text-[42px] sm:text-5xl font-barlow-condensed font-black uppercase leading-none mb-2">
                        THE ELITE
                    </h1>
                    <h2
                        className="text-[42px] sm:text-5xl font-barlow-condensed font-black uppercase leading-none mb-6"
                        style={{
                            WebkitTextStroke: '1px #333',
                            color: 'transparent'
                        }}
                    >
                        OMNI-CHANNEL
                    </h2>

                    <p className="text-gray-400 font-barlow text-base leading-relaxed mb-10 max-w-lg">
                        Your performance ecosystem, anywhere in the world. Real-time biometrics, world-class coaching, and direct VIP connectivity.
                    </p>

                    <div className="space-y-8 mb-12">
                        {/* Feature 1 */}
                        <div>
                            <div className="flex items-start gap-4 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-[#111] border border-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-[#e01010]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-white text-sm font-bold tracking-wide uppercase mb-1">Seamless Biometric Sync</h4>
                                    <p className="text-gray-500 text-sm font-barlow mb-3">Heart rate, VO2, and strain streamed live to your trainer.</p>
                                </div>
                            </div>
                            <div className="w-full h-1.5 bg-[#111] rounded-full overflow-hidden ml-14 max-w-[calc(100%-3.5rem)]">
                                <div className="h-full bg-[#e01010] rounded-full w-[78%] relative">
                                    <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/20 blur-[2px]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div>
                            <div className="flex items-start gap-4 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-[#111] border border-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-[#e01010]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-white text-sm font-bold tracking-wide uppercase mb-1">Real-Time Performance Lab</h4>
                                    <p className="text-gray-500 text-sm font-barlow mb-3">Adaptive workout scoring updated every 30 seconds.</p>
                                </div>
                            </div>
                            <div className="w-full h-1.5 bg-[#111] rounded-full overflow-hidden ml-14 max-w-[calc(100%-3.5rem)]">
                                <div className="h-full bg-[#e01010] rounded-full w-[91%] relative">
                                    <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/20 blur-[2px]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div>
                            <div className="flex items-start gap-4 mb-3">
                                <div className="w-10 h-10 rounded-xl bg-[#111] border border-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-[#e01010]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-white text-sm font-bold tracking-wide uppercase mb-1">AI Coach Messaging</h4>
                                    <p className="text-gray-500 text-sm font-barlow mb-3">Personalised cues from your coach, in real time, mid-session.</p>
                                </div>
                            </div>
                            <div className="w-full h-1.5 bg-[#111] rounded-full overflow-hidden ml-14 max-w-[calc(100%-3.5rem)]">
                                <div className="h-full bg-[#e01010] rounded-full w-[65%] relative">
                                    <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/20 blur-[2px]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <button className="px-8 py-3.5 bg-[#e01010] text-white text-sm font-bold tracking-wider uppercase rounded-md hover:bg-[#cc0000] transition-colors focus:outline-none focus:ring-2 focus:ring-[#e01010] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]">
                            APP STORE
                        </button>
                        <button className="px-8 py-3.5 bg-transparent border border-[#333] text-white text-sm font-bold tracking-wider uppercase rounded-md hover:border-[#666] transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0a0a0a]">
                            PLAY STORE
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}
