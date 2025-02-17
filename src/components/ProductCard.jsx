import { motion } from "framer-motion";
import useImagePreloader from '../hooks/useImagePreloader';
import { useState } from "react";

const ProductCard = ({ image, name, price, buttonStyle, priceStyle, nameStyle, thumbnail2 }) => {
    const [isHovered, setIsHovered] = useState(false);
    const imagesLoaded = useImagePreloader([image, thumbnail2]);

    return (
        <motion.div className="p-[4%] flex flex-col items-center h-full justify-between">
            {/* Upper Content Container */}
            <div className="w-full flex flex-col items-center space-y-[3%]">
                {/* Product Image Container */}
                <div 
                    className="w-full aspect-square relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {imagesLoaded ? (
                        <>
                            <img
                                src={image}
                                alt={name}
                                className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-300 ease-in-out ${
                                    isHovered ? 'opacity-0' : 'opacity-100'
                                }`}
                            />
                            {thumbnail2 && (
                                <img
                                    src={thumbnail2}
                                    alt={`${name} - alternate view`}
                                    className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-300 ease-in-out ${
                                        isHovered ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />
                            )}
                        </>
                    ) : (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
                    )}
                </div>

                {/* Product Info */}
                <h3 className={`text-[2.8vw] sm:text-[2vw] md:text-[1.7vw] lg:text-[1.2vw] text-center font-bold hover:underline decoration-dark_green transition-all duration-300 cursor-pointer ${nameStyle}`}>
                    {name}
                </h3>
                <p className={`text-[2.5vw] sm:text-[1.8vw] md:text-[1.5vw] lg:text-[1.1vw] font-semibold ${priceStyle}`}>
                    {price}
                </p>
            </div>

            {/* Add to Cart Button */}
            <motion.button
                className={`w-[75%] py-[2.5%] mt-[7%] rounded-md text-[2.2vw] sm:text-[1.6vw] md:text-[1.3vw] lg:text-[1vw] transition-all duration-300 ${buttonStyle}`}
                whileTap={{ scale: 0.95 }}
            >
                ADD TO CART
            </motion.button>
        </motion.div>
    );
};

export default ProductCard;