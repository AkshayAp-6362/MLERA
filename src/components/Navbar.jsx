import React, { useState, useEffect } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <a href="#" className="logo">
                    <BookOpen className="logo-icon text-gradient" size={28} />
                    <span className="logo-text">MLera</span>
                </a>

                <div className="nav-links desktop-only">
                    <a href="#problem" className="nav-link">The Problem</a>
                    <a href="#about" className="nav-link">About</a>
                    <a href="#features" className="nav-link">Features</a>
                    <a href="#how-it-works" className="nav-link">How it Works</a>
                </div>

                <div className="nav-actions desktop-only">
                    <button className="btn btn-secondary nav-login">Log In</button>
                    <button className="btn btn-primary">Start Learning</button>
                </div>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-links">
                    <a href="#problem" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>The Problem</a>
                    <a href="#about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</a>
                    <a href="#features" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                    <a href="#how-it-works" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>How it Works</a>
                </div>
                <div className="mobile-nav-actions">
                    <button className="btn btn-secondary w-full mb-3">Log In</button>
                    <button className="btn btn-primary w-full">Start Learning</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
