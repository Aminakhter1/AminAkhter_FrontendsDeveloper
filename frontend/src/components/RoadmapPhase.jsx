
import React from "react";
import office from "../images/office.jpg";
import office2 from "../images/office2.jpg";
import deporeview from "../images/deporeview.jpg";
const RoadmapPhase = () => {
  return (
    <div className="bg-[#0a0f1c] text-white min-h-screen flex flex-col items-center">
      {/* Roadmap Heading */}
      <h2 className="text-center text-2xl md:text-4xl font-semibold mt-6 mb-12">Roadmap</h2>

      {/* Content Section1 */}
      <div className="max-w-7xl w-full px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-center">
        {/* Text Section */}
        <div className="flex-1 bg-opacity-70  rounded-lg p-8 md:p-12 flex justify-center">
          <div className="w-full">
            <div className=" text-[#88C0D0] rounded-lg p-6">
              <span className="uppercase text-sm font-medium  mb-4 text-[#7FADAA] border-1 p-1 rounded-lg">
                Phase 1
              </span>
              <h3 className="text-2xl font-semibold mb-6">Kicking Off</h3>
              <ul className="list-none space-y-4">
                <li className="flex items-center">
                  <span className="mr-3 w-4 h-4 bg-[#00D8D8] rounded-full"></span>
                  Launch of EthAi: Officially
                </li>
                <li className="flex items-center">
                  <span className="mr-3 w-4 h-4 bg-[#00D8D8] rounded-full"></span>
                  Development of Core AI Agents
                </li>
                <li className="flex items-center">
                  <span className="mr-3 w-4 h-4 bg-[#00D8D8] rounded-full"></span>
                  User Onboarding Campaign
                </li>
                <li className="flex items-center">
                  <span className="mr-3 w-4 h-4 bg-[#00D8D8] rounded-full"></span>
                  Community Engagement Initiatives
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-8 lg:mt-0 flex justify-center">
  <div
    className="relative w-full max-w-[500px] h-[200px] sm:h-[300px] md:h-[400px] bg-center bg-cover rounded-lg overflow-hidden"
    style={{
      
      boxShadow: "5px 3px 18px 10px rgb(40, 54, 86)",
    }}
  ><img src={office}/>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  </div>
</div>

      
      </div>
   {/*container 2*/}
   

      {/* Content Section */}
      <div className="max-w-7xl my-16 w-full px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-center">
        {/* Image Section */}
        <div className="flex-1 mt-8 lg:mt-0 lg:mr-12 flex justify-center">
          <div
            className="relative h-[300px] md:h-[400px] w-full bg-center bg-cover rounded-lg overflow-hidden"
            style={{
              
              boxShadow:"5px 3px 18px 10px rgb(40, 54, 86)"
            }}
          ><img src={deporeview}/>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 bg-opacity-70 rounded-lg p-8 md:p-12 flex justify-center">
          <div className="w-full">
            <div className=" text-[#88C0D0] rounded-lg p-6">
              <span className="uppercase text-sm font-medium tracking-wider  mb-4 text-[#7FADAA] border-1 p-1 rounded-lg">
                Phase 2
              </span>
              <h3 className="text-2xl font-semibold mb-6">Bigger Insights</h3>
              <ul className="list-none space-y-4">
                <li className="flex items-center">
                  <span className="mr-3 w-4 h-4 bg-[#00D8D8] rounded-full"></span>
                  Introduction of Advanced Ai Agents
                </li>
                <li className="flex items-center">
                  <span className="mr-3 w-4 h-4 bg-[#00D8D8] rounded-full"></span>
                  Strategic Partnership
                </li>
                <li className="flex items-center">
                  <span className="mr-3 w-4 h-4 bg-[#00D8D8] rounded-full"></span>
                  User Interface Optimization
                </li>
                <li className="flex items-center">
                  <span className="mr-3 w-4 h-4 bg-[#00D8D8] rounded-full"></span>
                  Comprehensive Marketing Compaign
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*container 3*/}
      <div className="max-w-7xl w-full px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-center">
        {/* Text Section */}
        <div className="flex-1 bg-opacity-70  rounded-lg p-8 md:p-12 flex justify-center">
          <div className="w-full">
            <div className=" text-[#88C0D0] rounded-lg p-6">
              <span className="uppercase text-sm font-medium tracking-wider  mb-4 text-[#7FADAA] border-1 p-1 rounded-lg">
                Phase 3
              </span>
              <h3 className="text-2xl font-semibold mb-6">Full Power</h3>
              <ul className="list-none space-y-4">
                <li className="flex items-center">
                  <span className="mr-3 w-4 h-4 bg-[#00D8D8] rounded-full"></span>
                  Introduction of Enhanced Features
                </li>
                <li className="flex items-center">
                  <span className="mr-3 w-4 h-4 bg-[#00D8D8] rounded-full"></span>
                  API integration for Data Access
                </li>
                <li className="flex items-center">
                  <span className="mr-3 w-4 h-4 bg-[#00D8D8] rounded-full"></span>
                  Launch of Community-Driven Initiatives
                </li>
                <li className="flex items-center">
                  <span className="mr-3 w-4 h-4 bg-[#00D8D8] rounded-full"></span>
                  Continious improvement and Updates
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 mt-8 lg:mt-0 lg:ml-12 flex justify-center">
          <div
            className="relative h-[300px] md:h-[400px] w-full bg-center bg-cover rounded-lg overflow-hidden"
            style={{
             
              boxShadow:"5px 3px 18px 10px rgb(40, 54, 86)"
            }}
          ><img src={office2}/>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        </div>
      </div>
       {/*container 4*/}
       {/* Content Section1 */}
<div className="max-w-7xl w-full px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-center">
  {/* Image Section with Heading and Text */}
  <div className="flex-1 mt-8 lg:mt-0 lg:mr-12 flex flex-col justify-center">
    {/* Heading and Text */}
    <div className="mt-6 text-center text-white">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked</h1>
      <h1 className="text-3xl font-bold mb-4">Questions</h1>
      
    </div>
  </div>

  {/* Text Section */}
  <div className="flex-1 bg-opacity-70 rounded-lg p-8 md:p-12 flex justify-center">
    <div className="w-full">
      <div className="text-[#88C0D0] rounded-lg p-6">
        
       
        <ul className="list-none space-y-4">
          <li className="flex items-center">
            <span className="mr-3 w-4 h-4 bg-[#00D8D8] rounded-full"></span>
            Launch of EthAi: Officially
          </li>
          <li className="flex items-center">
            <span className="mr-3 w-4 h-4 bg-[#00D8D8] rounded-full"></span>
            Development of Core AI Agents
          </li>
          <li className="flex items-center">
            <span className="mr-3 w-4 h-4 bg-[#00D8D8] rounded-full"></span>
            User Onboarding Campaign
          </li>
          <li className="flex items-center">
            <span className="mr-3 w-4 h-4 bg-[#00D8D8] rounded-full"></span>
            Community Engagement Initiatives
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

 
 
    </div>
  );
};

export default RoadmapPhase;
