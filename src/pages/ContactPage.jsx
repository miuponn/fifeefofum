import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import paulieAndMo from '../assets/images/paulie-and-mo.png';

const ContactPage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            
            <main className="flex-grow bg-[#E8F7D1] flex items-center pt-10 md:pt-12 lg:pt-16">
                <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12 relative">
                    {/* Header */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-chewie font-bold text-dark_green text-center">
                        Get in touch!
                    </h1>

                    {/* Description Text */}
                    <div className="text-center py-6 md:py-8 space-y-4">
                        <p className="text-dark_green font-poppins font-light text-sm md:text-base">
                            If you have questions or any work inquiries, please feel free to send me an email through this form.
                        </p>
                        <p className="text-dark_green font-poppins font-light text-sm md:text-base">
                            For tracked order inquiries, please provide your <span className="font-normal">order number</span> and <span className="font-normal">full shipping address</span> in your email to quicken the process. For more info regarding orders, please check out my Shipping Policy, Refund Policy and FAQs pages. I typically respond back in 24h and will get back to you as soon as I can!
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="relative z-10 pt-3 pb-14 md:pb-15 lg:pb-19">
                        <ContactForm />
                    </div>

                    {/* Paulie and Mo Image - Only visible in landscape on md+ screens */}
                    <div className="hidden lg:landscape:block absolute left-[-200px] bottom-[1%] md:bottom-[2%] lg:bottom-[2%] z-0">
                        <img 
                            src={paulieAndMo} 
                            alt="Paulie and Mo" 
                            className="w-[300px] object-contain"
                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;