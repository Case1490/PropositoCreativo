import AboutUsSection from "../sections/AboutUsSection";
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
      <WelcomeSection />
      <AboutUsSection />
      <ServicesSection />
      <VideoSection />
      <ReasonsSection />
      <SliderLogosSection />
      <PortfolioSection />
      <TeamSection />
    </>
  );
};

export default MainPage;
