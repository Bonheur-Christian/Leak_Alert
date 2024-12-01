import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineMailOutline } from "react-icons/md";

function Contacts() {
  return (
    <div className="">
      <div>
        <img src="./svg/lines1.svg" alt="These are just designs" />
      </div>
      <div className="bg-[#F0F5EF] opacity-100 space-y-6 py-12 rounded-xl">
        <button className="border hover:font-semibold border-[#23BDEE] px-12 flex mx-auto text-[#23BDEE] hover:bg-[#23BDEE] hover:text-white rounded-2xl py-1 duration-500">
          Contact Us
        </button>
        <h1 className="text-2xl font-poppins text-center flex flex-col leading-normal">
          Any Insights ? <span>Feel Free To Contact Us</span>
        </h1>
        <p className="text-lg font-poppins text-gray-500 text-center w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
          facilis! Vel perspiciatis amet alias maiores labore porro odit
          quisquam doloribus.
        </p>
        <form>
          <div className="flex justify-evenly">
            <div>
              <label htmlFor="name" className="font-poppins font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="rounded-2xl border border-[#23BDEE]"
              />
              <AiOutlineMessage />
            </div>
          </div>
        </form>
      </div>
      <div className="">
        <img src="./svg/lines2.svg" alt="These are just designs" />
      </div>
    </div>
  );
}

export default Contacts;
