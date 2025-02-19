import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";

const FilterSidebar = ({ isOpen, closeFilter }) => {
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [availabilityOpen, setAvailabilityOpen] = useState(false);

    return (
        <>
            <div className={`fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            } z-50 shadow-lg`}>
                {/* Header */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-pink">
                    <h2 className="text-dark_pink_secondary text-base font-poppins font-medium">Filters</h2>
                    <button onClick={closeFilter} className="text-dark_pink_secondary">
                        <FiX className="h-6 w-6" />
                    </button>
                </div>

                {/* Filter Options */}
                <div className="px-6 py-4">
                    {/* Category Dropdown */}
                    <div className="mb-6">
                        <button
                            className="w-full flex justify-between items-center text-dark_pink_secondary font-poppins text-sm font-medium py-2 border-b border-pink"
                            onClick={() => setCategoryOpen(!categoryOpen)}
                        >
                            Category
                            {categoryOpen ? <FiChevronUp /> : <FiChevronDown />}
                        </button>
                        {categoryOpen && (
                            <ul className="mt-2 space-y-2 text-sm font-poppins text-dark_pink_secondary">
                                {["Phone Charms", "Stickers", "Keychains", "Jewelry", "Accessories"].map((category) => (
                                    <li key={category} className="flex justify-between items-center hover:text-peach transition duration-300 cursor-pointer">
                                        {category} <input type="checkbox" className="accent-dark_pink" />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Availability Dropdown */}
                    <div className="mb-6">
                        <button
                            className="w-full flex justify-between items-center text-dark_pink_secondary font-poppins text-sm font-medium py-2 border-b border-pink"
                            onClick={() => setAvailabilityOpen(!availabilityOpen)}
                        >
                            Availability
                            {availabilityOpen ? <FiChevronUp /> : <FiChevronDown />}
                        </button>
                        {availabilityOpen && (
                            <ul className="mt-2 space-y-2 text-sm font-poppins text-dark_pink_secondary">
                                <li className="flex justify-between items-center hover:text-peach transition duration-300 cursor-pointer">
                                    In Stock <input type="checkbox" className="accent-dark_pink" />
                                </li>
                                <li className="flex justify-between items-center hover:text-peach transition duration-300 cursor-pointer">
                                    Out of Stock <input type="checkbox" className="accent-dark_pink" />
                                </li>
                            </ul>
                        )}
                    </div>
                </div>

                {/* Bottom Buttons */}
                <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-white border-t border-pink">
                    <div className="flex gap-4">
                        <button 
                            onClick={closeFilter}
                            className="flex-1 py-2 px-4 border border-dark_pink text-dark_pink font-poppins text-sm font-medium rounded-md hover:bg-dark_pink hover:text-white transition-all duration-300"
                        >
                            Clear All
                        </button>
                        <button 
                            onClick={() => closeFilter()}
                            className="flex-1 py-2 px-4 bg-dark_pink text-white font-poppins text-sm font-medium rounded-md hover:bg-white hover:text-dark_pink hover:border-dark_pink border border-transparent transition-all duration-300"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={closeFilter}
                />
            )}
        </>
    );
};

export default FilterSidebar;