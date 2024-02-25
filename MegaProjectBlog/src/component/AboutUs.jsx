import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6">We Are FarmTrade™</h2>
            <p className="text-gray-600 mb-8">From providing detailed insights to cultivating connections between fields and finances, we at Farmtrade™ are dedicated to providing our customers with seamless experience in investment and farming. Farmtrade™ is a revolutionary platform where Innovation meets cultivation. We aim to provide a common platform for farmers and investors to connect directly thereby removing the middlemen and making the farming process more streamlined and modernized. Our facilities range from harvest monitoring, constant NGO Support, product tracking and many more to help our customers realize the potential of every seed planted. So, join us in this revolution where every click is a step towards a greener and more prosperous world.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read More About Us</button>
          </div>
          <div className="lg:w-1/4 relative mt-8 lg:mt-0">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
            
      {/* <VideoPlayer className="w-full h-full object-cover" src="src/assets/vid02.mp4" /> */}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <button className="bg-white text-black font-bold py-1 px-2 rounded">Play</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;