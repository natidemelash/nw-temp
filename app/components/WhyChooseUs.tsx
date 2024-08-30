import { FaHandshake } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-200 flex flex-col max lg:flex-row lg:justify-center items-center  p-10 rounded-lg space-y-6 lg:space-y-0 lg:space-x-10 ">
      {/* Left Side: Illustration and Title/Description */}
      <div className="max-w-xl">
        <div className="mb-4">
          <img src="/whyChoose.png" alt="Illustration" className="w-full" />
        </div>
      </div>

      {/* Right Side: Features List */}
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-[45rem]">
        <h2 className="text-3xl font-bold mb-4 lg:mb-8 text-center">
          Why Choose GoodayOn?
        </h2>
        <div>
          <h1 className="text-[1.34rem] font-semibold flex items-center gap-2">
            <FaHandshake />
            <span>Client-centric Services</span>
          </h1>
          <p className="text-lg leading-relaxed mb-3 text-[#455473a4]">
            We are committed to building long-term relationships with our
            clients by providing them with quality services that meet their
            needs.
          </p>
        </div>
        <div>
          <h1 className="text-[1.34rem] font-semibold flex items-center gap-2">
            <IoIosPeople />
            <span>Professional Team</span>
          </h1>
          <p className="text-lg leading-relaxed text-[#455473a4]">
            Our team members make it their mission to go beyond delivering
            excellence in everything they do, they strive to meet and exceed
            client expectations. We believe this level of service requires
            commitment from all of us at every level of our organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
