
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1620922045745-a48e92b73239?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      />
      
      <div className="container relative z-10 text-memorial-blue">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="mb-6">Honoring Memories With Lasting Tributes</h1>
          <p className="text-xl mb-8 text-memorial-gray">
            For over 50 years, Eastern Memorials has crafted 
            beautiful memorials that celebrate and honor the lives of your loved ones.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              className="bg-memorial-blue hover:bg-memorial-blue/90 text-white"
            >
              Our Services
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-memorial-blue text-memorial-blue hover:bg-memorial-blue/10"  
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-memorial-blue text-sm mb-2">Scroll Down</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-memorial-blue"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
