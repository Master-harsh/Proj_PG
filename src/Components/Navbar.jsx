import React from "react";
import { NavbarMenu } from "../data/NavMenu.js";
import { CiSearch } from "react-icons/ci";
import { IoMdCall } from "react-icons/io";
import { IoIosHome } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FaPhoneAlt } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav>
        <div className="container flex justify-between items-center bg-orange-500 py-6">
          {/* Logo Section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase mx-2">
            <IoIosHome />
            <p className="text-black">PERFECT PG</p>
          </div>

          {/* Menu Section */}

          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-black-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <ScrollLink
                      to={item.link}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="inline-block py-1 px-3 hover:bg-amber-100 hover:text-black font-bold rounded"
                    >
                      {item.title}
                    </ScrollLink>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-4">
            {/* <button className="text-2xl hover:bg-amber-100 hover:text-black rounded-full p-2 duration-200">
              <CiSearch className="text-2xl" />
            </button> */}
            <a
              href="tel:+917982769986" // Replace with your phone number
              className="text-2xl hover:bg-amber-100 hover:text-black rounded-full p-2 duration-200"
            >
              <IoMdCall className="text-2xl" />
            </a>
            <a
              href="tel:+917982769986" // Replace with your phone number
              className="hover:bg-amber-100 text-black font-bold hover:text-black rounded-md border-2 border-black px-6 py-2 mr-2 duration-200 hidden md:block"
            >
              Call
            </a>

            {/* Mobile sidebar section */}
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <MdMenu className="text-4xl text-black" />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile sidebar section */}
      <ResponsiveMenu open={open} />
    </>
  );
}

export default Navbar;
