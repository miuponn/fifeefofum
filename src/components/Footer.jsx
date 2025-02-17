import { Link } from "react-router-dom";
import { FiInstagram } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import EtsyIcon from '../assets/etsy.svg';

const Footer = () => {
  return (
    <footer className="bg-accent_pink text-white py-10 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-6 min-h-[3rem]">
      {/* Left - Menu */}
      <div className="md:w-1/3 flex flex-col items-center md:items-start">
        {/* Styled Logo */}
        <h2 className="text-3xl font-snowdoodle">Fifeefofum</h2>
        {/* Footer Links */}
        <nav className="flex flex-col gap-2 mt-3">
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/faqs" className="hover:underline">FAQs</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
      </div>

      {/* Center - Socials */}
      <div className="md:w-1/3 flex flex-col items-center gap-3">
        {/* Social Icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://www.instagram.com/fifeefofum" className="transition">
            <FiInstagram />
          </a>
          <a href="https://www.tiktok.com/@fifeefofum" className="transition">
            <SiTiktok />
          </a>
          <a href="https://www.etsy.com/shop/fifeefofum" className="transition">
            <img src={EtsyIcon} alt="Etsy" className="h-6" />
          </a>
        </div>
        {/* Copyright */}
        <p className="text-xs font-poppins">© 2025 Fifeefofum</p>
      </div>

      {/* Right - Policies */}
      <div className="md:w-1/3 flex flex-col items-center md:items-end">
        <nav className="flex flex-col gap-2">
          <Link to="/shipping-policy" className="hover:underline text-sm md:text-base">Shipping Policy</Link>
          <Link to="/refund-policy" className="hover:underline text-sm md:text-base">Refund Policy</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;