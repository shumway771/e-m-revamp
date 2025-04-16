
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className={`text-2xl font-bold ${isScrolled ? 'text-memorial-blue' : 'text-white'}`}>
            Eastern Memorials
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`font-medium hover:text-memorial-blue transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? 'text-gray-700' : 'text-white'} size={24} />
          ) : (
            <Menu className={isScrolled ? 'text-gray-700' : 'text-white'} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <nav className="container py-4 flex flex-col space-y-4">
            {['Home', 'About', 'Services', 'Portfolio', 'Testimonials', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="font-medium text-gray-700 hover:text-memorial-blue transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
