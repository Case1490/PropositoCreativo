import Navbar from "../components/Navbar";
import AboutUsSection from "../sections/AboutUsSection";
import AgencyAreas from "../sections/AgencyAreas";
import Footer from "../sections/Footer";
import MissionAndVision from "../sections/MissionAndVision";
import PortfolioSection from "../sections/PortfolioSection";
import ReasonsSection from "../sections/ReasonsSection";
import ServicesSection from "../sections/ServicesSection";
import SliderLogosSection from "../sections/SliderLogosSection";
import TeamSection from "../sections/TeamSection";
import VideoSection from "../sections/VideoSection";
import WelcomeSection from "../sections/WelcomeSection";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <WelcomeSection />
      <AboutUsSection />
      <ServicesSection />
      <MissionAndVision />
      <VideoSection />
      <ReasonsSection />
      <SliderLogosSection />
      <PortfolioSection />
      <AgencyAreas />
      {/* <TeamSection /> */}
      <Footer />
    </>
  );
};

export default MainPage;
