import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about section-padding">
            <div className="container">
                <div className="about-grid grid grid-2">
                    <div className="about-text-content">
                        <h2 className="heading-lg">Why we built <span className="text-gradient">MLera.</span></h2>

                        <p className="about-text">
                            Developed under the IIIT Dharwad Research Park, MLera is built on a simple
                            premise: learning Machine Learning shouldn't feel like a guessing game.
                        </p>

                        <p className="about-text">
                            We built this for the college student who is overwhelmed by scattered resources
                            and the self-learner who wants serious depth without the academic gatekeeping.
                        </p>

                        <p className="about-text highlight">
                            We focus heavily on core concept clarity, stripping away the bloat so you can
                            build genuine intuition, not just memorize syntax.
                        </p>
                    </div>

                    <div className="about-visual">
                        <div className="visual-card glass-panel">
                            <div className="visual-header">
                                <div className="dot red"></div>
                                <div className="dot yellow"></div>
                                <div className="dot green"></div>
                            </div>
                            <div className="visual-body">
                                <div className="code-line"><span className="keyword">import</span> <span className="module">clarity</span></div>
                                <div className="code-line"><span className="keyword">from</span> <span className="module">complex_math</span> <span className="keyword">import</span> <span className="function">intuition</span></div>
                                <div className="code-line empty"></div>
                                <div className="code-line comment"># The old way</div>
                                <div className="code-line strike"><span className="function">guess_and_check_tutorials</span>()</div>
                                <div className="code-line empty"></div>
                                <div className="code-line comment"># The MLera way</div>
                                <div className="code-line"><span className="variable">foundation</span> = <span className="function">build_concept</span>()</div>
                                <div className="code-line"><span className="function">apply_to_code</span>(<span className="variable">foundation</span>)</div>
                            </div>
                        </div>

                        <div className="visual-backdrop"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
