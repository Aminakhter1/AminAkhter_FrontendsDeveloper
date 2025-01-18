
import React from "react";

const Tokenomics = () => {
  return (
    <section className="bg-[#0a0f1c] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Centered Heading */}
        <h2 className="text-2xl font-bold text-center mb-12">Tokenomics</h2>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Chart */}
          <div className="flex justify-center items-center">
            <div className="relative">
              <div className="rounded-full w-64 h-64 border-[10px] border-t-[#0dcaf0] border-b-[#0dcaf0] border-l-[#112233] border-r-[#112233]"></div>
              <div className="absolute top-[15%] left-[15%] bg-[#0a0f1c] w-48 h-48 rounded-full"></div>
              <div className="absolute top-[10%] right-[-10%] text-sm text-gray-400">
                Marketing (5%)
              </div>
              <div className="absolute bottom-[-5%] left-[10%] text-sm text-gray-400">
                Team (35%)
              </div>
              <div className="absolute top-[40%] left-[-20%] text-sm text-gray-400">
                Liquidity Pool (90%)
              </div>
            </div>
          </div>

          {/* Right: Token Details */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="bg-[#112233] p-6 rounded-md shadow-lg">
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Name</span>
                  <span>EthAi</span>
                </li>
                <li className="flex justify-between">
                  <span>Token Name</span>
                  <span>$EthAi</span>
                </li>
                <li className="flex justify-between">
                  <span>Token Standard</span>
                  <span>ERC20</span>
                </li>
                <li className="flex justify-between">
                  <span>Blockchain</span>
                  <span>Ethereum</span>
                </li>
                <li className="flex justify-between">
                  <span>Total Supply</span>
                  <span>100 Million</span>
                </li>
                <li className="flex justify-between">
                  <span>Tax</span>
                  <span>5%/5%</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#112233] p-6 rounded-md shadow-lg">
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Team</span>
                  <span>35%</span>
                </li>
                <li className="flex justify-between">
                  <span>Marketing</span>
                  <span>5%</span>
                </li>
                <li className="flex justify-between">
                  <span>Liquidity Pool</span>
                  <span>90%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
