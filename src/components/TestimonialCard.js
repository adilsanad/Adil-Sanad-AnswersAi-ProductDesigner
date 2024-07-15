import React from "react";
import './TestimonialCard.css'

function TestimonialCard({content, name, designation, location, image}){
    return(
        <div className="testimonialcard">
            <p>{content}</p>
            <div className="reviewer">
                <img src={image}/>
                <div className="reviewer-details">
                    <div className="reviewer-name">{name}</div>
                    <div>{designation}</div>
                    <div>{location}</div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;