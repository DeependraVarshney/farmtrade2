import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Expert Management',
      description: 'We have a panel of experts who have been in this industry for years. With their expertise and collaborative efforts with multiple agencies, we guarantee high efficiency and maximum outcome.',
      icon: 'https://img.icons8.com/external-justicon-lineal-justicon/64/external-money-management-economy-and-currency-justicon-lineal-justicon.png'
    },
    {
      title: 'Secure Investment',
      description: 'With facilities like Secure Storage and verification processes, we guarantee complete security in all investments made on our platform.',
      icon: 'https://img.icons8.com/wired/64/private2.png'
    },
    {
      title: 'E-commerce',
      description: 'Our platform provides seamless e-commerce facilities for buying and selling agricultural products.',
      icon: 'https://img.icons8.com/ios/50/e-commerce.png'
    },
    {
      title: 'NGO Support',
      description: 'We collaborate with multiple NGOs to provide support and resources to farmers and rural communities.',
      icon: 'https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/64/external-ngo-international-ngo-inipagistudio-lineal-color-inipagistudio.png'
    }
  ];

  return (
    <section className="bg-slate-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Us</h2>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 bg-white p-4">
          {features.map((feature, index) => (
            <div key={index} className="text-center lg:w-1/4">
            <div className="flex items-center justify-center mb-4">
              <img src={feature.icon} alt={feature.title} className="w-16 h-16 rounded" />
            </div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600 mb-8">{feature.description}</p>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;