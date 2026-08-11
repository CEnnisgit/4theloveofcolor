import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import { EmpathyGuaranteesSection } from "@/components/sections/EmpathyGuaranteesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CallToActionSection } from "@/components/sections/CallToActionSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-terracotta selection:text-white overflow-x-hidden">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <SelectedWorkSection />
        <EmpathyGuaranteesSection />
        <ProcessSection />
        <ServiceAreaSection />
        <TestimonialsSection />
        <CallToActionSection />
      </main>

      <Footer />
    </div>
  );
}
