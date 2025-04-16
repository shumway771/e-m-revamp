
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const portfolioData = [
  {
    category: "headstones",
    title: "Classic Granite Headstone",
    image: "https://images.unsplash.com/photo-1465447142348-e9952c393450?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "monuments",
    title: "Family Monument",
    image: "https://images.unsplash.com/photo-1602086102757-51bf6eb42c1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "markers",
    title: "Bronze Marker",
    image: "https://images.unsplash.com/photo-1617575723852-8df01863539d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "headstones",
    title: "Heart-Shaped Memorial",
    image: "https://images.unsplash.com/photo-1507484467459-8be08e49ff0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "monuments",
    title: "Cremation Monument",
    image: "https://images.unsplash.com/photo-1571824165164-e8d2eec298ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    category: "markers",
    title: "Flush Grass Marker",
    image: "https://images.unsplash.com/photo-1567365083345-68199faa7004?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', 'headstones', 'monuments', 'markers'];

  const filteredItems = filter === 'all' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-memorial-blue">Our Portfolio</h2>
          <p className="text-memorial-gray max-w-3xl mx-auto text-lg">
            View examples of our craftsmanship and dedication to creating beautiful, lasting memorial tributes.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={filter === category 
                  ? "bg-memorial-blue hover:bg-memorial-blue/90" 
                  : "text-memorial-gray hover:text-memorial-blue"
                }
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div 
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm uppercase tracking-wider mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
