import React from "react";

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      title: "Currency Wallet",
      description:
        "A wallet system for the farmers and investors to manage finances seamlessly.",
      linkText: "Read More",
      linkUrl: "#",
    },
    {
      id: 2,
      title: "Security Storage",
      description:
        "To safeguard their finances, we provide our clients a security vault with their own unique ID to guarantee limited but trusted access.",
      linkText: "Read More",
      linkUrl: "#",
    },
    {
      id: 3,
      title: "Expert Support",
      description:
        "A constant 24x7 hotline number is made available to our clients with experts guiding them with their years of accumulated knowledge in this industry.",
      linkText: "Read More",
      linkUrl: "#",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-10 text-green-900">
          Our 
          <span className="text-gray-800"> Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-blue-500">
                {service.title}
                <span className="text-gray-800">.</span>
              </h3>
              <p className="text-gray-600">{service.description}</p>
              <a
                href={service.linkUrl}
                className="block mt-4 text-blue-500 hover:text-blue-700 font-semibold"
              >
                {service.linkText}
              </a>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="#"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            View All
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;