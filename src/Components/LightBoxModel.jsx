import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function LightboxModal({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}) {
  const overlayRef = useRef(null);

  // Close on ESC + navigate with arrow keys
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    // prevent body scroll while open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, onPrev, onNext]);

  // Close when clicking outside the image
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 rounded-full p-2 bg-white/10 hover:bg-white/20"
      >
        <X className="text-white" />
      </button>

      {/* Prev */}
      <button
        onClick={onPrev}
        aria-label="Previous image"
        className="absolute left-4 md:left-8 rounded-full p-2 bg-white/10 hover:bg-white/20"
      >
        <ChevronLeft className="text-white" />
      </button>

      {/* Image */}
      <div className="max-w-6xl w-full max-h-[80vh] flex items-center justify-center">
        <img
          src={images[index]}
          alt={`Gallery image ${index + 1}`}
          className="w-full h-full object-contain select-none"
          draggable="false"
        />
      </div>

      {/* Next */}
      <button
        onClick={onNext}
        aria-label="Next image"
        className="absolute right-4 md:right-8 rounded-full p-2 bg-white/10 hover:bg-white/20"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-white/10 px-3 py-1 rounded-full">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}
