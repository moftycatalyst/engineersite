import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg z-50 border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TF</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">TechForge</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Team
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Team
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
