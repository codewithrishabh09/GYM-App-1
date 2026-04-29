import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Luxury Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-shrink-0 flex items-center group cursor-pointer"
                    >
                        <span className="text-4xl font-black tracking-[-0.1em] text-white uppercase flex items-baseline">
                            ELI<span className="text-accent italic group-hover:not-italic transition-all duration-500">TE</span>
                            <span className="w-1.5 h-1.5 bg-accent rounded-full ml-1 animate-pulse"></span>
                        </span>
                    </motion.div>

                    {/* Desktop Nav - Luxury Spacing */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-12">
                            {['Home', 'Programs', 'Schedule', 'Trainers', 'Owner', 'Pricing', 'Contact'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-[10px] font-black text-white hover:text-accent uppercase tracking-[0.3em] transition-all duration-300 relative group"
                                >
                                    {item}
                                    <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-accent text-white px-10 py-4 rounded-md text-[10px] font-black uppercase tracking-[0.2em] shadow-red-glow hover:shadow-red-glow-lg transition-all duration-500 overflow-hidden relative group"
                        >
                            <span className="relative z-10">Join the Elite</span>
                            <div className="absolute inset-x-0 bottom-0 h-0 bg-white/20 transition-all duration-300 group-hover:h-full"></div>
                        </motion.button>
                    </div>

                    {/* Mobile menu button - High-contrast style */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-accent transition-colors p-2"
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Red/Black Glass */}
            <motion.div
                initial={false}
                animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                className="md:hidden glass-nav overflow-hidden border-t border-white/5"
            >
                <div className="px-6 pt-10 pb-16 space-y-8 text-center">
                    {['Home', 'Programs', 'Trainers', 'Owner', 'Pricing', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            className="block text-xl font-black text-white hover:text-accent uppercase tracking-[0.2em] transition-all"
                        >
                            {item}
                        </a>
                    ))}
                    <button className="w-full bg-accent text-white px-12 py-5 rounded-md text-sm font-black uppercase tracking-widest mt-12">
                        Get Membership
                    </button>
                </div>
            </motion.div>
        </nav>
    );
}

