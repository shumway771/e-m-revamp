
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-memorial-blue mb-6">About Eastern Memorials</h2>
            <p className="text-memorial-gray text-lg mb-6">
              Since 1969, Eastern Memorials has been a trusted name in memorial craftsmanship, 
              serving families throughout Ontario with dignity and compassion during their time of need.
            </p>
            <p className="text-memorial-gray mb-8">
              Our skilled artisans blend traditional techniques with modern technology to create 
              memorials that truly honor and celebrate the lives of your loved ones. We understand 
              that each memorial tells a unique story, and we're dedicated to helping you create 
              a lasting tribute that reflects the personality, achievements, and legacy of those 
              you wish to remember.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <CheckCircle2 className="text-memorial-blue mr-3" size={24} />
                <span className="text-memorial-gray">Over 50 years of trusted service</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-memorial-blue mr-3" size={24} />
                <span className="text-memorial-gray">Family-owned and operated business</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-memorial-blue mr-3" size={24} />
                <span className="text-memorial-gray">Skilled craftsmen and artisans</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-memorial-blue mr-3" size={24} />
                <span className="text-memorial-gray">High-quality materials and workmanship</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="text-memorial-blue mr-3" size={24} />
                <span className="text-memorial-gray">Personalized design services</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1567082472371-f8a63d7a1c9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Stonemason crafting a monument" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-6 shadow-lg max-w-xs">
              <p className="text-memorial-blue font-semibold text-lg mb-2">
                Crafting Memories Since 1969
              </p>
              <p className="text-memorial-gray">
                Five decades of helping families honor their loved ones with beautiful, lasting memorials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
