import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Metrics from './components/Metrics';
import BottomCTA from './components/BottomCTA';
import About from './components/About';
import Footer from './components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      <Metrics />
      <BottomCTA />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
