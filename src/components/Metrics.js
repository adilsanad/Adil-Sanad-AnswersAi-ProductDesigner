import React from "react";
import './Metrics.css';

function Metrics(){
    return(
        <div className="section-wrapper">
            <section className="metrics">
                <div className="metric-col">
                    <h1 className="title">300,000+</h1>
                    <p>onboarded students</p>
                </div>
                <div className="metric-col">
                    <h1 className="title">1.2 million</h1>
                    <p>questions answered</p>
                </div>
                <div className="metric-col">
                    <h1 className="title">91%</h1>
                    <p>subscriber engagement</p>
                </div>
            </section>
        </div>
    );
}

export default Metrics;