import { useState } from 'react';
import { motion } from 'framer-motion';

const ProductSelection = () => {
    const [selectedVariant, setSelectedVariant] = useState(0);
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-2xl md:text-3xl font-chewie text-dark_pink mb-2">
                    Product Name
                </h1>
                <p className="text-xl font-urbanist text-dark_pink_secondary">
                    $XX.XX CAD
                </p>
            </div>

            {/* Variant Selection */}
            <div className="flex flex-col gap-3">
                <h2 className="text-sm font-poppins font-medium text-dark_pink_secondary">
                    SELECT STYLE
                </h2>
                <div className="grid grid-cols-2 gap-2">
                    {['Variant 1', 'Variant 2'].map((variant, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedVariant(index)}
                            className={`px-4 py-2 rounded-md text-sm font-poppins transition-all
                                ${selectedVariant === index 
                                    ? 'bg-dark_pink text-white' 
                                    : 'bg-white text-dark_pink border border-dark_pink'}`}
                        >
                            {variant}
                        </button>
                    ))}
                </div>
            </div>

            {/* Quantity Selection */}
            <div className="flex flex-col gap-3">
                <h2 className="text-sm font-poppins font-medium text-dark_pink_secondary">
                    QUANTITY
                </h2>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 rounded-full border border-dark_pink text-dark_pink"
                    >
                        -
                    </button>
                    <span className="text-dark_pink_secondary">{quantity}</span>
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 rounded-full border border-dark_pink text-dark_pink"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
                className="w-full py-3 bg-button_pink text-white rounded-md font-poppins font-medium
                    hover:bg-white hover:text-button_pink border border-transparent
                    hover:border-button_pink transition-all duration-300"
                whileTap={{ scale: 0.95 }}
            >
                ADD TO CART
            </motion.button>
        </div>
    );
};

export default ProductSelection;