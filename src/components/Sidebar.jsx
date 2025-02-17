import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import lovebirdsImage from "../assets/images/lovebirds.png";

const Sidebar = () => {
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [availabilityOpen, setAvailabilityOpen] = useState(false);

    return (
        <aside className="w-full md:w-1/4 bg-transparent text-dark_pink_secondary px-4 md:px-6 lg:px-8 py-6 md:py-8 flex flex-col justify-between min-h-screen">
            <div>
                {/* Breadcrumb Navigation */}
                <nav className="text-sm font-poppins font-medium text-dark_pink">
                    <Link to="/" className="hover:underline text-red-500">Home</Link> 
                    <span className="text-red-500 mx-1">&gt;</span> 
                    <span className="text-dark_pink">Products</span>
                </nav>

                {/* Section Header */}
                <h2 className="text-xl md:text-2xl font-chewie font-extrabold text-dark_pink mt-6">Products</h2>

                {/* Browse By Filters */}
                <div className="mt-6">
                    <h3 className="text-sm font-poppins font-medium uppercase text-[#E57485] mt-6">Browse By</h3>

                    {/* Category Dropdown */}
                    <div className="mt-4">
                        <button
                            className="w-full flex justify-between items-center text-[#E57485] font-poppins text-sm font-medium py-2 border-b border-pink cursor-pointer"
                            onClick={() => setCategoryOpen(!categoryOpen)}
                        >
                            Category
                            {categoryOpen ? <FiChevronUp /> : <FiChevronDown />}
                        </button>
                        {categoryOpen && (
                            <ul className="mt-2 space-y-2 text-xs font-poppins font-medium uppercase text-[#E57485]">
                                <li className="flex items-center gap-2 hover:underline cursor-pointer">
                                    <input type="checkbox" className="accent-[#E57485]" />
                                    Phone Charms
                                </li>
                                <li className="flex items-center gap-2 hover:underline cursor-pointer">
                                    <input type="checkbox" className="accent-[#E57485]" />
                                    Stickers
                                </li>
                                <li className="flex items-center gap-2 hover:underline cursor-pointer">
                                    <input type="checkbox" className="accent-[#E57485]" />
                                    Keychains
                                </li>
                                <li className="flex items-center gap-2 hover:underline cursor-pointer">
                                    <input type="checkbox" className="accent-[#E57485]" />
                                    Jewelry
                                </li>
                                <li className="flex items-center gap-2 hover:underline cursor-pointer">
                                    <input type="checkbox" className="accent-[#E57485]" />
                                    Accessories
                                </li>
                            </ul>
                        )}
                    </div>

                    {/* Availability Dropdown */}
                    <div className="mt-4">
                        <button
                            className="w-full flex justify-between items-center text-[#E57485] font-poppins text-sm font-medium py-2 border-b border-pink cursor-pointer"
                            onClick={() => setAvailabilityOpen(!availabilityOpen)}
                        >
                            Availability
                            {availabilityOpen ? <FiChevronUp /> : <FiChevronDown />}
                        </button>
                        {availabilityOpen && (
                            <ul className="mt-2 space-y-2 text-xs font-poppins font-medium uppercase text-[#E57485]">
                                <li className="flex items-center gap-2 hover:underline cursor-pointer">
                                    <input type="checkbox" className="accent-[#E57485]" />
                                    In Stock
                                </li>
                                <li className="flex items-center gap-2 hover:underline cursor-pointer">
                                    <input type="checkbox" className="accent-[#E57485]" />
                                    Out of Stock
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            {/* Lovebirds Image at Bottom */}
            <div className="flex justify-center mt-12 md:mt-16">
                <img 
                    src={lovebirdsImage} 
                    alt="Lovebirds" 
                    className="w-28 md:w-32 lg:w-40 object-contain"
                />
            </div>
        </aside>
    );
};

export default Sidebar;