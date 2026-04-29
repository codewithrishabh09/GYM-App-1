import React, { useEffect } from 'react';

// Import Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Pages
import HomePage from './pages/HomePage';
import ProgramPage from './pages/ProgramPage';

function App() {
    // Ensure smooth scroll applies if not already in index.css
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <Router>
            <div className="min-h-screen bg-background text-textprimary font-sans selection:bg-accent selection:text-white">
                <div className="noise-overlay"></div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/program/:id" element={<ProgramPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;




