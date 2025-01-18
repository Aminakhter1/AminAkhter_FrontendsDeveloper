
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 text-white bg-gradient-to-r from-blue-900 to-black">
      {/* Logo */}
      <h1 className="text-2xl py-2 font-bold">EathAi</h1>

      {/* Toggle Button (Visible on Mobile) */}
      <button
        className="sm:hidden bg-[#0C2B2F] p-2 rounded-full focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="h-6 w-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Navigation Menu */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:flex space-y-4 sm:space-y-0 space-x-0 sm:space-x-6 bg-green-700 sm:bg-transparent lg:bg-[rgba(12,43,47,0.7)] p-3 sm:p-0 lg:py-2 lg:px-6 rounded-lg sm:rounded-none lg:rounded-full absolute sm:static top-16 left-4 right-4 sm:top-auto sm:left-auto sm:right-auto z-50`}
      >
        <a
          href="#about"
          className="block sm:inline-block px-3 py-2 text-white hover:underline"
        >
          Features
        </a>
        <a
          href="#whyus"
          className="block sm:inline-block px-3 py-2 text-white hover:underline"
        >
          Why Us
        </a>
        <a
          href="#tokenomics"
          className="block sm:inline-block px-3 py-2 text-white hover:underline"
        >
          Tokenomics
        </a>
        <a
          href="#roadmap"
          className="block sm:inline-block px-3 py-2 text-white hover:underline"
        >
          Roadmap
        </a>

        {/* Buttons (Visible on Mobile inside the menu) */}
        <div className="flex flex-col sm:hidden space-y-2 mt-4">
          <button className="px-4 py-2 rounded border border-neutral-300">
            Login
          </button>
          <button className="bg-neutral-300 px-4 py-2 rounded text-slate-800">
            Whitepaper
          </button>
        </div>
      </nav>

      {/* Buttons (Visible on Desktop) */}
      <div className="hidden sm:flex space-x-4">
        <button className="px-4 py-2 rounded border border-neutral-300">
          Login
        </button>
        <button className="bg-neutral-300 px-4 py-2 rounded text-slate-800">
          Whitepaper
        </button>
      </div>
    </header>
  );
};

export default Header;
