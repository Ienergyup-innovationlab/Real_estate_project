import React, { useState } from "react";
import logo1 from "./images/logo1.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DropdownMenu from "./sellDropdownMenu";
import { yellow } from "@mui/material/colors";
import image1 from "./images/image1.png";
import ReusableButton from "../ReusableButton";
import { ArrowDropDown, ArrowRight } from "@mui/icons-material";
import Image2 from "./images/Image2.png";
import Footer from "../Footer";

export const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <div>
      <header
        className="header md:h-20 flex justify-between max-w-full h-14  bg-customBlue items-center fixed z-10 top-0"
        style={{ width: "100%" }}
      >
        <div className=" header_left pl-9 cursor-pointer">
          <Link to="/">
            <img
              className="w-10 md:w-16 h14 md:h-20 "
              src={logo1}
              alt=" company logo"
            />
          </Link>
        </div>
        <div className="header_middle hidden md:flex font-bold text-white cursor-pointer">
          <ul className="flex justify-around">
            <li className=" px-4  hover:text-amber-600">
              <Link to="/home">Home</Link>{" "}
            </li>
            <li className=" px-4 hover:text-amber-600">Buy </li>
            <li className=" px-4 hover:text-amber-600">Rent</li>
            <li className=" px-4 hover:text-amber-600 ">Sell</li>
            <li className=" px-4 hover:text-amber-600 ">Mortgage</li>
            <li className=" px-4 hover:text-amber-600">
              <Link to="/Agents">Agents</Link>
            </li>
          </ul>
        </div>

        <div className=" header_right hidden md:flex pr-10"></div>
        <div className=" header_right pr-14 md:hidden">
          <button onClick={() => setOpenDropdown((prev) => !prev)}>
            <MenuIcon sx={{ color: yellow[700] }} />
          </button>
          {openDropdown && <DropdownMenu />}
        </div>
      </header>
    </div>
  );
};
export const Body = ({ btn_txt }) => {
  return (
    <div className=" container mx-auto md:mt-20 mt-10">
      <div className=" bg-sellbg h-[428px] md:h-[650px] md:w-full flex flex-col items-center justify-center">
        <h1 className="  selection:font-semibold text-center text-lg md:text-5xl text-white">
          {" "}
          Sell Your Home With Confidence
        </h1>
        <h3 className=" text-center text-white text-sm md:font-medium md:px-0 px-4 mt-1">
          {" "}
          iEnergy is making it simple to sell your home and move your dream
          forward
        </h3>
      </div>
      <div className="md:h-[496px] h-[686px] flex-col-reverse  flex md:flex-row justify-center items-center mt-3 md:mt-10">
        <div className="w-[343px] md:w-[558px] h-[253px] md:h-[381] md:mr-6">
          <h2 className=" font-bold text-3xl mb-8 hidden md:flex">
            Sell Traditionally With An Agent
          </h2>
          <p className="md:mb-10 w-[320px] md:w-fit mx-4 md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </p>
          <ReusableButton btn_txt="Find an Agent" className=" ml-4" />
        </div>
        <div className=" md:ml-6">
          <h2 className=" font-bold text-xl mb-3 md:hidden">
            Sell Traditionally With An Agent
          </h2>
          <img
            className=" w-[320px] md:w-fit h-[312px] md:h-[400px]"
            src={image1}
            alt=""
          />
        </div>
      </div>
      <h3 className="hidden md:block text-end text-lg font-bold hover:underline mr-20 mb-32 ">
        Learn how to choose an agent
      </h3>
      <div className=" w-full h-[430px] md:h-[413px] md:w-full bg-customBlue flex flex-col md:flex-row md:rounded-none rounded-md justify-between items-center">
        <div className=" h-[161px] w-[299px] md:h-[273px] md:w-[400px] flex flex-col justify-center md:ml-10">
          {" "}
          <h2 className=" text-lg font-bold text-white md:text-start mt-10 md:mt-0">
            Why sell Traditionally?
          </h2>
          <p className="text-white pt-2 md:pt-6 ">
            Access to local market Expertise. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>{" "}
          <p className="text-amber-600 text-end">
            View more <ArrowRight />
          </p>
        </div>
        <div className=" h-[161px] w-[299px] md:h-[273px] md:w-[400px] flex flex-col justify-center md:mr-20 mb-10 md:mb-0">
          {" "}
          <h2 className=" text-lg font-bold text-white">
            How to sell Traditionally
          </h2>
          <p className="text-white pr-4 pt-2 md:pt-6">
            Access to local market Expertise. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>{" "}
          <p className="text-amber-600 text-end">
            View more <ArrowRight />
          </p>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center mt-10 md:mt-32 w-full">
        <h2 className=" text-2xl font-bold text-center">
          Sell Your Home With A Trusted Local Agent
        </h2>
        <p className=" text-center md:w-1/2 mt-5 mx-4 md:mx-0">
          It is easy to sell your home when we connect you to a participating
          partner. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt{" "}
        </p>
      </div>
      <div className=" flex flex-col md:flex-row justify-around mt-5 md:mt-32">
        <div className=" flex items-center justify-center">
          <img
            src={Image2}
            alt=""
            className=" md:w-[600px] w-[320px] h-[312px] md:h-[438px]"
          />
        </div>
        <div className=" flex flex-col items-center justify-center mt-6">
          <input
            className=" w-80 h-10 border-2  border-gray-200 text-center mb-2 py-6"
            type="text"
            placeholder=" Enter your email here"
            value=""
          />
          <ReusableButton btn_txt={"Get started"} />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center mt-24">
        <div className=" w-[261px] md:w-[700px] h-2 rounded-lg bg-customBlue"></div>
        <h2 className=" font-bold text-base mt-5">
          Go To Resources For a Successful Sale.
          <ArrowRight />{" "}
        </h2>
      </div>
      <div className=" h-[267px] w-full md:h-[400px] bg-customBlue flex flex-col items-center justify-center mt-10">
        <h2 className=" text-white font-bold text-2xl mb-2">
          {" "}
          iEnergy Property
        </h2>
        <h4 className=" text-white font-bold mb-2">Explore your homes value</h4>

        <input
          className=" w-64 md:w-1/3 h-10 border-2  rounded-md border-gray-200 text-center mb-2 py-6"
          type="text"
          placeholder=""
          value=""
        />
      </div>

      <div className=" bg-slate-900 h-[439px] md:h-[500px] mt-20 flex flex-col items-center mb-6">
        <h2 className=" font-bold text-xl text-white mt-10 mb-16">
          Frequently Asked Questions
        </h2>
        <p className=" bg-amber-600 px-12 md:py-3 w-[300px] md:w-2/4 text-sm rounded-lg font-bold text-center mb-2 ">
          {" "}
          When Selling my house, where should i begin?
          <ArrowDropDown />
        </p>
        <p className=" bg-amber-600 px-12 md:py-3 w-[300px] md:w-2/4 text-sm rounded-lg font-bold text-center mb-2 ">
          {" "}
          When Selling my house, where should i begin?
          <ArrowDropDown />
        </p>
        <p className=" bg-amber-600 px-12 md:py-3 w-[300px] md:w-2/4 text-sm rounded-lg font-bold text-center mb-2 ">
          {" "}
          When Selling my house, where should i begin?
          <ArrowDropDown />
        </p>
      </div>
    </div>
  );
};
function sellPage() {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default sellPage;
