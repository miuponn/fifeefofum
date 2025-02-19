import AnnouncementBar from "./Header/AnnouncementBar";
import CurrencySelector from "./Header/CurrencySelector"; 
import SearchBar from "./Header/SearchBar";
import NavLinks from "./Header/NavLinks";
import { Link } from "react-router-dom";
import Fifeefofum from "../assets/images/Fifeefofum.svg";
import MobileHeader from './Mobile/Header';

const Header = () => {
    return (
        <>
            <MobileHeader />
            <header className="hidden md:block w-full relative z-50">
                {/* Announcement Bar */}
                <AnnouncementBar />

                {/* Navbar */}
                <nav className="bg-white py-2 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 flex items-center justify-between w-full">
                    {/* Left: Currency Selector & Search Bar */}
                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4 w-[25%]">
                        <CurrencySelector />
                        <SearchBar />
                    </div>

                    {/* Center: Shop Name */}
                    <div className="flex-shrink-0 w-[50%] flex justify-center px-2 sm:px-4 md:px-6 lg:px-8">
                        <Link to="/">
                            <img 
                                src={Fifeefofum} 
                                alt="Fifeefofum Logo" 
                                className="h-8 md:h-10 lg:h-12 xl:h-14 my-1 md:my-2 lg:my-3 xl:my-4" 
                            />
                        </Link>
                    </div>

                    {/* Right: Navigation Links */}
                    <div className="w-[25%] flex justify-end items-center gap-4">
                        <NavLinks />
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;