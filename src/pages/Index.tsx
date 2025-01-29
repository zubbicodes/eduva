import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedScholarships from "../components/FeaturedScholarships";
import { Footerdemo } from "../components/ui/footer-section";
import { Feature108Demo } from "@/components/Feature108Demo";
import { PricingCardBasic } from "@/components/Pricing";

var myInt: number = 55;

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Feature108Demo />
      <PricingCardBasic />
      <Footerdemo />
    </div>
  );
};

export default Index;