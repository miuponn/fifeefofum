import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductSelection = ({ name, price, variants, fromPath }) => {
    const [selectedVariant, setSelectedVariant] = useState(0);
    const [quantity, setQuantity] = useState(1);
    
    // Update breadcrumb logic
    const fromProducts = fromPath === '/products';

    return (
        <div className="flex flex-col gap-6">
            {/* Breadcrumb */}
            <nav className="text-xs font-poppins font-light text-dark_pink mb-6">
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
                <h1 className="text-2xl md:text-3xl font-chewie font-semibold text-dark_pink mb-4">
                    {name}
                </h1>
                <p className="text-xl md:text-2xl font-urbanist font-semibold text-pink">
                    {price}
                </p>
            </div>

            {/* Style Selection */}
            <div className="flex flex-col gap-2">
                <h2 className="text-sm md:text-base font-poppins font-normal text-pink">
                    Style
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                    {variants.map((variant, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedVariant(index)}
                            className={`px-4 py-2 rounded-full text-xs font-poppins uppercase transition-all
                                ${selectedVariant === index 
                                    ? 'bg-dark_pink text-white font-semibold border border-dark_pink' 
                                    : 'bg-transparent text-dark_pink border border-dark_pink hover:bg-dark_pink hover:text-white hover:font-semibold'}`}
                        >
                            {variant}
                        </button>
                    ))}
                </div>
            </div>

            {/* Quantity Selection */}
            <div className="flex flex-col gap-2">
                <h2 className="text-sm md:text-base font-poppins font-normal text-pink">
                    Quantity
                </h2>
                <div className="flex items-center gap-4 border border-button_pink rounded-md w-fit px-4 py-2">
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

            {/* Add to Cart Button */}
            <motion.button
                className="w-[95%] mx-auto sm:mx-0 py-3 bg-peach text-white rounded-md font-poppins font-semibold
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