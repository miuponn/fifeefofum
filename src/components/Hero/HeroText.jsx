import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroText = () => {
    const fullText = "a little world of whimsy.";
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timer = setTimeout(() => {
                setDisplayText((prev) => prev + fullText[index]);
                setIndex(index + 1);
            }, 80); // Typing speed
            return () => clearTimeout(timer);
        }
    }, [index]);

    const twinkleAnimation = {
        scale: [1, 1.2, 1],
        opacity: [0.3, 1, 0.3],
        transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    };

    return (
        <div className="absolute flex flex-col items-center justify-center text-center text-white">
            {/* Twinkling Stars */}
            <motion.span
                className="absolute top-[-20px] left-[-35px] text-[1.5rem] text-white"
                animate={twinkleAnimation}
            >
                ✦
            </motion.span>
            <motion.span
                className="absolute bottom-[-15px] right-[-30px] text-[1.25rem] text-white"
                animate={twinkleAnimation}
            >
                ✦
            </motion.span>

            {/* Typing Text */}
            <p className="text-3xl md:text-5xl font-chewie drop-shadow-custom leading-snug">
                {displayText}
                <span className="inline-block w-2 h-6 bg-white animate-pulse ml-1"></span> {/* Blinking Cursor */}
            </p>

            {/* SHOP ALL Button */}
            <motion.a
                href="/products"
                className="mt-6 px-6 py-3 bg-white text-lg font-poppins font-semibold rounded-full shadow-md transition-all duration-300"
                style={{ color: "#FF91A1" }}
                whileHover={{
                    scale: 1.07,
                    boxShadow: "0px 5px 15px rgba(255, 145, 161, 0.6)", // Soft glow effect
                    transition: { repeat: Infinity, repeatType: "reverse", duration: 1.2 } // Gentle pulsing effect
                }}
                whileTap={{
                    scale: 0.92,
                    backgroundColor: "#FF91A1", 
                    color: "#FFFFFF" // White text on click
                }} // Inverse colors on click
            >
                SHOP ALL
            </motion.a>
        </div>
    );
};

export default HeroText;