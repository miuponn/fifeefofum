import AnnouncementBar from "./Header/AnnouncementBar";
import CurrencySelector from "./Header/CurrencySelector"; 
import SearchBar from "./Header/SearchBar";
import NavLinks from "./Header/NavLinks";
import { Link } from "react-router-dom";
import Fifeefofum from "../assets/images/Fifeefofum.svg";

const Header = () => {
    return (
        <header className="w-full relative z-50">
            {/* Announcement Bar */}
            <AnnouncementBar />

            {/* Navbar */}
            <nav className="bg-white py-2 px-4 sm:px-4 md:px-6 lg:px-10 xl:px-14 flex items-center justify-between w-full">
                {/* Left: Currency Selector & Search Bar */}
                <div className="flex items-center gap-4">
                    <CurrencySelector />
                    <SearchBar />
                </div>

                {/* Center: Shop Name */}
                <Link to="/" className="flex-grow flex justify-center pl-4">
                    <img src={Fifeefofum} alt="Fifeefofum Logo" className="h-8 md:h-10 lg:h-12 xl:h-14 my-1 md:my-2 lg:my-3 xl:my-4" />
                </Link>

                {/* Right: Navigation Links */}
                <NavLinks />
            </nav>
        </header>
    );
};

export default Header;