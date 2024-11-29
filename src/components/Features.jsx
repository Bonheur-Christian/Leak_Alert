import React, { useState } from "react";
import { VscGraphLine } from "react-icons/vsc";
import { PiDetectiveThin } from "react-icons/pi";
import { LuMonitorDot } from "react-icons/lu";
import { MdOutlineInsights } from "react-icons/md";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Features() {
  const Features = [
    {
      icon: <VscGraphLine size={25} />,
      feature: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus consequatur odit distinctio nulla dolorum, suscipit aut nam sed accusamus officiis hic, non repellendus eveniet corrupti. Ducimus inventore aut nam laborum?",
    },
    {
      icon: <PiDetectiveThin size={25} />,
      feature: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus consequatur odit distinctio nulla dolorum, suscipit aut nam sed accusamus officiis hic, non repellendus eveniet corrupti. Ducimus inventore aut nam laborum?",
    },
    {
      icon: <LuMonitorDot size={25} />,
      feature: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus consequatur odit distinctio nulla dolorum, suscipit aut nam sed accusamus officiis hic, non repellendus eveniet corrupti. Ducimus inventore aut nam laborum?",
    },
    {
      icon: <MdOutlineInsights size={25} />,
      feature: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus consequatur odit distinctio nulla dolorum, suscipit aut nam sed accusamus officiis hic, non repellendus eveniet corrupti. Ducimus inventore aut nam laborum?",
    },
    {
      icon: <HiOutlineBellAlert size={25} />,
      feature: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatibus consequatur odit distinctio nulla dolorum, suscipit aut nam sed accusamus officiis hic, non repellendus eveniet corrupti. Ducimus inventore aut nam laborum?",
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? 0 : index));
  };

  return (
    <div className="py-32">
      <div className="text-center space-y-6 ">
        <button className="border-2 hover:font-semibold border-[#23BDEE] px-12 flex mx-auto text-[#23BDEE] hover:bg-[#23BDEE] hover:text-white rounded-2xl py-1 duration-500">
          Our Features
        </button>
        <h1 className="text-2xl font-poppins ">
          Introducing <span className="text-[#23BDEE]">Our</span> Features
        </h1>
        <p className="font-poppins text-gray-400 w-[50%] mx-auto">
          Unique features of{" "}
          <span className="text-[#23BDEE] text-md font-medium">Splash</span>{" "}
          enable the system to respond with high accuracy and precision. This
          enhance resources utilization and management.
        </p>
      </div>
      <div className="py-24 space-y-6">
        {Features.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-[#23BDEE]/5 to-[#23BDEE]/10 border border-[#23BDEE] rounded-xl p-6 space-y-6 duration-700"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-6 items-center">
                {item.icon}
                <h2 className="font-poppins text-gray-500 text-xl font-semibold">
                  {item.feature}
                </h2>
              </div>
              {expandedIndex === index ? (
                <div
                  className="rounded-full text-white p-1 bg-[#b7e5f3]"
                  onClick={() => toggleExpand(index)}
                >
                  <IoIosArrowUp />
                </div>
              ) : (
                <div
                  className="rounded-full text-white p-1 bg-[#b7e5f3]"
                  onClick={() => toggleExpand(index)}
                >
                  <IoIosArrowDown />
                </div>
              )}
            </div>
            {expandedIndex === index && (
              <div>
                <p className="font-poppins transition-all ease-in-out duration-700 text-gray-500">
                  {item.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
