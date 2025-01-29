import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedScholarships from "../components/FeaturedScholarships";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedScholarships />
    </div>
  );
};

export default Index;