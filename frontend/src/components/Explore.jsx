import React from 'react';

const Explore = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0a0f1c]">
      <div className="bg-[#112128] p-8 rounded-lg shadow-lg max-w-lg text-center">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Explore Our <span className="text-[#4fc9ff]">dApp</span>
        </h1>
        
        {/* Description */}
        <p className="text-gray-400 mb-4">
          EthAi is an AI-powered dApp designed to help traders make smarter, data-driven
          decisions. By tracking smart money flows, monitoring key wallets, and providing
          real-time market insights, EthAi empowers users to stay ahead of trends. The
          platform offers intuitive AI features for asset recommendations, market
          analysis, and personalized crypto Q&A, making it the ultimate tool for both
          novice and experienced traders.
        </p>
        
        {/* Button */}
        <button className="bg-[#4fc9ff] text-[#112128] font-semibold px-6 py-3 rounded-lg hover:bg-[#3ab0e0] transition duration-200">
          Open dApp
        </button>
      </div>
    </div>
  );
};

export default Explore;