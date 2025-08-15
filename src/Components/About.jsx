import { FaWifi, FaUtensils, FaShieldAlt, FaMapMarkerAlt, FaSnowflake, FaBolt, FaPumpSoap } from "react-icons/fa";
import { MdLocalLaundryService } from "react-icons/md";
import { BsFan } from "react-icons/bs";

export default function About() {
  const highlights = [
    { icon: <FaMapMarkerAlt size={30} className="text-amber-600" />, title: "Prime Location", desc: "Located near public transport, markets, and colleges." },
    { icon: <FaWifi size={30} className="text-amber-600" />, title: "High-Speed Wi-Fi", desc: "Unlimited high-speed internet for work & study." },
    { icon: <FaUtensils size={30} className="text-amber-600" />, title: "Healthy Meals", desc: "Home-cooked food served daily with care." },
    { icon: <FaShieldAlt size={30} className="text-amber-600" />, title: "24/7 Security", desc: "CCTV and gated security for your peace of mind." },
    { icon: <MdLocalLaundryService size={30} className="text-amber-600" />, title: "Washing Machine", desc: "Convenient laundry facilities available." },
    { icon: <FaSnowflake size={30} className="text-amber-600" />, title: "Fridge", desc: "Refrigerator access for fresh food storage." },
    { icon: <FaBolt size={30} className="text-amber-600" />, title: "Power Backup", desc: "Uninterrupted electricity supply with backup." },
    { icon: <BsFan size={30} className="text-amber-600" />, title: "AC Rooms", desc: "Fully air-conditioned rooms for maximum comfort." },
  ];

  return (
    <section id="about" className="p-15 mt-0.5 bg-[#000021]">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-amber-600 mb-4 text-center">About Us</h2>
          <p className="mb-6 text-white">
            At <span className="font-semibold">Perfect Stay PG</span>, we provide comfortable, safe, and affordable living spaces for students and working professionals.
            We understand the need for a home-like environment, and that’s exactly what we deliver.
          </p>

          {/* Highlights in Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div key={index} className="bg-amber-50 p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
                <div className="flex items-center gap-3 mb-2">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-gray-800 text-center">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <img
            src="/IMG-20250811-WA0015.jpg"
            alt="PG Room"
            className="w-full h-160 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
