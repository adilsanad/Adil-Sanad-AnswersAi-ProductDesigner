import React from 'react';
import './Header.css';

function Header(){
    return(
        <navbar className="Header">
            <div className="logo-text">
                Answers<span style={{ color: '#6366F1' }}>Ai</span>
            </div>
            <div className="header-nav">
                <div className='nav-links'>
                    <a>About</a>
                    <a>Pricing</a>
                    <a>Learners</a>
                    <a>Contact</a>
                </div>
                <a className='nav-cta'>
                    <p>Get Started</p>
                </a>
            </div>
        </navbar>
    )
}

export default Header;
