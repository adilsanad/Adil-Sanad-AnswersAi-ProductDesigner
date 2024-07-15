import React from 'react';
import './Testimonials.css';
import TestimonialCard from './TestimonialCard';
import HubertLiu from './files/hubertliu.png';
import ShuoChen from './files/shuochen.png';
import placeholderpfp from './files/placeholderimg.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// Import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';


function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className='subtitle'>Trusted by over <span style={{color:'#7000FF'}}>300,000</span> students & educators the world over.</h2>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
      <SwiperSlide>
          <TestimonialCard
            content="“It’s a life saver . Working as a Teaching Assistant at UC Berkeley’s Mechanical Engineering division, I'm constantly grading and resolving student queries about course materials that run into many hours each week. With AnswersAi, I am able to gather up information and double check my solutions much more quickly, and allows my students to get quick feedback and problem-solving support. Brilliant!”"
            name="Hubert Liu"
            designation="Teaching Assistant"
            location="UC Berekeley"
            image={HubertLiu}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            content="“This is a wonderful example of generative AI leveling the playing field to accelerate more innovation. The AI Tutor helps answer basic questions of students and allows me to focus on student education with great speed allowing me to spend most time teaching. ”"
            name="Shuo Chen"
            designation="Faculty & Board of Advisors"
            location="UC Berekeley, Stanford"
            image={ShuoChen}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            content="Lorem ipsum dolor sit amet consectetur. Tempus non donec habitasse tellus arcu. Non dictum pellentesque enim mauris eget in morbi diam interdum. Eget aliquam dolor mi ac urna vestibulum diam. Arcu."
            name="Firstname Lastname"
            designation="Designation"
            location="Institution, Location"
            image={placeholderpfp}
          />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard
            content="Lorem ipsum dolor sit amet consectetur. Tempus non donec habitasse tellus arcu. Non dictum pellentesque enim mauris eget in morbi diam interdum. Eget aliquam dolor mi ac urna vestibulum diam. Arcu."
            name="Firstname Lastname"
            designation="Designation"
            location="Institution, Location"
            image={placeholderpfp}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials;