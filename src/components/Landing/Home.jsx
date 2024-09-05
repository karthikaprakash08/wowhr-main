import React from 'react'
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import AboutUs from './Components/AboutUs';
import OurService from './Components/OurService';
import Partners from './Components/Partners';
import LeaderShip from './Components/LeaderShip';
import Events from './Components/Events';
import Knowledge from './Components/Knowledge';
import Testimonials from './Components/Testimonials';
import JoinCommunity from './Components/JoinCommunity';
import Footer from './Components/Footer';
import ScrollToTop from './Components/ScrollToTop';

const Home = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <AboutUs />
      <OurService />
      <Partners />
      <LeaderShip />
      <Events />
      <Knowledge />
      <Testimonials />
      <JoinCommunity />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Home