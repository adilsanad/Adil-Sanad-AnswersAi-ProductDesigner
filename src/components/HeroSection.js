import React, {useState, useEffect } from 'react';
import './HeroSection.css';
import hsvector from './files/hsvector.svg';
import arrow from './files/Arrow.svg';
import titlestar from './files/titlestar.svg'
const HeroSection=()=>{
    const [currentText, setCurrentText]=useState('teach better');
    const [fade, setFade]=useState('fade-in');
    const texts=['detect AI plagiarism', 'get answers in seconds', 'plan your lessons'];

    useEffect(()=>{
        let textIndex=0;
        const intervalID=setInterval(()=>{
            setFade('fade-out');
            setTimeout(()=>{
                textIndex=(textIndex+1)%texts.length;
                setCurrentText(texts[textIndex]);
                setFade('fade-in');
            }, 500);
        }, 2000);
        return()=>clearInterval(intervalID);
    }, []);

    return(
        <div className='hero-section'>
            <h1 className='title'>The <span className='title-gradient'>AI Assistant</span><img className="titlestar" src={titlestar}/>to help you</h1>
            <h1 className={`switch-text ${fade} title`}>{currentText}</h1>
            <p>Supercharge your teachers with the most reliable, safest educator-focused AI Assistant.</p>
            <a className='hs-cta'>
                Get Started
                <img src={arrow}/>
            </a>
            <div className='hs-display-vect'>
                <div className='hs-screen'/>
            </div>
        </div>

    );
}

export default HeroSection;
