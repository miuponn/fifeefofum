import ImageSlider from "./Hero/ImageSlider";
import HeroText from "./Hero/HeroText";
import birdLogo from "../../assets/logo-bird.png";

const Hero = () => {
    return (
        <section className="relative w-full h-[60vh] md:h-[75vh] lg:h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image Slider */}
            <ImageSlider />
            
            {/* Floating Logo */}
            <img
                src={birdLogo}
                alt="Fifeefofum Logo"
                className="absolute left-[10%] md:left-[15%] top-[40%] transform -translate-y-1/2 w-32 md:w-40 lg:w-48 xl:w-56 z-20"
            />

            {/* Centered Hero Text */}
            <div className="absolute flex flex-col items-center text-center z-20 lg:right-[10%] md:right-[5%]">
                <HeroText />
            </div>
        </section>
    );    
};

export default Hero;