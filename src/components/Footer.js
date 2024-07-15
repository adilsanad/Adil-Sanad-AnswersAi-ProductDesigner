import React from "react";
import './Footer.css';
import footerbg from './files/footeraura.svg';
import facebook from './files/Facebook.svg';
import tiktok from './files/tiktok.svg';
import instagram from './files/Instagram.svg';

function Footer(){
    return (
        <section className="footer">
                <div className="footer-content">
                    <div className="footer-items">
                        <div className="logo-text">
                            Answers<span style={{ color: '#6366F1' }}>Ai</span>
                        </div>
                        <div className="footer-nav">
                            <ul className="menu-heading">
                                <h2>Support</h2>
                                <li>Contact Us</li>
                                <li>FAQ</li>
                            </ul>
                            <ul className="menu-heading">
                                <h2>Solutions</h2>
                                <li>For Students</li>
                                <li>For Educators</li>
                            </ul>
                            <ul className="menu-heading">
                                <h2>Company</h2>
                                <li>About</li>
                                <li>Careers</li>
                            </ul>
                            <ul className="menu-heading">
                                <h2>Legal</h2>
                                <li>Privacy</li>
                                <li>Copyright</li>
                                <li>Terms of Service</li>
                            </ul>
                        </div>
                    </div>
                    <div className="social-media">
                        <img src={facebook} href/>
                        <img src={tiktok}/>
                        <img src={instagram}/>
                    </div>
                </div>
                <div className="footer-cc">
                © 2024 AnswersAi Corp. All Rights Reserved.
            </div>
        </section>
    );
}

export default Footer;