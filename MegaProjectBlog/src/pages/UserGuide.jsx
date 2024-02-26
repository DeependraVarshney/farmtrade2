import React from "react";


const UserGuide = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="flex justify-center mb-10">
          <img width="100" height="100" className="h-24 w-24 " src="https://img.icons8.com/carbon-copy/100/refer-to-manual.png" alt="refer-to-manual"/>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-10 text-black">
          User <span className="text-green-500">Guide</span>
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-black">
              1. Registration and Profile Setup
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Visit the platform's website and initiate the registration process.</li>
              <li>
                Provide accurate information about your farming activities, including
                crop types, land size, and historical yields.
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-black">
              2. Complete Digital Farming Profile
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                Fill out all relevant sections of your digital farming profile to
                present a comprehensive overview of your farm.
              </li>
              <li>
                Include details on sustainable practices, irrigation methods, and any
                other relevant information.
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-black">
              3. Explore Platform Features
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                Familiarize yourself with the various features of the platform, such as
                real-time crop monitoring, weather forecasting, and risk mitigation
                tools.
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-black">
              4. Input Real-Time Data
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                Use the platform to input real-time data about your farm, including
                soil conditions, crop health, and any other parameters suggested by
                the platform.
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-black">
              5. Monitor Crop Insights
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>
                Regularly check the platform for insights into your crop health,
                potential risks, and recommended actions based on predictive analytics.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGuide;