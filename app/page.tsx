import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import WhyPeppyGold from "@/components/WhyPeppyGold";
import GoldenSteps from "@/components/GoldenSteps";

import AppDownloadCTA from "@/components/AppDownloadCTA";

import Certifications from "@/components/Certifications";

import UserBenefits from "@/components/UserBenefits";

import Testimonials from "@/components/Testimonials";

import TrustedPartners from "@/components/TrustedPartners";
import Leadership from "@/components/Leadership";
import BusinessConsultingPartners from "@/components/BusinessConsultingPartners";












import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      

      {/* Services Section */}
      <section className="py-16 px-8 grid md:grid-cols-3 gap-8 bg-gray-100">
        <ServiceCard
          title="Gold Aggregation"
          description="Consolidating gold from trusted sources with full transparency."
        />
        <ServiceCard
          title="Digital Gold"
          description="Invest in gold digitally with real-time value tracking."
        />
        <ServiceCard
          title="Secure Storage"
          description="Your gold is stored safely with insured vault partners."
        />
      </section>

      {/* Why Peppy Gold Section */}
      <WhyPeppyGold />
      <GoldenSteps />
      <Certifications />
      <UserBenefits />
      <Testimonials />
      <TrustedPartners />
      <Leadership/>
      <BusinessConsultingPartners/>
      <AppDownloadCTA />

      <Footer />
    </>
  );
}
