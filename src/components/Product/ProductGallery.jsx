import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ProductGallery = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const isFirstImage = selectedImage === 0;
    const isLastImage = selectedImage === images.length - 1;

    const nextImage = () => {
        setSelectedImage((prev) => (prev + 1) % images.length);
    };

    const previousImage = () => {
        setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image Container */}
            <div 
                className="w-full aspect-square overflow-hidden relative"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
            >
                {/* Navigation Arrows */}
                <AnimatePresence>
                    {isHovering && (
                        <>
                            {!isFirstImage && (
                                <motion.button
                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-transform duration-300 hover:scale-110"
                                    onClick={previousImage}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FiChevronLeft className="w-8 h-8 text-white" />
                                </motion.button>
                            )}
                            {!isLastImage && (
                                <motion.button
                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 transition-transform duration-300 hover:scale-110"
                                    onClick={nextImage}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FiChevronRight className="w-8 h-8 text-white" />
                                </motion.button>
                            )}
                        </>
                    )}
                </AnimatePresence>

                {/* Main Image */}
                <AnimatePresence mode="wait">
                    <motion.img
                        key={selectedImage}
                        src={images[selectedImage]}
                        alt="Product"
                        className="w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    />
                </AnimatePresence>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square overflow-hidden border-2 rounded-lg transition-all duration-300 ease-in-out
                            ${selectedImage === index ? 'border-dark_pink' : 'border-transparent hover:border-pink'}`}
                    >
                        <img
                            src={image}
                            alt={`Product view ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;