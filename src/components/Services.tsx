
import { 
  BookMarked, 
  Users, 
  Clock, 
  Palette, 
  CalendarCheck, 
  Map 
} from 'lucide-react';

const serviceData = [
  {
    icon: <BookMarked size={36} />,
    title: "Monuments & Headstones",
    description: "Custom designed memorial stones, from traditional to modern designs, crafted with exceptional quality."
  },
  {
    icon: <Users size={36} />,
    title: "Family Consultation",
    description: "Personalized guidance through the entire memorial selection process, ensuring your wishes are fulfilled."
  },
  {
    icon: <Palette size={36} />,
    title: "Custom Designs",
    description: "Creative design services to personalize your memorial with custom artwork, symbols, and inscriptions."
  },
  {
    icon: <Map size={36} />,
    title: "On-Site Services",
    description: "Professional installation and placement services at your chosen cemetery or memorial location."
  },
  {
    icon: <CalendarCheck size={36} />,
    title: "Pre-Planning",
    description: "Memorial pre-planning services that allow you to make decisions thoughtfully and without pressure."
  },
  {
    icon: <Clock size={36} />,
    title: "Restoration",
    description: "Expert restoration of existing monuments to preserve their beauty and structural integrity."
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-memorial-cream">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-memorial-blue">Our Services</h2>
          <p className="text-memorial-gray max-w-3xl mx-auto text-lg">
            At Eastern Memorials, we provide comprehensive memorial services to honor your loved ones with the dignity and respect they deserve.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-memorial-blue mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-memorial-blue">{service.title}</h3>
              <p className="text-memorial-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
