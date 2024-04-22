import React, { useState, useEffect } from "react";
import Logo from "../public/IMG_4628 1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Add event listener for keydown event to close the modal when ESC is pressed
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Toggle body scroll based on modal open/close state
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <div className="text-black flex mt-3 pl-16 max-sm:pl-0 relative">
      <img
        src={Logo}
        alt="Logo"
        className="w-52 h-32 mt-3 max-sm:w-32"
      />
      <div className="mt-16 pt-2">
        {/* Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50`}
        >
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="m-auto p-4 bg-white rounded-lg shadow-lg h-full w-full max-sm:w-full">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                onClick={toggleMenu}
                aria-label="Close Menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="flex flex-col items-center">
                <Link className="font-semibold hover:border-b-4 pb-1 border-b-orange-500">
                  Home
                </Link>
                <Link className="font-semibold hover:border-b-4 pb-1 border-b-orange-500 mt-4">
                  Browse Gifts
                </Link>
                <Link className="font-semibold hover:border-b-4 pb-1 border-b-orange-500 mt-4">
                  How it Works
                </Link>
                <Link className="font-semibold hover:border-b-4 pb-1 border-b-orange-500 mt-4">
                  Our story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ml-36 mt-16 max-sm:ml-0">
        <button
          type="button"
          className="text-white bg-[#DD6421] hover:bg-[#DD6421]/80 focus:outline-none focus:ring-4 focus:ring-orange-500 font-medium rounded-full text-sm max-sm:text-xs px-6 py-2 max-sm:px-3 text-center me-2 max mb-2 dark:focus:ring-orange-900"
        >
          SIGN UP
        </button>
        <button
          type="button"
          className="text-white bg-[#DD6421] ml-5 hover:bg-[#DD6421]/80 focus:outline-none focus:ring-4 focus:ring-orange-500 font-medium rounded-full text-sm max-sm:text-xs px-6 py-2 max-sm:px-3 text-center me-2  mb-2 dark:focus:ring-orange-900"
        >
          LOG IN
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="block sm:hidden"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
