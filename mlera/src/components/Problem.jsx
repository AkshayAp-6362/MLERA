import React from 'react';
import { AlertCircle } from 'lucide-react';
import './Problem.css';

const Problem = () => {
    return (
        <section id="problem" className="problem section-padding">
            <div className="container">
                <div className="problem-content glass-panel">
                    <div className="problem-header mb-6">
                        <AlertCircle className="problem-icon" size={32} />
                        <h2 className="heading-lg m-0">The tutorial loop is broken.</h2>
                    </div>

                    <div className="problem-body">
                        <p className="problem-text">
                            You have access to thousands of hours of ML content, but you still feel stuck.
                            You jump from video to video, copy code without understanding the math, and
                            drown in technical jargon.
                        </p>
                        <p className="problem-text highlight">
                            The problem isn't a lack of information. The problem is a lack of structure.
                            You don't need more content. You need a clear path.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Problem;
