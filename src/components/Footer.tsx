
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Eastern Memorials</h4>
            <p className="mb-4">
              Crafting meaningful monuments and memorials to honor your loved ones.
            </p>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <a href="tel:+15197526978" className="hover:text-white transition-colors">
                (519) 752-6978
              </a>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <Mail size={16} />
              <a href="mailto:info@eastern-memorials.ca" className="hover:text-white transition-colors">
                info@eastern-memorials.ca
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">Monuments & Headstones</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Family Consultation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Custom Designs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">On-Site Services</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pre-Planning</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Restoration</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-1">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
            <p className="mt-4 text-sm">
              After-hours appointments available upon request
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {currentYear} Eastern Memorials. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors mr-4">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
