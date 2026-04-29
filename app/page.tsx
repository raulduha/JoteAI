import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import HowItWorks from "@/components/HowItWorks";
import OfferSection from "@/components/OfferSection";
import ResultsSection from "@/components/ResultsSection";
import FounderSection from "@/components/FounderSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <OfferSection cuposLeft={7} />
      <ResultsSection />
      <FounderSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </>
  );
}
