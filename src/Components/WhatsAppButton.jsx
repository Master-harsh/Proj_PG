import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/7982769986?text=Hello%2C%20I%20am%20interested%20in%20your%20service"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-all"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </a>
  );
}
