import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative transition-all duration-300 ease-in-out">
      {/* Search Input Container */}
      <div
        className={`flex items-center border-b-2 border-[#F9E1E1] w-32 md:w-48 lg:w-64 py-1 px-3 transition-all duration-300 ease-in-out
          ${isFocused ? "border-2 border-pink w-64 md:w-80 lg:w-96 rounded-md" : ""}
        `}
      >
        {/* Static "search..." Text (Disappears on Focus) */}
        {!isFocused && (
          <span className="text-[#F9E1E1] font-viucobacoba text-sm transition-opacity duration-300">
            search...
          </span>
        )}

        {/* Input Field */}
        <input
          type="text"
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => e.target.value === "" && setIsFocused(false)} // Reset if empty
          className="flex-grow bg-transparent outline-none text-primary text-sm transition-all duration-300 ease-in-out"
        />
      </div>

      {/* Search Icon (Scales on Hover) */}
      <FiSearch
        className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-[#F9E1E1] text-lg transition-all duration-300 ease-in-out
          ${isFocused ? "text-pink scale-110" : ""}
        `}
      />
    </div>
  );
};

export default SearchBar;