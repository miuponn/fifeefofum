import { useState, useEffect, useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import currenciesData from "../../data/currencies.json";

const CurrencySelector = () => {
    const [selectedCurrency, setSelectedCurrency] = useState("CAD"); // Default CAD
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // Ref for detecting outside clicks

    // Toggle dropdown visibility
    const toggleDropdown = () => setIsOpen(!isOpen);

    // Handle currency selection
    const handleSelect = (currencyCode) => {
        setSelectedCurrency(currencyCode);
        setIsOpen(false); // Close dropdown after selection
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className="relative inline-block text-left">
            {/* Selected currency display */}
            <button
                onClick={toggleDropdown}
                className="px-4 py-2 bg-white flex items-center justify-between w-28
                text-dark_pink font-medium transition-all duration-300 ease-in-out
                hover:scale-105 hover:underline hover:text-dark_pink font-poppins"
            >
                {selectedCurrency} {currenciesData[selectedCurrency]?.symbol_native} {/* CAD $ */}
                {isOpen ? (
                    <FiChevronUp className="ml-2 text-button_pink transition-transform duration-300 ease-in-out" />
                ) : (
                    <FiChevronDown className="ml-2 text-button_pink transition-transform duration-300 ease-in-out" />
                )}
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-pink rounded-md max-h-60 overflow-auto shadow-lg">
                    {Object.entries(currenciesData).map(([code, data]) => (
                        <button
                            key={code}
                            onClick={() => handleSelect(code)}
                            className="w-full text-left px-4 py-2 hover:text-dark_pink flex justify-between items-center text-dark_pink 
                                font-normal font-poppins"
                        >
                            <span>{code} {data.symbol_native} | {data.name_plural}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CurrencySelector;