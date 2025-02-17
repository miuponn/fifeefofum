import { motion } from "framer-motion";
import InstagramGrid from "../components/IntroSection/InstagramFeed";
import IntroText from "./IntroSection/IntroText";

const fadeInFromLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInFromRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } }
};

const IntroSection = () => {
    return (
        <section className="bg-white w-full py-12 px-4 md:px-12 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
                {/* Instagram Grid (Left on Desktop, Top on Mobile) */}
                <motion.div
                    className="w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInFromLeft}
                >
                    <InstagramGrid />
                </motion.div>

                {/* Intro Text (Right on Desktop, Below on Mobile) */}
                <motion.div
                    className="w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInFromRight}
                >
                    <IntroText />
                </motion.div>
            </div>
        </section>
    );
};

export default IntroSection;