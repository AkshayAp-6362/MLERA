import React from 'react';
import { BookOpen, Twitter, Github, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#" className="logo mb-4">
                            <BookOpen className="logo-icon text-gradient" size={24} />
                            <span className="logo-text">MLera</span>
                        </a>
                        <p className="footer-description">
                            Structured Machine Learning education. Concept clarity over content overload.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Twitter size={20} /></a>
                            <a href="#" className="social-link"><Github size={20} /></a>
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-heading">Platform</h4>
                        <a href="#" className="footer-link">Learning Paths</a>
                        <a href="#" className="footer-link">Lexicon</a>
                        <a href="#" className="footer-link">Pricing</a>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-heading">Company</h4>
                        <a href="#" className="footer-link">About Us</a>
                        <a href="#" className="footer-link">IIIT Dharwad Park</a>
                        <a href="#" className="footer-link">Contact</a>
                    </div>

                    <div className="footer-links-group">
                        <h4 className="footer-heading">Legal</h4>
                        <a href="#" className="footer-link">Terms of Service</a>
                        <a href="#" className="footer-link">Privacy Policy</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} MLera. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
