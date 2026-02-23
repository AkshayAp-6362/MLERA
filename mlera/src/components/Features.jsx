import React from 'react';
import { Network, Search, BookOpenCheck, TerminalSquare } from 'lucide-react';
import './Features.css';

const Features = () => {
    const featureData = [
        {
            icon: <Network size={28} />,
            title: "Structured Learning Paths",
            description: "No guessing what to learn next. A strictly linear, logical curriculum that builds your knowledge foundation block by block."
        },
        {
            icon: <Search size={28} />,
            title: "Concept Over Overload",
            description: "We eliminate long-winded videos and dense textbook chapters in favor of sharp, interactive concept breakdowns."
        },
        {
            icon: <BookOpenCheck size={28} />,
            title: "Integrated Lexicon",
            description: "Never open a new tab to search for a term. Get instant, plain-English definitions for complex ML jargon in context."
        },
        {
            icon: <TerminalSquare size={28} />,
            title: "Guided Implementation",
            description: "We bridge the fatal gap between theoretical math and practical code, ensuring you understand why a model works before you deploy it."
        }
    ];

    return (
        <section id="features" className="features section-padding">
            <div className="container">
                <div className="features-header text-center mb-12">
                    <h2 className="heading-lg">Designed for clarity.<br /><span className="text-gradient">Built for depth.</span></h2>
                </div>

                <div className="features-grid grid grid-2">
                    {featureData.map((feature, index) => (
                        <div key={index} className="feature-card glass-panel">
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
