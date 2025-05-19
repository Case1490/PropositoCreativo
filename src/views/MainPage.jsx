import Navbar from "../components/Navbar";
import AboutUsSection from "../sections/AboutUsSection";
import ContactForm from "../sections/ContactForm";
import Footer from "../sections/Footer";
import LinksCustomers from "../sections/LinksCustomers";
import MissionAndVision from "../sections/MissionAndVision";
import PortfolioSection from "../sections/PortfolioSection";
import ReasonsSection from "../sections/ReasonsSection";
import ServicesSection from "../sections/ServicesSection";
import SliderLogosSection from "../sections/SliderLogosSection";
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
      <LinksCustomers />
      <ContactForm />
      <Footer />
    </>
  );
};

export default MainPage;
