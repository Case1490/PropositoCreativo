import PortafolioSection from "../sections/PortafolioSection";
import ServicesSection from "../sections/ServicesSection";
import SliderLogosSection from "../sections/SliderLogosSection";
import VideoSection from "../sections/VideoSection";
import WelcomeSection from "../sections/WelcomeSection";

const MainPage = () => {
  return (
    <>
      <WelcomeSection />
      <ServicesSection />
      <VideoSection />
      <SliderLogosSection />
      <PortafolioSection />
    </>
  );
};

export default MainPage;
