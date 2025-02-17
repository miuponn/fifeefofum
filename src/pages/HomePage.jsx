import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedItems from "../components/FeaturedItems";
import IntroSection from "../components/IntroSection";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
      <div className="w-full min-h-screen flex flex-col">
        {/* Header */}
        <Header />
  
        {/* Hero Section */}
        <Hero />
  
        {/* Featured Items Section */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-[1400px] px-4 md:px-12">
            <FeaturedItems />
          </div>
        </section>
  
        {/* Instagram + Intro Section */}
        <section className="w-full flex justify-center bg-white py-12 px-4 md:px-12 lg:px-20">
          <div className="w-full max-w-[1400px] flex flex-col md:flex-row gap-12">
            <IntroSection />
          </div>
        </section>
  
        {/* Footer */}
        <Footer />
      </div>
    );
  };
  
export default HomePage;