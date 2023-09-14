import React, { useState } from "react";
import ReusableButton from "./ReusableButton";
import logo1 from "../images/logo1.png";
import { ArrowDropDown } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { yellow } from "@mui/material/colors";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
import PropertyDropdownMenu from "./propertyDropdownMenu";
import ServicesDropdownMenu from "./servicesDropdownmenu";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openPropertyDropdown, setOpenPropertyDropdown] = useState(false);
  const [openServicesDropdown, setOpenServicesDropdown] = useState(false);

  const selected = window.location.pathname;
  return (
    <>
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
            <li
              className={` px-4  hover:text-amber-600 ${
                selected === "/home" ? "text-amber-600" : "text-white"
              }`}
            >
              <Link to="/home">Home</Link>{" "}
            </li>
            <li
              className={` px-4 hover:text-amber-600 ${
                selected === "/About" ? "text-amber-600" : "text-white"
              }`}
            >
              <Link to="/About">About</Link>{" "}
            </li>
            <li
              className={` px-4 hover:text-amber-600 ${
                selected === "/properties" ? "text-amber-600" : "text-white"
              }`}
              onMouseEnter={() => setOpenPropertyDropdown(true)}
              onMouseLeave={() => setOpenPropertyDropdown(false)}
            >
              <Link to="/properties">Properties</Link>
              <ArrowDropDown sx={{ color: yellow[700] }} />
              {openPropertyDropdown && <PropertyDropdownMenu />}
            </li>
            <li
              className=" px-4  hover:text-amber-600 "
              onMouseEnter={() => setOpenServicesDropdown(true)}
              onMouseLeave={() => setOpenServicesDropdown(false)}
            >
              Services
              <ArrowDropDown sx={{ color: yellow[700] }} />
              {openServicesDropdown && <ServicesDropdownMenu />}
            </li>
            <li
              className={`px-4  hover:text-amber-600 ${
                selected === "/Agents" ? "text-amber-600" : "text-white"
              }`}
            >
              <Link to="/Agents">Agents</Link>
            </li>
          </ul>
        </div>
        <div className=" header_right hidden md:flex pr-10">
          <button>
            <Link to="/login">
              {/*--the reUsable btn txt is used to enter the text u want to be displayed on the btn--*/}
              <ReusableButton btn_txt="Sign in" />
            </Link>
          </button>
        </div>
        <div className=" header_right pr-14 md:hidden">
          <button onClick={() => setOpenDropdown((prev) => !prev)}>
            <MenuIcon sx={{ color: yellow[700] }} />
          </button>
          {openDropdown && <DropdownMenu />}
        </div>
      </header>
    </>
  );
}

export default Header;
