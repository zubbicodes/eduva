import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedScholarships from "../components/FeaturedScholarships";
import { Footerdemo } from "../components/ui/footer-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedScholarships />
      <Footerdemo />
    </div>
  );
};

export default Index;