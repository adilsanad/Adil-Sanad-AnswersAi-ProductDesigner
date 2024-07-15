import React from 'react';
import './FeatureCard.css';

function FeatureCard({sno, title, description}) {
    return (
        <div className='feature-card'>
            <div className='sno'>{sno}</div>
            <div className='card-title'>{title}</div>
            <div className='desc'>{description}</div>
        </div>
    );
}

export default FeatureCard;