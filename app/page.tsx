import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MaterialsCollapsible from './components/MaterialsCollapsible';
import VideoSection from './components/VideoSection';
import FeaturedServicesSlider from './components/FeaturedServicesSlider';
import FoundationSection from './components/FoundationSection';
import NewsInvestorSection from './components/NewsInvestorSection';
import AboutSection from './components/AboutSection';
import CorporateResponsibilitySection from './components/CorporateResponsibilitySection';
import CareersSection from './components/CareersSection';
import ServicesSection from './components/ServicesSection';
import InvestorRelationsSection from './components/InvestorRelationsSection';
import CommitmentSection from './components/CommitmentSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      <HeroSection />
      <MaterialsCollapsible />
      <VideoSection />
      <FeaturedServicesSlider />
      <FoundationSection />
      <NewsInvestorSection />
      <CorporateResponsibilitySection />
      <CareersSection />

    </div>
  );
}
