import React from "react";
import './About.css';
import aboutpng from './files/aboutimg.png';
import aboutcta from './files/aboutcta.svg';
import Marquee from "react-fast-marquee";
import courtyard from './files/courtyard.png';
import arrayvc from './files/arrayvc.png';
import berkeley from './files/berkeley.png';
import stanford from './files/stanford.png';
import califund from './files/califund.png';
import dormroom from './files/dorm.png';
import avc from './files/avc.png';
import arrow from './files/Arrow.svg'

function About(){
    return(
        <section className="About">
            <h1 className="title">AnswersAi is at the forefront of AI in education.</h1>
            <div className="about-cards">
                <img className="aboutpng" src={aboutpng}></img>
                <div className="about-content">
                    <p>Fed up with overpriced textbooks, inconsistent tutoring quality, and the struggle to find trustworthy resources online? We understand the challenges. <b>That's why we created Answers<span style={{ color: '#6366F1' }}>Ai</span></b>.</p>
                    <p>Harnessing the power of cutting-edge AI, AnswersAi provides immediate access to <b>top-tier educational materials</b>, <b>streamlines learning</b>, and provides <b>support tailored to each user</b>. </p>
                    <p className="abtctatext">Discover the future of education with <b>Answers<span style={{ color: '#6366F1' }}>Ai</span></b>.</p>
                    <img className="aboutcta" src={aboutcta}></img>
                </div>
            </div>
            <div className="backing">
                <h3 className="subtitle">
                    Backed by <span style={{color:'#6366F1'}}>industry leaders</span> & <span style={{color:'#6366F1'}}>academic scholars</span> from
                </h3>
                <Marquee className="backinglogos">
                    <div className="child">
                        <img src={courtyard}/>
                        <div className="spacer"></div>
                    </div>
                    <div className="child">
                        <img src={avc}/>
                        <div className="spacer"></div>
                    </div>
                    <div className="child">
                        <img src={berkeley}/>
                        <div className="spacer"></div>
                    </div>
                    <div className="child">
                        <img src={stanford}/>
                        <div className="spacer"></div>
                    </div>
                    <div className="child">
                        <img src={califund}/>
                        <div className="spacer"></div>
                    </div>
                    <div className="child">
                        <img src={arrayvc}/>
                        <div className="spacer"></div>
                    </div>
                    <div className="child">
                        <img src={dormroom}/>
                        <div className="spacer"></div>
                    </div>
                </Marquee>
            </div>
        </section>
    );
}

export default About;