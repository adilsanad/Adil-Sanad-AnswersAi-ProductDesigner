import React from "react";
import Marquee from "react-fast-marquee";
import './BottomCTA.css';
import courtyard from './files/courtyard.png';
import arrayvc from './files/arrayvc.png';
import berkeley from './files/berkeley.png';
import stanford from './files/stanford.png';
import califund from './files/califund.png';
import dormroom from './files/dorm.png';
import avc from './files/avc.png';
import arrow from './files/Arrow.svg'

function BottomCTA() {
    return (
        <section className="bottomcta">
            <div className="cta">
                <h1 className="title">Enter the future of teaching.</h1>
                <a className='hs-cta'>
                    Get Started
                    <img src={arrow}/>
                </a>
            </div>
        </section>
    );
}

export default BottomCTA;