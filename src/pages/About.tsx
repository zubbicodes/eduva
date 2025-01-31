import Navbar from "../components/Navbar";
import { Footerdemo } from "../components/ui/footer-section";
import { BounceCardsDemo } from "@/components/BounceCardsDemo";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About eduva</h1>
          <div className="prose prose-lg">
            <p className="text-lg text-muted-foreground mb-6">
              eduva is a comprehensive educational platform dedicated to making quality education accessible to everyone. Our mission is to bridge the gap between students and educational opportunities through technology.
            </p>
            
            <h2 className="text-2xl font-semibold mt-12 mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We strive to empower students by providing easy access to scholarships, study materials, and government schemes all in one place. Our platform is designed to simplify the educational journey and make resources more accessible.
            </p>

            <div className="my-16">
              <BounceCardsDemo />
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-4">What We Offer</h2>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground mb-6">
              <li>Comprehensive scholarship database</li>
              <li>High-quality study materials</li>
              <li>Information about government educational schemes</li>
              <li>Community support for students</li>
              <li>Educational guidance and resources</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-12 mb-4">Our Vision</h2>
            <p className="text-lg text-muted-foreground mb-6">
              We envision a world where every student has equal access to educational opportunities, regardless of their background. Through our platform, we aim to create a supportive ecosystem that nurtures academic growth and success.
            </p>
          </div>
        </div>
      </div>
      <Footerdemo />
    </div>
  );
};

export default About; 