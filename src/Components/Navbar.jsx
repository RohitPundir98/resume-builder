import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  // State to track the mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Render the Header component
  return (
    <>
      {/* Navigation */}
      <nav className="bg-black text-white text-xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          {/* Logo */}
          <Link to="/" className="flex items-center bg-gray p-2 opacity-85">
            <h1 className="text-white-700 font-bold text-2xl">Resume Builder</h1>
          </Link>
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* Mobile Menu */}
          <div
            className={`w-full md:flex md:w-auto ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
              {/* Resume Templates NavLink */}
              <NavLink
                exact
                to="/"
                className="block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-gray-200"
                activeClassName="text-white" // Active class for Resume Templates NavLink
                onClick={toggleMobileMenu} // Close the mobile menu when clicked
              >
                Resume Templates
              </NavLink>
              {/* My Resumes NavLink */}
              <NavLink
                exact
                to="/myresume"
                className="block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-gray-200"
                activeClassName="text-white" // Active class for My Resumes NavLink
                onClick={toggleMobileMenu} // Close the mobile menu when clicked
              >
                My Resumes
              </NavLink>
              {/* About Us NavLink */}
              <NavLink
                exact
                to="/about-us"
                className="block py-2 pl-3 pr-4 md:border-0 md:p-0 hover:text-gray-200"
                activeClassName="text-white" // Active class for About Us NavLink
                onClick={toggleMobileMenu} // Close the mobile menu when clicked
              >
                About Us
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
