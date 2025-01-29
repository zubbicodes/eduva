import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold">StudentEmpower</span>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-primary transition-colors">
                Scholarships
              </a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-primary transition-colors">
                Study Materials
              </a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-primary transition-colors">
                Government Schemes
              </a>
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-primary transition-colors">
                Community
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-secondary hover:text-primary focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary transition-colors">
              Scholarships
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary transition-colors">
              Study Materials
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary transition-colors">
              Government Schemes
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary hover:text-primary transition-colors">
              Community
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;