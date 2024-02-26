import React from "react"

const CustomerReviewsSection = () => {
  const reviews = [
    {
 id: 1,
      quote:
        "Farmtrade has revolutionized the way I access credit for my farming activities. I no longer have to worry about collateral or credit history, and I have been able to invest in modern farming practices that have increased my yields.",
      name: "Naitik Jain, Small-scale Farmer",
    },
    {
      id: 2,
      quote:
        "As an investor, I was hesitant to invest in the agricultural sector due to the uncertainty and volatility. However, Farmtrade's platform has provided me with accurate insights into crop yields and associated risks, making it easier for me to make informed investment decisions.",
      name: "Sagar S Maddi, Investor",
    },
    {
      id: 3,
      quote:
        "Farmtrade's platform has transformed the way we make lending decisions. The predictive analytics and comprehensive data provided by the platform have significantly reduced our default rates and enabled us to make informed lending decisions.",
      name: "Atharva Mahajan, Lending Institution",
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          What Our Customers Are Saying
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg">
              <p className="text-gray-600">{review.quote}</p>
              <h3 className="text-xl font-bold mt-4 text-green-500">
                {review.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewsSection;