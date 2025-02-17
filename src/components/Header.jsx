import AnnouncementBar from "./Header/AnnouncementBar";
import CurrencySelector from "./Header/CurrencySelector"; 
import SearchBar from "./Header/SearchBar";
import NavLinks from "./Header/NavLinks";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="w-full">
            {/* Announcement Bar */}
            <AnnouncementBar />

            {/* Navbar */}
            <nav className="bg-white py-4 px-6 flex items-center justify-between w-full">
                {/* Left: Currency Selector & Search Bar */}
                <div className="flex items-center gap-6">
                    <CurrencySelector />
                    <SearchBar />
                </div>

                {/* Center: Shop Name */}
                <Link to="/">
                    <h1 className="text-4xl name_style">Fifeefofum</h1>
                </Link>

                {/* Right: Navigation Links */}
                <NavLinks />
            </nav>
        </header>
    );
};

export default Header;