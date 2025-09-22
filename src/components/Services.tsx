import React from 'react';
import { Home, Building, Wrench, Clock, Shield, Truck } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Home Gas Cylinders',
      description: 'Premium cooking gas cylinders for your kitchen and outdoor BBQ needs with same-day delivery.',
      features: ['5kg, 12kg, 15kg cylinders', 'Safety inspection included', 'Free installation check'],
      price: 'Starting from AED 35',
      color: 'orange'
    },
    {
      icon: Building,
      title: 'Restaurant & Commercial',
      description: 'Bulk gas cylinder supply for restaurants, hotels, cafes, and commercial kitchens across Dubai.',
      features: ['Bulk pricing available', 'Scheduled deliveries', 'Priority emergency service'],
      price: 'Custom pricing',
      color: 'blue'
    },
    {
      icon: Wrench,
      title: 'Cylinder Services',
      description: 'Professional gas cylinder installation, maintenance, and safety inspection services.',
      features: ['Licensed technicians', 'Safety compliance check', '1-year service warranty'],
      price: 'Starting from AED 120',
      color: 'green'
    }
  ];

  const features = [
    {
      icon: Clock,
      title: '24/7 Gas Delivery',
      description: 'Round-the-clock gas cylinder delivery and emergency refill service across Dubai.'
    },
    {
      icon: Shield,
      title: 'Licensed & Certified',
      description: 'Dubai Municipality licensed with certified technicians following strict safety standards.'
    },
    {
      icon: Truck,
      title: 'Same Day Delivery',
      description: 'Fast gas cylinder delivery across all Dubai areas with real-time order tracking.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Gas Cylinder Types & Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete gas cylinder solutions for homes and businesses in Dubai. From cooking gas 
            to commercial supply with professional installation and maintenance services.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent rounded-full transform translate-x-16 -translate-y-16 opacity-50"></div>
              
              <div className={`w-16 h-16 bg-gradient-to-r ${
                service.color === 'orange' ? 'from-orange-500 to-red-600' :
                service.color === 'blue' ? 'from-blue-500 to-blue-600' :
                'from-green-500 to-green-600'
              } rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={28} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-blue-600">{service.price}</span>
                <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;