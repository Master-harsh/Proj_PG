import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-10 mt-0.5">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-bold text-orange-400">
            Perfect Girls PG
          </h2>
          <p className="mt-4 text-white">
            Your comfortable and secure stay in New Ashok Nagar with all
            facilities.
          </p>
        </div>

        {/* Middle Column - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#home")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-yellow-400 cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#about")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-yellow-400 cursor-pointer"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#pricing")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-yellow-400 cursor-pointer"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="hover:text-yellow-400 cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column - Contact */}
        <div>
          <h3 className="text-xl font-semibold text-orange-400 mb-4">
            Contact Us
          </h3>
          <p className="flex items-center gap-2">
            <MdLocationOn className="text-yellow-400 size-10" />
            <a
              href="https://www.google.com/maps?q=A-189+A,+Near+PAL+Optical,+Block+D,+New+Ashok+Nagar,+Delhi+-+110096"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              A-189 A, Near PAL Optical, Block D, New Ashok Nagar, Delhi -
              110096
            </a>
          </p>
          <p className="flex items-center gap-2 mt-2">
            <MdPhone className="text-yellow-400 size-6" />
            <a
              href="tel:+917982769986"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              +91 79827 69986
            </a>
          </p>
          <p className="flex items-center gap-2 mt-2">
            <MdEmail className="text-yellow-400 size-6" />
            <a
              href="mailto:PerfectgirlsPG.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400"
            >
              PerfectgirlsPG.com
            </a>
          </p>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 text-2xl"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-yellow-400 text-2xl"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-center py-4 mt-8 text-gray-400 text-sm">
        © {new Date().getFullYear()} Perfect Girls PG. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
