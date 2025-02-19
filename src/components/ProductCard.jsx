import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom"; 
import useImagePreloader from '../hooks/useImagePreloader';
import { useState } from "react";
import { useCart } from '../context/CartContext';

const ProductCard = ({ 
    id, 
    image, 
    name, 
    price, 
    buttonStyle, 
    priceStyle, 
    nameStyle,
    priceHoverStyle = "hover:text-peach", 
    nameHoverStyle = "hover:underline decoration-dark_green", 
    buttonHoverStyle = "hover:bg-pink hover:text-white", 
    thumbnail2 
}) => {
    const navigate = useNavigate();
    const location = useLocation(); 
    const [isHovered, setIsHovered] = useState(false);
    const imagesLoaded = useImagePreloader([image, thumbnail2]);
    const { addToCart, setIsCartOpen } = useCart();

    const handleProductClick = () => {
        navigate(`/product/${id.toString()}`, {
            state: { from: location.pathname }
        });
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
        const product = {
            id,
            name,
            price,
            thumbnail: image,
            quantity: 1
        };
        addToCart(product, 1);
        setIsCartOpen(true); 
    };

    return (
        <motion.div className="p-[4%] flex flex-col items-center h-full justify-between">
            {/* Upper Content Container */}
            <div className="w-full flex flex-col items-center space-y-[3%]">
                {/* Product Image Container */}
                <div 
                    className="w-full aspect-square relative cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={handleProductClick}
                >
                    {imagesLoaded ? (
                        <>
                            <img
                                src={image}
                                alt={name}
                                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
                                    isHovered ? 'opacity-0' : 'opacity-100'
                                }`}
                            />
                            {thumbnail2 && (
                                <img
                                    src={thumbnail2}
                                    alt={`${name} - alternate view`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
                                        isHovered ? 'opacity-100' : 'opacity-0'
                                    }`}
                                />
                            )}
                        </>
                    ) : (
                        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                    )}
                </div>

                {/* Product Info */}
                <h3 
                    onClick={handleProductClick}
                    className={`text-base sm:text-sm md:text-base lg:text-base xl:text-base text-center font-bold transition-all duration-300 cursor-pointer ${nameStyle} ${nameHoverStyle}`}
                >
                    {name}
                </h3>
                <p 
                    onClick={handleProductClick}
                    className={`text-sm sm:text-sm md:text-sm lg:text-sm xl:text-sm font-semibold cursor-pointer transition-all duration-300 ${priceStyle} ${priceHoverStyle}`}
                >
                    {price}
                </p>
            </div>

            {/* Add to Cart Button */}
            <motion.button
                className={`w-[75%] py-[4%] mt-[7%] rounded-md text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm transition-all duration-300 ${buttonStyle} ${buttonHoverStyle}`}
                whileTap={{ scale: 0.95 }}
                onClick={handleAddToCart}
            >
                ADD TO CART
            </motion.button>
        </motion.div>
    );
};

export default ProductCard;