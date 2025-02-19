// src/components/Mobile/Header.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiX, FiShoppingBag } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';
import AnnouncementBar from '../Header/AnnouncementBar';
import HamburgerMenu from './HamburgerMenu';
import Fifeefofum from '../../assets/images/Fifeefofum.svg';

const MobileHeader = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const { setIsCartOpen, getCartItemsCount } = useCart();
    const itemsCount = getCartItemsCount();

    return (
        <header className="w-full relative z-50 md:hidden">
            {/* Announcement Bar - Mobile Sized */}
            <div className="text-[10px] sm:text-xs">
                <AnnouncementBar />
            </div>

            {/* Main Navigation Bar */}
            <nav className="bg-white py-2 px-4 flex items-center justify-between relative">
                {/* Left: Hamburger Menu */}
                <HamburgerMenu />

                {/* Center: Logo */}
                <Link to="/" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img 
                        src={Fifeefofum} 
                        alt="Fifeefofum Logo" 
                        className="h-6 sm:h-7"
                    />
                </Link>

                {/* Right: Search and Cart Icons */}
                <div className="flex items-center gap-4">
                    <button 
                        onClick={() => setIsSearchOpen(true)}
                        className="text-dark_pink_secondary hover:scale-105 transition duration-300"
                    >
                        <FiSearch className="text-xl" />
                    </button>
                    {/* Cart Button */}
                    <button 
                        onClick={() => setIsCartOpen(true)}
                        className="relative text-dark_pink_secondary hover:scale-105 transition duration-300"
                    >
                        <FiShoppingBag className="text-xl" />
                        {itemsCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-button_pink text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center">
                                {itemsCount}
                            </span>
                        )}
                    </button>
                </div>
            </nav>

            {/* Slide-in Search Bar */}
            <div 
                className={`absolute top-0 left-0 w-full bg-white transform transition-transform duration-300 ease-in-out ${
                    isSearchOpen ? 'translate-y-0' : '-translate-y-full'
                } shadow-md z-50`}
            >
                <div className="flex items-center p-4 border-b border-[#F9E1E1]">
                    <button 
                        onClick={() => setIsSearchOpen(false)}
                        className="text-accent_pink mr-4"
                    >
                        <FiX className="text-xl" />
                    </button>
                    <input
                        type="text"
                        placeholder="search..."
                        className="flex-1 bg-transparent border-none outline-none text-dark_pink_secondary placeholder-[#F9E1E1] font-viucobacoba text-lg"
                    />
                    <FiSearch className="text-[#F9E1E1] text-lg" />
                </div>
            </div>

            {/* Overlay for Search */}
            {isSearchOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setIsSearchOpen(false)}
                />
            )}
        </header>
    );
};

export default MobileHeader;