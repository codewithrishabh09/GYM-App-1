import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Users, CheckCircle } from 'lucide-react';
import { programs } from '../components/Programs';

export default function ProgramPage() {
    const { id } = useParams();
    const program = programs.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!program) {
        return (
            <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-background text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-black mb-4">Program Not Found</h1>
                    <Link to="/" className="text-accent hover:text-white transition-colors uppercase font-bold tracking-wider">Return Home</Link>
                </div>
            </div>
        );
    }

    const Icon = program.icon;

    // Use the image from the program data

    return (
        <div className="min-h-screen bg-background text-white pt-32 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/#programs" className="inline-flex items-center text-gray-400 hover:text-accent transition-colors mb-8 font-semibold uppercase tracking-wider text-sm">
                    <ArrowLeft size={18} className="mr-2" /> Back to Programs
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block p-5 bg-cardbg rounded-2xl text-accent border border-white/5 shadow-lg shadow-black/50 mb-8">
                            <Icon size={48} />
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6 leading-tight">
                            {program.title}
                        </h1>
                        <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-10">
                            {program.desc}
                            {" "}<br /><br />
                            Take your training to the elite level with specialized coaching, tailored progress tracking, and an unmatched gym environment built for success.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div className="bg-cardbg p-6 rounded-xl border border-white/5 hover:border-accent/50 transition-colors">
                                <Clock className="text-accent mb-3" size={24} />
                                <h3 className="font-bold text-lg mb-1">Duration</h3>
                                <p className="text-gray-400 text-sm">45-60 Minutes</p>
                            </div>
                            <div className="bg-cardbg p-6 rounded-xl border border-white/5 hover:border-accent/50 transition-colors">
                                <Calendar className="text-accent mb-3" size={24} />
                                <h3 className="font-bold text-lg mb-1">Frequency</h3>
                                <p className="text-gray-400 text-sm">3-5x Per Week</p>
                            </div>
                            <div className="bg-cardbg p-6 rounded-xl border border-white/5 hover:border-accent/50 transition-colors">
                                <Users className="text-accent mb-3" size={24} />
                                <h3 className="font-bold text-lg mb-1">Class Size</h3>
                                <p className="text-gray-400 text-sm">Limited to 15</p>
                            </div>
                            <div className="bg-cardbg p-6 rounded-xl border border-white/5 hover:border-accent/50 transition-colors">
                                <CheckCircle className="text-accent mb-3" size={24} />
                                <h3 className="font-bold text-lg mb-1">Level</h3>
                                <p className="text-gray-400 text-sm">All Levels</p>
                            </div>
                        </div>

                        <a href="/#contact" className="inline-block bg-accent hover:bg-accent/90 text-white font-black uppercase tracking-widest py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(230,60,47,0.3)]">
                            Enroll Now
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        {/* Dynamic Program Image */}
                        <div className="aspect-[3/4] rounded-3xl overflow-hidden relative border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-transparent z-10"></div>
                            <img
                                src={program.image}
                                alt={program.title}
                                className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute bottom-10 left-10 z-20">
                                <h2 className="text-3xl font-black text-white uppercase tracking-wider mb-2">Transform</h2>
                                <p className="text-accent font-bold uppercase tracking-widest text-sm">Your Physique</p>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                    </motion.div>
                </div>

                {/* Gallery Section */}
                {program.gallery && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-black uppercase tracking-tight text-white mb-10 text-center">
                            Experience the <span className="text-accent">Program</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {program.gallery.map((img, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -10 }}
                                    className="aspect-square rounded-2xl overflow-hidden border border-white/5 relative group"
                                >
                                    <img
                                        src={img}
                                        alt={`${program.title} gallery ${idx}`}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
