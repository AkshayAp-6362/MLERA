import React from 'react';
import { ArrowRight, ChevronRight, Code, BrainCircuit } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero section-padding">
            <div className="hero-background">
                <div className="glow-orb primary-orb"></div>
                <div className="glow-orb secondary-orb"></div>
                <div className="grid-overlay"></div>
            </div>

            <div className="container hero-container relative">
                <div className="hero-content animate-fade-in">
                    <div className="badge-wrapper mb-6">
                        <span className="badge">
                            <span className="badge-dot"></span>
                            Introducing MLera
                        </span>
                    </div>

                    <h1 className="heading-xl hero-title">
                        Learn Machine Learning.<br />
                        In Order. <span className="text-gradient">Without the Noise.</span>
                    </h1>

                    <p className="text-lead delay-100">
                        Stop piecing together fragmented tutorials. MLera provides a structured,
                        guided path to deep concept clarity—built specifically for students and serious self-learners.
                    </p>

                    <div className="hero-actions delay-200">
                        <button className="btn btn-primary hero-btn flex-center">
                            Start Your First Path
                            <ArrowRight size={18} className="ml-2" />
                        </button>
                        <button className="btn btn-secondary hero-btn flex-center">
                            View Curriculum
                            <ChevronRight size={18} className="ml-2" />
                        </button>
                    </div>

                    <div className="hero-stats delay-300 glass-panel">
                        <div className="stat-item">
                            <BrainCircuit className="stat-icon" size={24} />
                            <div className="stat-text">
                                <span className="stat-value">Concept-First</span>
                                <span className="stat-label">Clear intuition before math</span>
                            </div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <Code className="stat-icon" size={24} />
                            <div className="stat-text">
                                <span className="stat-value">Guided Code</span>
                                <span className="stat-label">Bridging theory & practice</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
