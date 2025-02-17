import { motion } from "framer-motion";
import useImagePreloader from '../hooks/useImagePreloader';

const ProductCard = ({ image, name, price, buttonStyle, priceStyle, nameStyle }) => {
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
            <h3 className={`mt-3 sm:mt-4 text-center font-bold ${nameStyle}`}>
                {name}
            </h3>

            {/* Product Price */}
            <p className={`font-semibold ${priceStyle}`}>{price}</p>

            {/* Add to Cart Button */}
            <motion.button
                className={`rounded-md transition-all duration-300 ${buttonStyle}`}
                whileTap={{ scale: 0.95 }}
            >
                ADD TO CART
            </motion.button>
        </motion.div>
    );
};

export default ProductCard;