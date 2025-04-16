
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonialsData = [
  {
    quote: "Eastern Memorials helped us create a beautiful tribute for our father. Their compassion and attention to detail made a difficult time much easier for our family.",
    author: "Sarah Johnson",
    relation: "Customer"
  },
  {
    quote: "We were impressed by the craftsmanship and quality of our mother's headstone. The team at Eastern Memorials guided us through every step with care and professionalism.",
    author: "Michael Thompson",
    relation: "Customer"
  },
  {
    quote: "The custom design work they did for our family monument was exceptional. They perfectly captured the spirit and legacy of our loved ones.",
    author: "Elizabeth Davis",
    relation: "Customer"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="section bg-memorial-blue text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-200">
            We're grateful for the trust our clients place in us during their most difficult times.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-memorial-blue/30 backdrop-blur-sm rounded-lg p-8 md:p-12">
            <Quote size={48} className="text-white/20 mb-4" />
            
            <div className="min-h-[12rem] flex items-center justify-center">
              <div className="text-center">
                <p className="text-xl md:text-2xl italic mb-8">
                  "{testimonialsData[currentIndex].quote}"
                </p>
                <div className="flex flex-col items-center">
                  <p className="font-semibold text-lg">
                    {testimonialsData[currentIndex].author}
                  </p>
                  <p className="text-gray-200">
                    {testimonialsData[currentIndex].relation}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevSlide} 
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? 'bg-white' : 'bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
              <button 
                onClick={nextSlide} 
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
