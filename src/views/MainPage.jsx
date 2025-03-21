import PortafolioSection from "../sections/PortafolioSection";
import ServicesSection from "../sections/ServicesSection";
import SliderLogosSection from "../sections/SliderLogosSection";
import TeamSection from "../sections/TeamSection";
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
      <TeamSection />
    </>
  );
};

export default MainPage;
