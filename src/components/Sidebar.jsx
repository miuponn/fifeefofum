import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronUp } from 'react-icons/fi';
import lovebirdsImage from '../assets/images/lovebirds.png';

const Sidebar = ({ backgroundColor }) => {
    const [categoryOpen, setCategoryOpen] = useState(false);
    const [availabilityOpen, setAvailabilityOpen] = useState(false);

    const CustomCheckbox = ({ label }) => (
        <li className="flex items-center gap-2 cursor-pointer">
            <div 
                className="w-4 h-4 border border-button_pink rounded cursor-pointer 
                    flex items-center justify-center transition-colors duration-300
                    hover:border-dark_pink"
            >
                {/* Checkbox will be controlled by parent state */}
                {false && (
                    <svg 
                        className="w-3 h-3 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M5 13l4 4L19 7" 
                        />
                    </svg>
                )}
            </div>
            <span className="font-poppins font-medium uppercase text-dark_pink text-xs hover:underline">
                {label}
            </span>
        </li>
    );

    return (
        <aside className={`bg-${backgroundColor} p-4 rounded-lg`}>
            <div className="px-4 md:px-6 lg:px-8 py-6 md:py-8 flex-grow">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-chewie font-extrabold text-dark_pink mb-6">
                    Products
                </h2>

                {/* Navigation */}
                <nav className="text-sm font-poppins font-light text-dark_pink mb-6">
                    <Link to="/" className="hover:underline text-[#AF001A]">Home</Link>
                    <span className="text-red-500 mx-3">&gt;</span>
                    <span className="text-dark_pink">Products</span>
                </nav>

                {/* Filters Section */}
                <div className="mt-6 ">
                    <h3 className="text-md font-poppins font-medium uppercase text-[#E57485]">
                        Browse By
                    </h3>

                    {/* Category Filter */}
                    <div className="mt-6 space-y-3">
                        <button
                            onClick={() => setCategoryOpen(!categoryOpen)}
                            className="w-full flex justify-between items-center uppercase text-[#E57485] font-poppins text-sm font-medium cursor-pointer"
                        >
                            Category
                            <FiChevronUp className={`transform transition-transform duration-300 ${!categoryOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`transform transition-all duration-300 ease-in-out overflow-hidden ${categoryOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <ul className="mt-2 mb-6 space-y-2">
                                {["Phone Charms", "Stickers", "Keychains", "Jewelry", "Accessories"].map((category) => (
                                    <CustomCheckbox key={category} label={category} />
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Availability Filter */}
                    <div className="space-y-3">
                        <button
                            onClick={() => setAvailabilityOpen(!availabilityOpen)}
                            className="w-full flex justify-between items-center uppercase text-[#E57485] font-poppins text-sm font-medium cursor-pointer"
                        >
                            Availability
                            <FiChevronUp className={`transform transition-transform duration-300 ${!availabilityOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`transform transition-all duration-300 ease-in-out overflow-hidden ${availabilityOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            <ul className="mt-2 mb-6 space-y-2 text-xs font-poppins font-medium uppercase text-dark_pink">
                                <li className="flex items-center gap-2 hover:underline cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="w-4 h-4 border-2 border-[#E57485] rounded"
                                    />
                                    In Stock
                                </li>
                                <li className="flex items-center gap-2 hover:underline cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        className="w-4 h-4 border-2 border-[#E57485] rounded"
                                    />
                                    Out of Stock
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lovebirds Image */}
            <div className="px-4 md:px-6 lg:px-8 py-6 flex justify-center">
                <img 
                    src={lovebirdsImage} 
                    alt="Lovebirds"
                    className="h-[160px] md:h-[180px] lg:h-[200px] w-auto object-contain"
                />
            </div>

            <style jsx>{`
                input[type="checkbox"] {
                    appearance: none;
                    -webkit-appearance: none;
                    width: 16px;
                    height: 16px;
                    border: 1px solid #E57485;
                    border-radius: 3px;
                    background-color: white;
                    display: inline-block;
                    position: relative;
                    cursor: pointer;
                }

                input[type="checkbox"]:checked {
                    background-color: white;
                }

                input[type="checkbox"]:checked::after {
                    content: '✓';
                    font-size: 12px;
                    color:FFB8C2;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            `}</style>
        </aside>
    );
};

export default Sidebar;