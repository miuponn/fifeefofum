import React from 'react';
import { motion } from "framer-motion";

const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const IntroText = () => {
    return (
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start md:items-start text-left md:text-left text-dark_pink_secondary px-6 md:px-12 lg:px-16">
            {/* Title */}
            <h2 className="text-dark_pink text-lg md:text-xl lg:text-2xl font-chewie font-extrabold">
                Welcome to Fifeefofum!
            </h2>

            {/* Paragraph */}
            <p className="text-dark_pink text-sm md:text-base lg:text-lg font-poppins font-light mt-3 leading-relaxed">
                Step into a world of whimsy with sparkly trinkets, anime art, and cute animal stationary! Each piece is made with love and nostalgia just for you. 💫 
                <br /><br />
                The collection is always evolving, so be sure to check back for new surprises! Want to stay in the loop? Join the adventure and follow along for my latest updates and releases.
                <br /><br />
                Thank you for visiting my shop!
            </p>

            {/* SHOP NOW Button */}
            <motion.a
                href="/products"
                className="mt-6 px-6 py-3 bg-peach text-white text-lg font-poppins font-semibold rounded-full shadow-md transition-all duration-300"
                whileHover={{
                    scale: 1.05,
                    backgroundColor: "#FFFFFF",
                    color: "#FF91A1",
                    borderColor: "#FF91A1",
                    borderWidth: "1px",
                    boxShadow: "0px 4px 10px rgba(255, 182, 193, 0.5)", // Soft glow effect
                    transition: { repeat: Infinity, repeatType: "reverse", duration: 1.2 } // Gentle pulsing effect
                }}
                whileTap={{
                    scale: 1.05,
                    backgroundColor: "#FFFFFF",
                    color: "#FF91A1",
                    borderColor: "#FF91A1",
                    borderWidth: "1px",
                    boxShadow: "0px 4px 10px rgba(255, 182, 193, 0.5)", // Soft glow effect
                }} // Same styles as hover
            >
                SHOP NOW
            </motion.a>
        </div>
    );
};

export default IntroText;