import React from 'react';
import { Landmark } from 'lucide-react';
import './CredibilityBanner.css';

const CredibilityBanner = () => {
    return (
        <div className="credibility-banner">
            <div className="container">
                <div className="banner-content">
                    <Landmark className="banner-icon" size={20} />
                    <p className="banner-text">
                        Incubated at <strong>IIIT Dharwad Research Park</strong>. Academic rigor meets modern learning.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CredibilityBanner;
