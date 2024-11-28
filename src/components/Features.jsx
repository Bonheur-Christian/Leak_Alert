import React from "react";
import { MdOutlineSensors } from "react-icons/md";
import { SiTransmission } from "react-icons/si";
import { FaMixcloud } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Features() {
  return (
    <div className="bg-[#F0F5EFBA] rounded-xl py-16 space-y-40">
      <div className="space-y-6">
        <button className="border-2 border-[#23BDEE] px-12 flex mx-auto text-[#23BDEE] hover:bg-[#23BDEE] hover:text-white rounded-2xl py-1 duration-500">
          what we offer
        </button>
        <p className="text-3xl font-lato font-normal text-center text-gray-800">
          Proving Efficient and Accurate way of Water leakage detection
        </p>
        <p className="w-[40%] text-center mx-auto text-md text-gray-400">
          With the help of real-time data we get from the environment, we are
          able to allocate potential places that mostly experience leakage.
          Basing on various factors data ia analyzed and used in decision making
        </p>
      </div>
      <div className="flex justify-evenly ps-4">
        <div className="bg-white rounded-2xl w-[30%] p-8 space-y-6 text-gray-800">
          <div className="bg-gray-300 py-6 px-6 w-16 rounded-xl m-1">
            <MdOutlineSensors />
          </div>
          <h1 className="font-lato text-2xl">On-Site Devices</h1>
          <p className="text-md">
            Devices on the site gathers real-time information from pipes. Data
            collected here are analyzed to determine if there is leak or not.
            These data are also used in decision making
          </p>
          <a
            href="#"
            className="text-[#23BDEE] flex items-center gap-4 hover:underline"
          >
            Read more
            <FaChevronRight className="text-[#23BDEE]" />
          </a>
        </div>
        <div className="bg-white rounded-2xl w-[30%] p-8 space-y-6 text-gray-800">
          <div className="bg-gray-300 py-6 px-6 w-16 rounded-xl m-1">
            <SiTransmission />
          </div>
          <h1 className="font-lato text-2xl">On-Site Devices</h1>
          <p className="text-md">
            Devices on the site gathers real-time information from pipes. Data
            collected here are analyzed to determine if there is leak or not.
            These data are also used in decision making
          </p>
          <a
            href="#"
            className="text-[#23BDEE] flex items-center gap-4 hover:underline"
          >
            Read more
            <FaChevronRight className="text-[#23BDEE]" />
          </a>
        </div>
        <div className="bg-white rounded-2xl w-[30%] p-8 space-y-6 text-gray-800">
          <div className="bg-gray-300 py-6 px-6 w-16 rounded-xl m-1">
            <FaMixcloud />
          </div>
          <h1 className="font-lato text-2xl">On-Site Devices</h1>
          <p className="text-md">
            Devices on the site gathers real-time information from pipes. Data
            collected here are analyzed to determine if there is leak or not.
            These data are also used in decision making
          </p>
          <a
            href="#"
            className="text-[#23BDEE] flex items-center gap-4 hover:underline"
          >
            Read more
            <FaChevronRight className="text-[#23BDEE]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Features;
