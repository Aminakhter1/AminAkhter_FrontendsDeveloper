import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0f44] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left: Logo and Social Icons */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-[#0dcaf0] rounded-full"></div>
            <span className="text-lg font-bold">EthAi</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#0dcaf0]">
              <i className="fab fa-telegram"></i> Telegram
            </a>
            <a href="#" className="hover:text-[#0dcaf0]">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="#" className="hover:text-[#0dcaf0]">
              <i className="fab fa-twitter"></i> X
            </a>
            <a href="#" className="hover:text-[#0dcaf0]">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="#" className="hover:text-[#0dcaf0]">
              <i className="fab fa-discord"></i> Discord
            </a>
          </div>
        </div>

        {/* Right: Email Form */}
        <div className="flex flex-col items-center md:items-end">
          <p className="text-center md:text-right text-gray-400 mb-4">
            “Designed for traders of today, just like you.”
          </p>
          <form className="flex items-center space-x-4">
            <input
              type="email"
              placeholder="What's your work email?"
              className="bg-[#112233] text-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0dcaf0] w-64"
            />
            <button
              type="submit"
              className="bg-[#0dcaf0] text-[#0a0f1c] px-6 py-2 rounded-md hover:bg-[#0bbbd6] transition"
            >
              Get Started
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

