import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductSelection = ({ 
    id,
    name, 
    price, 
    variants, 
    fromPath,
    image 
}) => {
    const [selectedVariant, setSelectedVariant] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const { addToCart, setIsCartOpen } = useCart(); 

    // Update breadcrumb logic
    const fromProducts = fromPath === '/products';

    const handleAddToCart = () => {
        const product = {
            id,
            name,
            price,
            thumbnail: image,
            variant: variants[selectedVariant],
            quantity
        };
        addToCart(product, quantity);
        setIsCartOpen(true);
    };

    return (
        <div className="flex flex-col gap-4 md:gap-8">
            {/* Desktop Breadcrumb */}
            <nav className="hidden md:block text-sm font-poppins font-light text-dark_pink">
                <Link to="/" className="hover:underline text-[#AF001A]">Home</Link>
                <span className="text-[#AF001A] mx-3">&gt;</span>
                {fromProducts && (
                    <>
                        <Link to="/products" className="hover:underline text-[#AF001A]">Products</Link>
                        <span className="text-[#AF001A] mx-3">&gt;</span>
                    </>
                )}
                <span className="text-dark_pink">{name}</span>
            </nav>

            {/* Product Name */}
            <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-chewie font-semibold text-dark_pink mb-4 md:mb-6">
                    {name}
                </h1>
                <p className="text-lg md:text-xl font-urbanist font-semibold text-pink">
                    {price}
                </p>
            </div>
            
            {/* Quantity Selection */}
            <div className="flex flex-col gap-2">
                <h2 className="text-sm md:text-base font-poppins font-normal text-pink">
                    Quantity
                </h2>
                <div className="flex items-center gap-4 border border-button_pink rounded-sm w-fit px-4 py-2">
                    <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="text-dark_pink font-poppins"
                    >
                        -
                    </button>
                    <span className="text-dark_pink font-poppins min-w-[20px] text-center">{quantity}</span>
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="text-dark_pink font-poppins"
                    >
                        +
                    </button>
                </div>
            </div>

            {/* Style Selection */}
            <div className="flex flex-col gap-2 pb-2">
                <h2 className="text-sm md:text-base font-poppins font-normal text-pink">
                    Style
                </h2>
                <div className="flex flex-wrap gap-2">
                    {variants.map((variant, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedVariant(index)}
                            className={`inline-flex px-4 py-2.5 rounded-full text-xs font-poppins uppercase transition-all whitespace-nowrap font-medium
                                ${selectedVariant === index 
                                    ? 'bg-dark_pink text-white border border-dark_pink' 
                                    : 'bg-transparent text-button-pink border border-dark_pink hover:bg-dark_pink hover:text-white'}`}
                        >
                            {variant}
                        </button>
                    ))}
                </div>
            </div>

            {/* Add to Cart Button - Full width on mobile */}
            <motion.button
                onClick={handleAddToCart}
                className="w-full sm:w-[80%] mx-auto sm:mx-0 py-3 bg-peach text-white rounded-md font-poppins font-semibold
                    hover:bg-white hover:text-peach border border-transparent
                    hover:border-peach transition-all duration-300"
                whileTap={{ scale: 0.95 }}
            >
                ADD TO CART
            </motion.button>
        </div>
    );
};

export default ProductSelection;