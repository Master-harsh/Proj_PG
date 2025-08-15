import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';

function ResponsiveMenu({ open, setOpen }) {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // Close sidebar after click
    }
  };

  return (
    <>
      <AnimatePresence mode='wait'>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-0 w-full h-screen z-20"
          >
            <div className='text-xl font-semibold uppercase bg-orange-500 text-white py-10 m-6 rounded-3xl'>
              <ul className='flex flex-col justify-center items-center gap-10'>
                <li
                  onClick={() => scrollToSection("home")}
                  className='hover:bg-amber-100 hover:text-orange-500 cursor-pointer px-4 py-2 rounded-md'
                >
                  Home
                </li>
                <li
                  onClick={() => scrollToSection("about")}
                  className='hover:bg-amber-100 hover:text-orange-500 cursor-pointer px-4 py-2 rounded-md'
                >
                  About
                </li>
                <li
                  onClick={() => scrollToSection("blog")}
                  className='hover:bg-amber-100 hover:text-orange-500 cursor-pointer px-4 py-2 rounded-md'
                >
                  Blog
                </li>
                <li
                  onClick={() => scrollToSection("pricing")}
                  className='hover:bg-amber-100 hover:text-orange-500 cursor-pointer px-4 py-2 rounded-md'
                >
                  Pricing
                </li>
                <li
                  onClick={() => scrollToSection("contact")}
                  className='hover:bg-amber-100 hover:text-orange-500 cursor-pointer px-4 py-2 rounded-md'
                >
                  Contact
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ResponsiveMenu;
