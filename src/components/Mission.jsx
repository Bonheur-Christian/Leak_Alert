import React from "react";

function Mission() {
  const Mission = [
    {
      number: "/svg/1.svg",
      title: "Data-Driven Insights",
      description:
        "Fill a short form telling us basic details about your startup, including industry, stage, and key metrics.",
    },
    {
      number: "/svg/2.svg",
      title: "Data-Driven Insights",
      description:
        "Fill a short form telling us basic details about your startup, including industry, stage, and key metrics.",
    },
    {
      number: "/svg/3.svg",
      title: "Data-Driven Insights",
      description:
        "Fill a short form telling us basic details about your startup, including industry, stage, and key metrics.",
    },
  ];
  return (
    <div className="space-y-12">
      <button className="border hover:font-semibold border-[#23BDEE] px-12 flex mx-auto text-[#23BDEE] hover:bg-[#23BDEE] hover:text-white rounded-2xl py-1 duration-500">
        Mission
      </button>
      <h1 className="font-poppins text-2xl text-center">
        Mission of <span className="text-[#23BDEE]">Splash</span> System
      </h1>
      <div className="flex justify-evenly gap-20 pt-10">
        {Mission.map((item, index) => (
          <div className="space-y-4 w-[25%]">
            <img src={item.number} alt="Numbering" />
            <h2 className="font-poppins text-2xl">{item.title}</h2>
            <p className="text-lg text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mission;
