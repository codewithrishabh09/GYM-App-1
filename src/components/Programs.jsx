import { Dumbbell, Activity, Heart, Shield, Target, Zap, ArrowRight, Trophy, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const programs = [
    {
        id: 1,
        title: 'Strength Training',
        desc: 'Build muscle and increase your power with our comprehensive free weights and machine circuits.',
        icon: Dumbbell,
        image: '/supplements/strainght.jpg',
        gallery: [
            '/supplements/ST%20about.jpg',
            '/supplements/ST%20about2.jpg',
            '/supplements/ST%20about3.jpg',
        ]
    },
    {
        id: 2,
        title: 'HIIT Cardio',
        desc: 'Burn maximum calories in minimum time with high-intensity interval training sessions.',
        icon: Activity,
        image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1000&auto=format&fit=crop',
        gallery: [
            '/supplements/HC%20about1.jpg',
            '/supplements/HC%20about2.jpg',
            '/supplements/HC%20about3.jpg'
        ]
    },
    {
        id: 3,
        title: 'Yoga & Flexibility',
        desc: 'Improve mobility, balance, and core strength through guided yoga and stretching routines.',
        icon: Heart,
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop',
        gallery: [
            '/supplements/YF%20about1.jpg',
            '/supplements/Y%26F%20about2.jpg',
            '/supplements/Y%26F%20about3.jpg'
        ]
    },
    {
        id: 4,
        title: 'Boxing',
        desc: 'Learn technique, improve endurance, and relieve stress with heavy bag and mitt work.',
        icon: Shield,
        image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop',
        gallery: [

        ]
    },
    {
        id: 5,
        title: 'CrossFit',
        desc: 'Constantly varied functional movements executed at high intensity across broad time modalities.',
        icon: Target,
        image: '/supplements/crossfit.jpg',
        gallery: [
            'https://images.unsplash.com/photo-1541534741688-6078c64b52fe?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1599058917233-35836d5335bc?q=80&w=1000&auto=format&fit=crop'
        ]
    },
    {
        id: 6,
        title: 'Personal Training',
        desc: 'Get 1-on-1 customized coaching tailored specifically to your unique fitness goals.',
        icon: Zap,
        image: '/supplements/peronal%20training.jpg',
        gallery: [
            'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1000&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1571019613531-fbea97a51d82?q=80&w=1000&auto=format&fit=crop'
        ]
    },

];

export default function Programs() {
    return (
        <section id="programs" className="py-32 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-accent font-black tracking-[0.6em] uppercase text-[9px] border-b border-accent/20 pb-2 mb-6 inline-block"
                    >
                        Performance Architecture
                    </motion.span>
                    <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
                        Power <span className="stroke-text">Selection</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((prog, index) => {
                        const Icon = prog.icon;
                        return (
                            <motion.div
                                key={prog.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="group relative h-[500px] rounded-[3rem] overflow-hidden luxury-glass border border-white/5"
                            >
                                <img
                                    src={prog.image}
                                    alt={prog.title}
                                    className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                                <div className="absolute top-8 left-8 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all duration-500">
                                    <Icon size={24} />
                                </div>

                                <div className="absolute bottom-10 left-10 right-10">
                                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 italic leading-none">{prog.title}</h3>
                                    <p className="text-white/40 text-xs font-medium leading-relaxed italic transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 mb-8">
                                        {prog.desc}
                                    </p>

                                    <Link
                                        to={`/program/${prog.id}`}
                                        className="inline-flex items-center text-[9px] font-black uppercase tracking-[0.4em] text-accent group-hover:text-white transition-colors"
                                    >
                                        Experience Protocol
                                        <ArrowRight size={14} className="ml-4 transform group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>

                                {/* Luxury Corner Accent */}
                                <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-accent/0 group-hover:border-accent/40 transition-all duration-700"></div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
