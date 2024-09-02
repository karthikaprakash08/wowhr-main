import Header from "./Components/Header";
import Events from "./Components/Events";
import Footer from "./Components/Footer";
// import Banner from "./Components/Banner";
import AboutUs from "./Components/AboutUs";
import Partners from "./Components/Partners";
import Knowledge from "./Components/Knowledge";
import LeaderShip from "./Components/LeaderShip";
import OurService from "./Components/OurService";
import LandingPage from "./Components/LandingPage";
import Testimonials from "./Components/Testimonials";
import ScrollToTop from "./Components/ScrollToTop";
import JoinCommunity from "./Components/JoinCommunity";

function App() {
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
      <JoinCommunity/>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
