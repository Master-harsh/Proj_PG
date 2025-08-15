import React, { useState, useEffect, useRef } from "react";
import LightboxModal from "./LightBoxModel.jsx";

const galleryImages = [
  "/IMG-20250811-WA0005.jpg",
  "/IMG-20250811-WA0006.jpg",
  "/IMG-20250811-WA0007.jpg",
  "/IMG-20250811-WA0010.jpg",
  "/IMG-20250811-WA0011.jpg",
  "/IMG-20250811-WA0012.jpg",
  "/IMG-20250811-WA0013.jpg",
  "/IMG-20250811-WA0014.jpg",
  "/IMG-20250811-WA0015.jpg",
  "/IMG-20250811-WA0018.jpg",
  "/IMG-20250811-WA0020.jpg",
  "/IMG-20250811-WA0023.jpg",
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(0);

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
  };

  const onPrev = () =>
    setIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const onNext = () => setIndex((i) => (i + 1) % galleryImages.length);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      onNext();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Touch swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 50) onNext(); // swipe left
    if (diff < -50) onPrev(); // swipe right
  };

  return (
    <section id="gallery" className="py-16 bg-[#000021] mt-0.5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-orange-400">
            Our PG in Pictures
          </h2>
          <p className="text-white mt-2 text-xl">
            Take a look at our comfortable living spaces
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {galleryImages.map((src, i) => (
              <div
                key={i}
                className="min-w-full flex-shrink-0 cursor-pointer"
                onClick={() => openAt(i)}
              >
                <img
                  src={src}
                  alt={`PG photo ${i + 1}`}
                  title="Click to view larger"
                  className="w-full h-56 sm:h-72 md:h-96 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {open && (
          <LightboxModal
            images={galleryImages}
            index={index}
            onClose={() => setOpen(false)}
            onPrev={onPrev}
            onNext={onNext}
          />
        )}
      </div>
    </section>
  );
}
