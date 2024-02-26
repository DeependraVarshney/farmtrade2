import React from "react";

const NgoSupport = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">NGO Support</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Our Approach</h3>
            <p className="text-gray-600">
              At [Your NGO's Name], we believe in the transformative power of small-scale investments to uplift farming communities and create sustainable livelihoods. Our mission is to empower farmers by providing them with the financial support they need to enhance their agricultural practices, increase productivity, and improve their overall quality of life.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Key Initiatives</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Microloans for Agribusiness</li>
              <li>Training and Capacity Building</li>
              <li>Community Development Projects</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
            <p className="text-gray-600">
              Read about the inspiring stories of farmers who have benefited from our small-scale investments. From doubling their crop yields to diversifying their income sources, these stories highlight the tangible impact of our initiatives on the lives of individuals and communities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Get Involved</h3>
            <p className="text-gray-600">
              You can be a part of this transformative journey. Whether you're an individual, a corporate entity, or a government agency, there are various ways to contribute. Explore our "Get Involved" section to learn about sponsorship opportunities, volunteer programs, and collaborative projects.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-600">
              We're always looking for new partners to collaborate with us in our mission to safeguard farmers in hazardous situations. Contact us today to learn more about how you can get involved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NgoSupport;