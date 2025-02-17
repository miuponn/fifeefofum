import HeroText from "./Hero/HeroText";
import birdLogo from "../assets/images/logo-bird.png";
import ImageSlider from "./Hero/ImageSlider";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[75vh] flex items-center justify-center overflow-hidden">
            {/* Image Slider */}
            <div className="absolute inset-0 z-10">
                <ImageSlider />
            </div>
            
            {/* Two Columns Layout */}
            <div className="relative z-20 w-full h-full flex items-center justify-between px-4 md:px-8 lg:px-12">
                {/* Left Column: Floating Logo */}
                <div className="flex items-center justify-center h-full w-1/2 pr-2 md:pr-4 lg:pr-6">
                    <motion.img
                        src={birdLogo}
                        alt="Fifeefofum Logo"
                        className="w-[70%] h-auto"
                        whileHover={{ y: -10 }}
                        whileTap={{ rotate: 360 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </div>

                {/* Right Column: Centered Hero Text */}
                <div className="flex flex-col items-center text-center lg:items-end lg:text-right w-1/2 pr-4 md:pr-8 lg:pr-12">
                    <HeroText />
                </div>
            </div>
        </section>
    );    
};

export default Hero;