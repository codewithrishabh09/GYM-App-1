/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#030303', // Deepest Black
                cardbg: '#0a0a0a',      // Ultra-dark charcoal
                accent: '#FF3B2F',      // High-Performance Red
                secondary: '#CC0000',   // Deep Crimson
                charcoal: '#121212',
                textprimary: '#FFFFFF',
                textsecondary: 'rgba(255, 255, 255, 0.4)',
            },
            boxShadow: {
                'red-glow': '0 0 30px rgba(255, 59, 47, 0.15)',
                'red-glow-lg': '0 0 60px rgba(255, 59, 47, 0.25)',
                'luxury-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
            },
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
                barlow: ['Barlow', 'sans-serif'],
                'barlow-condensed': ['"Barlow Condensed"', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
