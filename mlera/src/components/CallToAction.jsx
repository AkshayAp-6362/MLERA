import React from 'react';
import { ArrowRight } from 'lucide-react';
import './CallToAction.css';

const CallToAction = () => {
    return (
        <section className="cta section-padding">
            <div className="container relative z-10">
                <div className="cta-content glass-panel text-center">
                    <div className="cta-glow"></div>

                    <h2 className="heading-lg mb-6">Stop searching.<br /><span className="text-gradient">Start understanding.</span></h2>

                    <p className="text-lead mb-10">
                        Join the students and developers who are building a serious foundation in
                        AI and Machine Learning with structured, logical learning paths.
                    </p>

                    <button className="btn btn-primary btn-lg flex-center m-auto">
                        Begin Your First Path
                        <ArrowRight size={20} className="ml-2" />
                    </button>
                </div>
            </div>

            {/* Background decorations */}
            <div className="cta-bg-pattern"></div>
        </section>
    );
};

export default CallToAction;
