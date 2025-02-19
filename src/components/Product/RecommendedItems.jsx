import ProductCard from '../ProductCard';
import { motion } from 'framer-motion';
import productsData from '../../data/productsData';
import sparklesLeft from '../../assets/images/twinkles-l.svg';
import sparklesRight from '../../assets/images/twinkles-r.svg';

const RecommendedItems = () => {
    // Product Card styles
    const buttonStyle = "mt-2 sm:mt-3 px-4 sm:px-6 py-2 sm:py-3 border border-dark_pink text-dark_pink font-poppins text-xs sm:text-sm md:text-lg font-normal hover:bg-dark_pink hover:text-white";
    const priceStyle = "text-xs sm:text-sm md:text-md text-dark_pink font-urbanist font-semibold";
    const nameStyle = "text-sm sm:text-base md:text-lg font-urbanist text-dark_pink font-bold";
    const nameHoverStyle = "hover:underline decoration-button_pink";

    const recommendedProducts = productsData.slice(0, 4);

    return (
        <section className="relative w-full pt-6 pb-3 sm:pt-8 sm:pb-4 md:pt-10 md:pb-6 lg:pt-12 lg:pb-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            {/* Section Header with Sparkles */}
            <div className="relative flex items-center justify-center gap-4 mb-3 sm:mb-4 md:mb-6">
                {/* Left Sparkles */}
                <img 
                    src={sparklesLeft} 
                    alt="Left Sparkles"
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                />
                
                <h2 className="text-dark_pink text-xl sm:text-2xl md:text-3xl font-chewie font-semibold text-center">
                    you may also like
                </h2>

                {/* Right Sparkles */}
                <img 
                    src={sparklesRight} 
                    alt="Right Sparkles"
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"
                />
            </div>
            
            {/* Product Grid */}
            <div className="relative grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-5 max-w-6xl mx-auto">
                {recommendedProducts.map((product) => (
                    <motion.div 
                        key={product.id}
                        className="w-[90%] mx-auto"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            image={product.thumbnail}
                            thumbnail2={product.thumbnail2}
                            name={product.name}
                            price={product.price}
                            buttonStyle={buttonStyle}
                            priceStyle={priceStyle}
                            nameStyle={nameStyle}
                            nameHoverStyle={nameHoverStyle}
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default RecommendedItems;