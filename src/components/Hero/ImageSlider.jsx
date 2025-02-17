import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import heroData from "../../data/hero.json";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log('heroData:', heroData);
    const hasImages = heroData?.images?.length > 0;
    if (hasImages) {
      console.log('Setting images:', heroData.images);
      setImages(heroData.images);

      heroData.images.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          console.log(`Image loaded successfully: ${src}`);
          setIsLoaded(true);
        };
        img.onerror = (e) => {
          console.error(`Failed to load image: ${src}`, e);
          setError(`Failed to load image: ${src}`);
        };
      });
    } else {
      console.log('No images found in heroData');
    }
  }, []);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div
      className="relative w-full h-full flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Carousel */}
      <div className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out">
        {images.length > 0 ? (
          images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            />
          ))
        ) : (
          <div className="flex items-center justify-center w-full h-full bg-gray-200">
            <p className="text-gray-500 text-lg">No images available</p>
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && isLoaded && (
        <>
          <button
            onClick={prevSlide}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 transition-transform duration-300 hover:scale-125 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <FiChevronLeft className="text-4xl text-dark_pink_secondary transition-opacity duration-300" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 transition-transform duration-300 hover:scale-125 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <FiChevronRight className="text-4xl text-dark_pink_secondary transition-opacity duration-300" />
          </button>
        </>
      )}
    </div>
  );
};

export default ImageSlider;