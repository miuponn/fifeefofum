import React from 'react';

const ContactForm = () => {
    return (
        <form className="w-full max-w-2xl mx-auto bg-transparent">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {/* Name Input */}
                <div className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-2 bg-white border border-[#4A9BFF] rounded-sm 
                        font-poppins text-blue placeholder-blue text-sm focus:outline-none"
                    />
                </div>

                {/* Email Input */}
                <div className="flex flex-col">
                    <input
                        type="email"
                        placeholder="Email*"
                        className="w-full px-4 py-2 bg-white border border-[#4A9BFF] rounded-sm 
                        font-poppins text-blue placeholder-blue text-sm focus:outline-none"
                    />
                </div>
            </div>

            {/* Phone Input */}
            <div className="mb-4">
                <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-2 bg-white border border-[#4A9BFF] rounded-sm 
                    font-poppins text-blue placeholder-blue text-sm focus:outline-none"
                />
            </div>

            {/* Subject Input */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-2 bg-white border border-[#4A9BFF] rounded-sm 
                    font-poppins text-blue placeholder-blue text-sm focus:outline-none"
                />
            </div>

            {/* Message Input */}
            <div className="mb-">
                <textarea
                    placeholder="Message..."
                    rows="8"
                    className="w-full px-4 py-2 bg-white border border-[#4A9BFF] rounded-sm 
                    font-poppins text-blue placeholder-blue text-sm focus:outline-none resize-none"
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full py-3 mt-4 bg-button_pink text-white rounded-md font-poppins font-medium
                    hover:bg-white hover:text-button_pink border border-transparent
                    hover:border-button_pink transition-all duration-300"
            >
                SUBMIT
            </button>
        </form>
    );
};

export default ContactForm;