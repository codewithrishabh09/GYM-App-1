import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-background py-32 border-t border-white/5 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">

                    {/* Brand Col */}
                    <div className="space-y-8">
                        <a href="/#home" className="text-4xl font-black tracking-tighter text-white uppercase inline-block group">
                            ELI<span className="text-accent group-hover:italic transition-all">TE</span><span className="text-accent underline decoration-white/20 underline-offset-8">.</span>
                        </a>
                        <p className="text-white/30 text-sm font-medium leading-relaxed italic max-w-xs">
                            The ultimate destination for human optimization. Engineered for those who demand excellence in every fiber of their being.
                        </p>
                        <div className="flex space-x-4">
                            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-white/40 hover:text-white hover:bg-accent hover:border-accent transition-all duration-500 hover:-translate-y-2">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Selection */}
                    <div>
                        <h3 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-10 border-l-2 border-accent pl-4">Navigation</h3>
                        <ul className="space-y-5">
                            {['Home', 'About Us', 'Class Schedule', 'Membership', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`/#${item.toLowerCase().replace(/ /g, '')}`} className="text-white/30 hover:text-accent font-black uppercase tracking-widest text-[10px] transition-all duration-300 flex items-center group">
                                        <span className="w-0 group-hover:w-4 h-[1px] bg-accent mr-0 group-hover:mr-4 transition-all duration-300"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Protocols */}
                    <div>
                        <h3 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-10 border-l-2 border-accent pl-4">Protocols</h3>
                        <ul className="space-y-5">
                            {['Strength Training', 'HIIT Cardio', 'Yoga & Flexibility', 'Boxing', 'Personal Training'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-white/30 hover:text-accent font-black uppercase tracking-widest text-[10px] transition-all duration-300 flex items-center group">
                                        <span className="w-0 group-hover:w-4 h-[1px] bg-accent mr-0 group-hover:mr-4 transition-all duration-300"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Channels */}
                    <div>
                        <h3 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-10 border-l-2 border-accent pl-4">Support</h3>
                        <ul className="space-y-5">
                            {['Help Center', 'Terms of Service', 'Privacy Policy', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-white/30 hover:text-accent font-black uppercase tracking-widest text-[10px] transition-all duration-300 flex items-center group">
                                        <span className="w-0 group-hover:w-4 h-[1px] bg-accent mr-0 group-hover:mr-4 transition-all duration-300"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/5 mt-24 pt-12 flex flex-col md:flex-row justify-between items-center text-white/20 text-[9px] font-black uppercase tracking-[0.3em]">
                    <p>&copy; {new Date().getFullYear()} Elite Global Systems. All rights reserved.</p>
                    <div className="flex space-x-8 mt-6 md:mt-0">
                        <span className="hover:text-white cursor-pointer transition-colors px-2 py-1 border border-white/5 rounded">Ref: Alpha-9</span>
                        <span className="hover:text-white cursor-pointer transition-colors px-2 py-1 border border-white/5 rounded">Status: Operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
