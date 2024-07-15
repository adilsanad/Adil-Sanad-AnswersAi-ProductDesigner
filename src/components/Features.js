import React from 'react';
import './Features.css';
import FeatureCard from './FeatureCard';
import chatbotimg from './files/chatbotimg.png';
import stdprog from './files/stdprogress.png';
import datasecure from './files/datasecure.svg';
import modelcompare from './files/modelcompare.svg';
import classmatepng from './files/classmatepng.png';

function Features(){
    return(
        <div className='section-wrapper'>
<section className='features'>
            <h1 className='title'>Your own helper, anywhere with </h1>
            <div className='hcentre'>
                <h1 className='title'>
                    <span className='title-gradient'>ClassMate</span>
                </h1>
                <img className="classmatepng" src={classmatepng}/></div>
            <div className='featimgbg'>
                <img className="chatbotimg" src={chatbotimg}/>
                <div className='feature-cards'>
                    <FeatureCard
                        sno="01"
                        title="24/7 Personalized Support"
                        description="AI Helper provides personalized support anytime, effectively addressing both general syllabus queries and complex topic explanations."
                    />
                    <FeatureCard
                        sno="02"
                        title="Inbuilt Plagiarism Detection"
                        description="Ensure academic integrity by providing guidance based strictly on course content. Flag potential incidents of cheating and plagiarism."
                    />
                    <FeatureCard
                        sno="03"
                        title="Save time for what really matters"
                        description="We save time for instructors by addressing repeated student questions with tailored learning tools like summaries, notes and flashcards."
                    />
                </div>
            </div>
            <h1 className='title'>Fast, Reliable and Secure.</h1>
            <div className='feature-cards-2'>
                <div className='feature-card-1'>
                    <div className='fc-text-1'>
                        <h3 className='fc-title'>View student progress in Real Time.</h3>
                        <p>Intuitive, easy to understand reports available for all your students.</p>
                    </div>
                    <img className='stdprog'src={stdprog}/>
                </div>
                <div className='feature-card-2'>
                    <h3 className='fc-title'>Private. Safe. Secure.</h3>
                    <img className='datasecure' src={datasecure}/>
                    <p>Your data stays secure with industrial-grade encryption. We never sell your data to third parties.</p>
                </div>
                <div className='feature-card-3'>
                    <img className='modelcompare' src={modelcompare}/>
                    <div className='fc-text-3'>
                        <h3 className='fc-title'>Faster and more accurate</h3>
                        <p>AnswersAi uses advanced AI models for best-in-class* accuracy and reliability</p>
                    </div>
                    </div>
            </div>
        </section>
        </div>
    );
}

export default Features;