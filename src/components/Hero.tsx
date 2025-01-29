import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Empower Your Education Journey
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in">
            Access scholarships, study materials, and government schemes all in one place
          </p>
          <button className="bg-secondary text-primary px-8 py-3 rounded-full font-semibold text-lg hover:bg-accent transition-colors duration-300 flex items-center gap-2 mx-auto animate-slide-up">
            Get Started
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;