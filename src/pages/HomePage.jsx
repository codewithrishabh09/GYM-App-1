import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Programs from '../components/Programs';
import Trainers from '../components/Trainers';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Sponsorship from '../components/Sponsorship';
import Owner from '../components/Owner';
import DigitalIntegration from '../components/DigitalIntegration';

export default function HomePage() {
    return (
        <main>
            <Hero />
            <Stats />
            <Programs />
            <Trainers />
            <Sponsorship />
            <Owner />
            <DigitalIntegration />
            <Pricing />
            <Testimonials />
            <Contact />
        </main>
    );
}
