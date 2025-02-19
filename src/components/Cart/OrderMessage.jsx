import { useState } from 'react';

const OrderMessage = () => {
    const [isGiftWrap, setIsGiftWrap] = useState(false);
    
    return (
        <div className="space-y-4">
            {/* Gift Wrap Option */}
            <div className="flex items-center gap-3 md:gap-4">
                <div 
                    className={`w-4 h-4 border border-button_pink rounded cursor-pointer flex items-center justify-center transition-colors duration-300
                        ${isGiftWrap ? 'bg-button_pink' : 'bg-transparent'}`}
                    onClick={() => setIsGiftWrap(!isGiftWrap)}
                >
                    {isGiftWrap && (
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
                <span className="font-poppins font-regular text-text-dark_pink_secondary text-xs">
                    For $10.00, wrap this order (add gift message below)
                </span>
            </div>

            {/* Special Instructions */}
            <div className="space-y-2">
                <label 
                    htmlFor="special-instructions" 
                    className="block font-poppins font-regular text-pink text-sm"
                >
                    Order special instructions
                </label>
                <textarea
                    id="special-instructions"
                    rows="3"
                    className="w-full px-3 py-2 bg-white border border-dark_pink_secondary rounded-sm 
                        font-poppins text-dark_pink text-sm resize-none focus:outline-none 
                        focus:ring-1 focus:ring-dark_pink_secondary"
                />
            </div>
        </div>
    );
};

export default OrderMessage;