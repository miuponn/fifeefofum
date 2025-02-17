import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import heroData from "../../data/hero.json"; // Dynamic Source

const ImageSlider = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load images dynamically from JSON
    useEffect(() => {
        if (heroData && heroData.images.length > 0) {
            setImages(heroData.images);

            // Preload images to avoid initial blank screen
            heroData.images.forEach((src) => {
                const img = new Image();
                img.src = src;
                img.onload = () => setIsLoaded(true);
            });
        }
    }, []);

    const prevSlide = () =>
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

    const nextSlide = () =>
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    return (
        <div
            className="relative w-full h-auto flex items-center justify-center overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Carousel */}
            <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
                {images.length > 0 ? (
                    images.map((img, index) => (
                        <img
                            key={index}
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className={`absolute w-full h-auto max-h-[85vh] object-contain transition-opacity duration-700 ${
                                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    />
                ))
            ) : (
                <div className="flex items-center justify-center w-full h-[85vh] bg-gray-200">
                    <p className="text-dark_pink text-lg">No images available</p>
                </div>
            )}
      </div>

        {/* Navigation Arrows (Hide if Only 1 Image) */}
        {images.length > 1 && isLoaded && (
            <>
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 transition-transform duration-300 hover:scale-125 opacity-0 hover:opacity-100"
                >
                    <FiChevronLeft className="text-4xl text-dark_pink_secondary transition-opacity duration-300" />
                </button>
  
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 transition-transform duration-300 hover:scale-125 opacity-0 hover:opacity-100"
                >
                    <FiChevronRight className="text-4xl text-dark_pink_secondary transition-opacity duration-300" />
                </button>
            </>
        )}
    </div>
  );
};

export default ImageSlider;