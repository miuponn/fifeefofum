// src/components/Mobile/HamburgerMenu.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiMenu, FiX, FiPlus, FiMinus } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import CurrencySelector from "../Header/CurrencySelector";
import EtsyIcon from '../../assets/images/etsy.svg';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleShop = () => setIsShopOpen(!isShopOpen);

    return (
        <div className="md:hidden">
            {/* Hamburger Icon */}
            <button 
                onClick={toggleMenu}
                className="p-2 text-accent_pink hover:scale-105 transition duration-300"
            >
                {isOpen ? (
                    <FiX className="h-6 w-6" />
                ) : (
                    <FiMenu className="h-6 w-6" />
                )}
            </button>

            {/* Slide-out Menu */}
            <div 
                className={`fixed top-0 right-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                } z-50`}
            >
                {/* Close Button */}
                <button 
                    onClick={toggleMenu}
                    className="absolute top-4 right-4 text-dark_pink_secondary"
                >
                    <FiX className="h-6 w-6" />
                </button>

                {/* Navigation Links */}
                <nav className="mt-16 px-6">
                    <ul className="space-y-4 font-poppins text-dark_pink_secondary">
                        <li>
                            <Link 
                                to="/" 
                                className="block py-2 hover:text-peach transition duration-300"
                                onClick={toggleMenu}
                            >
                                Home
                            </Link>
                        </li>
                        
                        {/* Shop Dropdown */}
                        <li>
                            <button 
                                onClick={toggleShop}
                                className="w-full flex items-center justify-between py-2 hover:text-peach transition duration-300"
                            >
                                Shop
                                {isShopOpen ? (
                                    <FiMinus className="text-dark_pink" />
                                ) : (
                                    <FiPlus className="text-dark_pink" />
                                )}
                            </button>
                            
                            {/* Shop Submenu */}
                            {isShopOpen && (
                                <ul className="pl-4 mt-2 space-y-2">
                                    <li className="bg-[#FFF7F7] rounded-md">
                                        <Link 
                                            to="/products"
                                            className="block px-4 py-2 text-dark_pink_secondary hover:text-peach transition duration-300"
                                            onClick={toggleMenu}
                                        >
                                            Shop All
                                        </Link>
                                    </li>
                                    {["Bracelets", "Keychains", "Rings", "Necklaces", "Stickers"].map((category) => (
                                        <li key={category}>
                                            <Link 
                                                to="#"
                                                className="block px-4 py-2 text-dark_pink_secondary hover:text-peach transition duration-300"
                                                onClick={toggleMenu}
                                            >
                                                {category}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li>
                            <Link 
                                to="/about"
                                className="block py-2 hover:text-peach transition duration-300"
                                onClick={toggleMenu}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/faqs"
                                className="block py-2 hover:text-peach transition duration-300"
                                onClick={toggleMenu}
                            >
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/contact"
                                className="block py-2 hover:text-peach transition duration-300"
                                onClick={toggleMenu}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Bottom Section */}
                <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
                    {/* User Login */}
                    <div className="flex items-center gap-2 mb-6 text-dark_pink_secondary">
                        <FiUser className="h-5 w-5" />
                        <span className="text-sm font-poppins">Log in</span>
                    </div>

                    {/* Currency Selector */}
                    <div className="mb-6 scale-90 origin-left">
                        <CurrencySelector />
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-6 text-dark_pink">
                        <a 
                            href="https://www.instagram.com/fifeefofum"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-105 transition duration-300"
                        >
                            <FiInstagram className="h-5 w-5" />
                        </a>
                        <a 
                            href="https://www.tiktok.com/@fifeefofum"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-105 transition duration-300"
                        >
                            <SiTiktok className="h-5 w-5" />
                        </a>
                        <a 
                            href="https://www.etsy.com/shop/fifeefofum"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-105 transition duration-300"
                        >
                            <img src={EtsyIcon} alt="Etsy" className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleMenu}
                />
            )}
        </div>
    );
};

export default HamburgerMenu;