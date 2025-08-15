import React from "react";
import { CheckCircle } from "lucide-react"; // For feature icons

const pricingPlans = [
  {
    type: "Single Room",
    price: "₹22,000/month",
    features: [
      "Free WiFi",
      "Power Backup",
      "Attached Bathroom",
      "AC Room",
    ],
    popular: false,
  },
  {
    type: "Double Sharing",
    price: "₹12,000/month",
    features: [
      "Free WiFi",
      "Power Backup",
      "Shared Bathroom",
      "Washing Machine",
    ],
    popular: true, // Highlight this
  },
  {
    type: "Triple Sharing",
    price: "₹10,000/month",
    features: [
      "Free WiFi",
      "Power Backup",
      "Shared Bathroom",
      "Fridge",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-16 bg-[#000021] mt-0.5" id="pricing">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-400">Affordable & Transparent Pricing</h2>
          <p className="text-white mt-2 text-xl">Choose the perfect room that fits your needs.</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl shadow-lg p-6 flex flex-col justify-between 
              ${plan.popular ? "bg-orange-500 text-white scale-105" : "bg-white text-black"}
              transition-transform hover:scale-105`}
            >
              {/* Plan Title */}
              <h3 className="text-xl font-semibold">{plan.type}</h3>
              <p className="text-2xl font-bold mt-2">{plan.price}</p>

              {/* Features */}
              <ul className="mt-4 space-y-2">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle
                      className={`${plan.popular ? "text-white" : "text-green-500"}`}
                      size={18}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <a href="tel:+917982769986">
                <button
                className={`mt-6 py-2 px-4 rounded-lg font-medium 
                ${plan.popular ? "bg-white text-blue-600" : "bg-blue-600 text-white"}
                hover:opacity-90`}
              >
                Book Now
              </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
