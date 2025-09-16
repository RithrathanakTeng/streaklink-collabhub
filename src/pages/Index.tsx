import HeroSection from "@/components/ui/hero-section";
import HowItWorks from "@/components/ui/how-it-works";
import FeaturesSection from "@/components/ui/features-section";
import AudienceSections from "@/components/ui/audience-sections";
import TrendHub from "@/components/ui/trend-hub";
import Testimonials from "@/components/ui/testimonials";
import FinalCTA from "@/components/ui/final-cta";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <AudienceSections />
      <TrendHub />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
