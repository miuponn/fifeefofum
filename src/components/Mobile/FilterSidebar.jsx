import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiX } from "react-icons/fi";

const FilterSidebar = ({ isOpen, closeFilter }) => {
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [availabilityOpen, setAvailabilityOpen] = useState(false);

    return (
        <div className={`fixed inset-0 bg-white z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 shadow-lg`}>
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
                <h2 className="text-[#E57485] text-lg font-chewie font-bold">Filters</h2>
                <button onClick={closeFilter}>
                    <FiX className="text-2xl text-[#E57485]" />
                </button>
            </div>

            {/* Filter Options */}
            <div className="px-6 py-4">
                {/* Category Dropdown */}
                <div>
                    <button
                        className="w-full flex justify-between items-center text-[#E57485] font-poppins text-sm font-medium py-2 border-b border-pink"
                        onClick={() => setCategoryOpen(!categoryOpen)}
                    >
                        Product Type
                        {categoryOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {categoryOpen && (
                        <ul className="mt-2 space-y-2 text-xs font-poppins font-medium uppercase text-[#E57485]">
                            <li className="flex justify-between items-center hover:underline cursor-pointer">
                                Phone Charms <input type="checkbox" className="ml-2" />
                            </li>
                            <li className="flex justify-between items-center hover:underline cursor-pointer">
                                Stickers <input type="checkbox" className="ml-2" />
                            </li>
                            <li className="flex justify-between items-center hover:underline cursor-pointer">
                                Keychains <input type="checkbox" className="ml-2" />
                            </li>
                            <li className="flex justify-between items-center hover:underline cursor-pointer">
                                Jewelry <input type="checkbox" className="ml-2" />
                            </li>
                            <li className="flex justify-between items-center hover:underline cursor-pointer">
                                Accessories <input type="checkbox" className="ml-2" />
                            </li>
                        </ul>
                    )}
                </div>

                {/* Availability Dropdown */}
                <div className="mt-4">
                    <button
                        className="w-full flex justify-between items-center text-[#E57485] font-poppins text-sm font-medium py-2 border-b border-pink"
                        onClick={() => setAvailabilityOpen(!availabilityOpen)}
                    >
                        Availability
                        {availabilityOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>
                    {availabilityOpen && (
                        <ul className="mt-2 space-y-2 text-xs font-poppins font-medium uppercase text-[#E57485]">
                            <li className="flex justify-between items-center hover:underline cursor-pointer">
                                In Stock <input type="checkbox" className="ml-2" />
                            </li>
                            <li className="flex justify-between items-center hover:underline cursor-pointer">
                                Out of Stock <input type="checkbox" className="ml-2" />
                            </li>
                        </ul>
                    )}
                </div>
            </div>

            {/* Clear All Button */}
            <div className="px-6 py-4 border-t border-gray-200">
                <button className="text-[#E57485] font-poppins text-sm uppercase font-medium hover:underline">
                    Clear All
                </button>
            </div>
        </div>
    );
};

export default FilterSidebar;