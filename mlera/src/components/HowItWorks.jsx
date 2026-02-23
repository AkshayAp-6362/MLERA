import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            title: "Anchor the Concept",
            description: "Start with the fundamental intuition before looking at a single line of math or code."
        },
        {
            number: "02",
            title: "Decode the Lexicon",
            description: "Read through the material smoothly. Hit an unknown term? Our built-in lexicon explains it instantly."
        },
        {
            number: "03",
            title: "Follow the Logic",
            description: "Move through guided, interactive breakdowns of the underlying mathematics."
        },
        {
            number: "04",
            title: "Build",
            description: "Translate your newfound conceptual clarity into applied engineering."
        }
    ];

    return (
        <section id="how-it-works" className="how-it-works section-padding">
            <div className="container">
                <div className="hiw-header mb-12">
                    <h2 className="heading-lg m-0">A logical flow for<br />complex subjects.</h2>
                </div>

                <div className="steps-container">
                    <div className="connection-line"></div>
                    {steps.map((step, index) => (
                        <div key={index} className="step-item">
                            <div className="step-number">{step.number}</div>
                            <div className="step-content glass-panel">
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
