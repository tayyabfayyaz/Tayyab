import HeroSection from "@/components/sections/hero-section";
import ProofStrip from "@/components/sections/proof-strip";
import CaseStudiesSection from "@/components/sections/case-studies-section";
import ProcessSection from "@/components/sections/process-section";
import CapabilitiesSection from "@/components/sections/capabilities-section";
import OtherProjectsSection from "@/components/sections/other-projects-section";
import CtaSection from "@/components/sections/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProofStrip />
      <CaseStudiesSection />
      <ProcessSection />
      <CapabilitiesSection />
      <OtherProjectsSection />
      <CtaSection />
    </>
  );
}
