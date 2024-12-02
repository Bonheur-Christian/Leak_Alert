import React from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineMailOutline } from "react-icons/md";

function Contacts({ width = "80%" }) {
  return (
    <div className="relative mx-auto" style={{ width: width }}>
      <div className="absolute top-[-20rem]">
        <img src="./svg/lines1.svg" alt="These are just designs" />
      </div>
      <div className="bg-[#F0F5EF] opacity-100 space-y-6 py-12 rounded-xl w-[100%]">
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
          <div className="space-y-8">
            <div className="flex mx-auto justify-center gap-12">
              <div className="relative space-y-3 w-1/5 ">
                <label
                  htmlFor="name"
                  className="font-poppins font-medium text-gray-700 pl-4"
                >
                  Name
                </label>
                <div>
                  <VscAccount
                    size={25}
                    color="#23BDEE"
                    className="absolute left-3 top-[4rem] transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    placeholder="Enter your username"
                    className="pl-12 py-4 border border-[#23BDEE] rounded-3xl w-full outline-none focus:ring-1 focus:ring-[#23BDEE] text-gray-600"
                  />
                </div>
              </div>
              <div className="relative space-y-3 w-1/5 ">
                <label
                  htmlFor="email"
                  className="font-poppins font-medium text-gray-700 pl-4"
                >
                  Email
                </label>
                <div>
                  <MdOutlineMailOutline
                    size={25}
                    color="#23BDEE"
                    className="absolute left-3 top-[4rem] transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="pl-12 py-4 border border-[#23BDEE] rounded-3xl w-full outline-none focus:ring-1 focus:ring-[#23BDEE] text-gray-600"
                  />
                </div>
              </div>
            </div>
            <div className="relative space-y-3 w-[660px] mx-auto ">
              <label
                htmlFor="message"
                className="font-poppins font-medium text-gray-700 pl-4"
              >
                Message
              </label>
              <div>
                <AiOutlineMessage
                  size={25}
                  color="#23BDEE"
                  className="absolute left-3 top-[4rem] transform -translate-y-1/2"
                />
                <textarea
                  rows={6}
                  type="text"
                  placeholder="Enter your message"
                  className="pl-12 py-4 border border-[#23BDEE] rounded-3xl w-full outline-none focus:ring-1 focus:ring-[#23BDEE] text-gray-600"
                />
              </div>
            </div>
            <div className="w-[660px] rounded-2xl px-6 py-4 text-white font-poppins font-medium text-center mx-auto bg-[#23BDEE] hover:bg-[#1e8daf]">
              Send message
            </div>
          </div>
        </form>
      </div>
      <div className="absolute top-[35rem] ms-[90%]">
        <img src="./svg/lines2.svg" alt="These are just designs" />
      </div>
    </div>
  );
}

export default Contacts;
