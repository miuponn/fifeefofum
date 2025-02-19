import { motion } from "framer-motion";
import InstagramFeed from "./IntroSection/InstagramFeed";
import IntroText from "./IntroSection/IntroText";

const IntroSection = () => {
    return (
        <section className="bg-white w-full py-6 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
                    {/* Instagram Grid */}
                    <motion.div
                        className="relative w-full"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <InstagramFeed />
                    </motion.div>

                    {/* Intro Text */}
                    <motion.div
                        className="relative w-full flex justify-center md:justify-start"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <IntroText />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;