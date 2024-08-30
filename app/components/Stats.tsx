import React from "react";
import { FaUsers, FaSearch, FaCheckCircle } from "react-icons/fa";
import { MdOutlineInstallMobile } from "react-icons/md";

const Stats: React.FC = () => {
  // Generate random values for demo purposes
  const appDownloads = "100,00+";
  const gigWorkers = "30,000+";
  const searches = "270,000+";
  const gigsMatched = "70,000";

  return (
    <div className="mt-2 md:mt-[8rem] 2xl:mt-[10rem] flex flex-wrap gap-2 xl:gap-0 justify-center items-center py-8 md:py-12 px-4 bg-gray-100">
      {/* Stat Item 1 */}
      <div className="flex flex-col items-center text-center p-5 md:p-8 bg-white shadow-lg rounded-lg w-full sm:w-1/2 md:w-[20%] mr-2">
        <MdOutlineInstallMobile className="text-4xl text-[#E20E80] mb-2" />
        <span className="text-2xl font-bold">{appDownloads}</span>
        <span className="text-gray-600">App Downloads</span>
      </div>

      {/* Stat Item 2 */}
      <div className="flex flex-col items-center text-center p-5 md:p-8 bg-white shadow-lg rounded-lg w-full sm:w-1/2 md:w-[20%] mr-2">
        <FaUsers className="text-4xl text-[#E20E80] mb-2" />
        <span className="text-2xl font-bold">{gigWorkers}</span>
        <span className="text-gray-600">Gig Workers</span>
      </div>

      {/* Stat Item 3 */}
      <div className="flex flex-col items-center text-center p-5 md:p-8 bg-white shadow-lg rounded-lg w-full sm:w-1/2 md:w-[20%] mr-2">
        <FaSearch className="text-4xl text-[#E20E80] mb-2" />
        <span className="text-2xl font-bold">{searches}</span>
        <span className="text-gray-600">Searches</span>
      </div>

      {/* Stat Item 4 */}
      <div className="flex flex-col items-center text-center p-5 md:p-8 bg-white shadow-lg rounded-lg w-full sm:w-1/2 md:w-[20%]">
        <FaCheckCircle className="text-4xl text-[#E20E80] mb-2" />
        <span className="text-2xl font-bold">{gigsMatched}</span>
        <span className="text-gray-600">Gigs Matched</span>
      </div>
    </div>
  );
};

export default Stats;
