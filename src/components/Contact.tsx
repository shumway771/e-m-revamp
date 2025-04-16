
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section bg-memorial-lightgray">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-memorial-blue">Contact Us</h2>
          <p className="text-memorial-gray max-w-3xl mx-auto text-lg">
            We're here to answer any questions you may have and provide guidance during this difficult time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-memorial-blue mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-memorial-blue/10 p-3 rounded-full mr-4">
                  <MapPin className="text-memorial-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-memorial-blue">Our Location</h4>
                  <address className="not-italic text-memorial-gray">
                    545 Brookside Ave<br />
                    Brantford, ON N3R 0C3<br />
                    Canada
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-memorial-blue/10 p-3 rounded-full mr-4">
                  <Phone className="text-memorial-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-memorial-blue">Phone</h4>
                  <p className="text-memorial-gray">
                    <a href="tel:+15197526978" className="hover:text-memorial-blue transition-colors">
                      (519) 752-6978
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-memorial-blue/10 p-3 rounded-full mr-4">
                  <Mail className="text-memorial-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-memorial-blue">Email</h4>
                  <p className="text-memorial-gray">
                    <a href="mailto:info@eastern-memorials.ca" className="hover:text-memorial-blue transition-colors">
                      info@eastern-memorials.ca
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-memorial-blue/10 p-3 rounded-full mr-4">
                  <Clock className="text-memorial-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg text-memorial-blue">Business Hours</h4>
                  <ul className="text-memorial-gray space-y-1">
                    <li>Monday - Friday: 9:00 AM - 5:00 PM</li>
                    <li>Saturday: 10:00 AM - 2:00 PM</li>
                    <li>Sunday: Closed</li>
                  </ul>
                  <p className="mt-2 text-sm text-memorial-gray">
                    After-hours appointments available upon request
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-semibold text-memorial-blue mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-memorial-gray mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-memorial-blue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-memorial-gray mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-memorial-blue"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-memorial-gray mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-memorial-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-memorial-gray mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-memorial-blue resize-none"
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-memorial-blue hover:bg-memorial-blue/90 text-white"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
