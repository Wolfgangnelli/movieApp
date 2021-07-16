import React from "react";
import SearchBar from "./SearchBar";
import MenuBar from "./MenuBar";

function NavBar({ onSearchTerm }) {
  return (
    <>
      <SearchBar onSearchTerm={onSearchTerm} />
      <nav className="mt-2 pt-2 border-t border-gray-700">
        <MenuBar />
      </nav>
    </>
  );
}

export default NavBar;
