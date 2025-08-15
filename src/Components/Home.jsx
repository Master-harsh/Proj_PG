import React from "react";

function Home() {
  return (
    <>
      <section id="home" className="bg-[#000021] mt-0.5">
        <div className="flex items-center justify-between p-4">
          <div className="flex flex-col items-center justify-center mr-10">
            <div className="text-center text-orange-400 mb-40 mt-0">
              <h1 className="text-6xl font-bold text-center animate-fadeInUp">
                Welcome to Perfect PG for Girls
              </h1>
              <p
                className="text-center mt-4 text-xl text-amber-50 animate-fadeInRight"
                style={{ animationDelay: "0.3s" }}
              >
                Your perfect place to stay
              </p>

              <h3
                className="text-5xl mt-5 font-bold text-orange-400 animate-fadeInUp"
                style={{ animationDelay: "0.6s" }}
              >
                Your Comfort, Our Priority
              </h3>
              <p
                className="text-center text-amber-50 text-xl mt-4 animate-fadeInRight"
                style={{ animationDelay: "0.9s" }}
              >
                Affordable and fully furnished and AC rooms with 24/7 security,
                high-speed Wi-Fi, and delicious home-cooked meals.
              </p>
            </div>
            <div>
              <h3
                className="px-4 py-2 mb-5 bg-orange-100 text-white font-bold text-3xl rounded-lg shadow-md border border-orange-400 animate-pulseHighlight"
                style={{ animationDelay: "1.1s" }}
              >
                Prebook your stay at just ₹2000/-
              </h3>

              <a href="tel:+917982769986">
                <button
                className="px-8 py-3 mt-5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-2xl rounded-full shadow-lg transition transform hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: "1.2s" }}
              >
                Book Now
              </button>
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/IMG-20250811-WA0009.jpg"
              alt="Perfect PG"
              className="rounded-lg shadow-lg w-40 sm:w-60 md:w-150 h-40 sm:h-60 md:h-160"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
