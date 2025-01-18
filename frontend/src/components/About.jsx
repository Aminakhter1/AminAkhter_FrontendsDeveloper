
import React from "react";

const About = () => {
  return (
    <section className="bg-[#0a0f1c] text-white py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">About EthAi</h2>
        <p className="text-gray-400 mb-6">
          At EthAi, we're all about making crypto trading safer and more intuitive. We
          provide tools that help traders keep up with all-new market trends, track
          top traders' movements.
        </p>
        <button className="bg-[#87CEEB] text-[#0a0f1c] px-6 py-2 rounded-md mb-8 hover:bg-[#0bbbd6] transition">
          Read more
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto bg-[#112239] p-4">
        {/* Box 1 */}
        <div className="bg-[#112244] p-6 rounded-md text-center shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Stay Ahead</h3>
          <p className="text-gray-400">
            No more guesswork—get clear, trustable insights.
          </p>
          <p className="text-gray-400 mt-2">
            Our tools are designed to make complex market analysis easy to
            understand and act on.
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-[#112244] p-6 rounded-md text-center shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Know Your Assets</h3>
          <p className="text-gray-400">
            Always stay on top of how your investments are performing.
          </p>
          <p className="text-gray-400 mt-2">
            We're constantly improving, adding features to help you make the
            most informed decisions possible.
          </p>
        </div>

        {/* Box 3 */}
        <div className="bg-[#112244] p-6 rounded-md text-center shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Make Better Trades</h3>
          <p className="text-gray-400">
            Analyze trends and patterns to make smarter trading decisions.
          </p>
          <p className="text-gray-400 mt-2">
            Stay ahead of the curve with our comprehensive trading tools.
          </p>
        </div>

        {/* Box 4 */}
        <div className="bg-[#112244] p-6 rounded-md text-center shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Improve Efficiency</h3>
          <p className="text-gray-400">
            Streamline your processes to save time and effort.
          </p>
          <p className="text-gray-400 mt-2">
            Focus on what matters with tools built for efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
