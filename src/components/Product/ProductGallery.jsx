import { useState } from 'react';
import { motion } from 'framer-motion';

const ProductGallery = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const images = [
        '/images/product1.jpg',
        '/images/product2.jpg',
        '/images/product3.jpg',
        '/images/product4.jpg'
    ];

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="w-full aspect-square rounded-lg overflow-hidden">
                <motion.img
                    src={images[selectedImage]}
                    alt="Product"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square rounded-md overflow-hidden border-2 transition-all
                            ${selectedImage === index ? 'border-dark_pink' : 'border-transparent'}`}
                    >
                        <img
                            src={image}
                            alt={`Product view ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;