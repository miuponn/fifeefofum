import productsData from "../data/productsData.js"; // Static source for now
import ProductCard from "./ProductCard.jsx";
import gridPattern from '../assets/grid-pattern.svg';

const FeaturedItems = () => {
    const displayedProducts = productsData.slice(0, 4);

    console.log(displayedProducts); // Log the displayed products

    // Product Card styles
    const buttonStyle = "mt-2 sm:mt-3 px-4 sm:px-6 py-2 sm:py-3 bg-button_pink text-white font-poppins text-xs sm:text-sm md:text-lg font-normal hover:bg-white hover:text-button_pink";
    const priceStyle = "text-xs sm:text-sm md:text-md text-dark_green font-urbanist";
    const nameStyle = "text-sm sm:text-base md:text-lg font-urbanist text-dark_green";

    return (
        <section className="relative bg-[#DCEDC1] py-10 px-4 sm:px-6 md:px-12 lg:px-20">
            {/* Grid Overlay */}
            <div
                style={{ backgroundImage: `url(${gridPattern})` }}
                className="absolute inset-0 bg-repeat opacity-50 pointer-events-none bg-cover"
            ></div>

            {/* Section Header */}
            <h2 className="relative text-dark_green text-xl sm:text-2xl md:text-3xl font-chewie font-semibold text-center lg:text-left mb-5 md:mb-8">
                ✦ shop our bestsellers! ✦
            </h2>

            {/* Product Grid */}
            <div className="relative grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {displayedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.thumbnail}
                        name={product.name}
                        price={product.price}
                        buttonStyle={buttonStyle}
                        priceStyle={priceStyle}
                        nameStyle={nameStyle}
                    />
                ))}
            </div>
        </section>
    );
};

export default FeaturedItems;