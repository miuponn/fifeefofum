import { motion } from "framer-motion";
import useImagePreloader from '../hooks/useImagePreloader';

const ProductCard = ({ image, name, price }) => {
    const imagesLoaded = useImagePreloader([image]);

    return (
        <motion.div
            className="p-3 sm:p-4 md:p-5 flex flex-col items-center transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
        >
            {/* Product Image */}
            {imagesLoaded ? (
                <img
                    src={image}
                    alt={name}
                    className="w-full h-auto object-cover"
                />
            ) : (
                <div className="w-full h-[200px] bg-gray-200 animate-pulse">
                    
                </div>
            )}

            {/* Product Name */}
            <h3 className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-urbanist text-dark_green text-center font-bold">
                {name}
            </h3>

            {/* Product Price */}
            <p className="text-xs sm:text-sm md:text-md text-dark_green font-urbanist font-semibold">{price}</p>

            {/* Add to Cart Button */}
            <motion.button
                className="mt-2 sm:mt-3 px-4 sm:px-6 py-2 sm:py-3 bg-button_pink text-white font-poppins text-xs sm:text-sm md:text-lg font-normal rounded-md transition-all duration-300 hover:bg-white hover:text-button_pink"
                whileTap={{ scale: 0.95 }}
            >
                ADD TO CART
            </motion.button>
        </motion.div>
    );
};

export default ProductCard;