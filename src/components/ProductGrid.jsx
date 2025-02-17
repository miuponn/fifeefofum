import { useState } from "react";
import ProductCard from "./ProductCard";
import productsData from "../data/productsData";

const ProductGrid = () => {
    // State for sorting (static for now)
    const [sortOption, setSortOption] = useState("Bestselling");

    // Static sorting handler (to be expanded later)
    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    // Pagination (static for now)
    const productsPerPage = 16; 
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(productsData.length / productsPerPage);

    const displayedProducts = productsData.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    return (
        <section className="w-full flex flex-col">
            {/* Sorting Options */}
            <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 py-3">
                <span className="text-sm text-dark_pink_secondary">
                    {productsData.length} Products
                </span>

                <select
                    className="border border-pink rounded-md px-3 py-2 text-sm"
                    value={sortOption}
                    onChange={handleSortChange}
                >
                    <option value="Bestselling">Bestselling</option>
                    <option value="Alphabetical">Alphabetical, A-Z</option>
                    <option value="PriceLowHigh">Price, Low to High</option>
                    <option value="PriceHighLow">Price, High to Low</option>
                </select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-6 md:px-8">
                {displayedProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={product.thumbnail}
                        name={product.name}
                        price={product.price}
                        buttonStyle="px-4 py-2 bg-white border border-pink text-dark_pink_secondary hover:bg-pink hover:text-white"
                        priceStyle="text-sm text-dark_pink_secondary"
                        nameStyle="text-sm md:text-md text-dark_pink font-bold"
                    />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-3 mt-6">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className={`px-3 py-2 text-sm ${
                        currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-dark_pink_secondary hover:underline"
                    }`}
                >
                    Prev
                </button>
                
                <span className="text-dark_pink_secondary">{currentPage} / {totalPages}</span>

                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-2 text-sm ${
                        currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-dark_pink_secondary hover:underline"
                    }`}
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default ProductGrid;