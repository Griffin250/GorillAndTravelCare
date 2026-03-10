import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { StorySection } from "@/components/home/StorySection";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { ExperiencesSection } from "@/components/home/ExperiencesSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { CTASection } from "@/components/home/CTASection";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <DestinationsSection />
        <ExperiencesSection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
