import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiUser, FiShoppingBag, FiChevronDown, FiChevronUp } from "react-icons/fi";

const NavLinks = () => {
    const [isShopOpen, setIsShopOpen] = useState(false);
    const dropdownRef = useRef(null); // Ref for detecting outside clicks

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsShopOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-5 text-dark_pink_secondary font-normal font-poppins">
            <Link to="/" className="hover:text-peach transition duration-300 text-xs sm:text-sm md:text-sm lg:text-base hover:scale-105">
                Home
            </Link>

            {/* Shop Dropdown */}
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsShopOpen(!isShopOpen)}
                    className="flex items-center gap-1 relative transition duration-300 ease-in-out group text-xs sm:text-sm md:text-sm lg:text-base hover:scale-105"
                    aria-haspopup="true"
                    aria-expanded={isShopOpen}
                >
                    <span className="group-hover:text-peach relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-peach after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                        Shop
                    </span>
                    {isShopOpen ? (
                        <FiChevronUp className="ml-1 text-button_pink transition-transform duration-300" />
                    ) : (
                        <FiChevronDown className="ml-1 text-button_pink transition-transform duration-300" />
                    )}
                </button>
                {isShopOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white border border-pink rounded-md shadow-md" role="menu">
                        {["Shop All", "Bracelets", "Keychains", "Rings", "Necklaces", "Stickers"].map((item) => (
                            <Link key={item} to="#" className="block px-4 py-2 text-dark_pink_secondary hover:text-peach transition duration-300 text-xs sm:text-sm md:text-sm lg:text-base hover:scale-105" role="menuitem">
                                {item}
                            </Link>
                        ))}
                    </div>
                )}
            </div>

            <Link to="/faqs" className="hover:text-peach transition duration-300 text-xs sm:text-sm md:text-sm lg:text-base hover:scale-105">
                FAQs
            </Link>
            <Link to="/about" className="hover:text-peach transition duration-300 text-xs sm:text-sm md:text-sm lg:text-base hover:scale-105">
                About
            </Link>
            <Link to="/contact" className="hover:text-peach transition duration-300 text-xs sm:text-sm md:text-sm lg:text-base hover:scale-105">
                Contact
            </Link>

            {/* User Icon (Placeholder) */}
            <button className="hover:scale-105 transition duration-300">
                <FiUser className="text-xl" />
            </button>

            {/* Cart Icon (Opens Modal) */}
            <button className="hover:scale-105 transition duration-300">
                <FiShoppingBag className="text-xl" />
            </button>
        </div>
    );
};

export default NavLinks;