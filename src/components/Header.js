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
  return (
    <>
      <header className="header md:h-20 flex justify-between max-w-full h-14  bg-customBlue items-center fixed z-10 top-0" style={{ width: "100%"}}>
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
            <li className=" px-4">
              <Link to="/home">Home</Link>{" "}
            </li>
            <li className=" px-4">About </li>
            <li
              className=" px-4"
              onClick={() => setOpenPropertyDropdown((prev) => !prev)}
            >
              Property
              <ArrowDropDown sx={{ color: yellow[700] }} />
              {openPropertyDropdown && <PropertyDropdownMenu />}
            </li>
            <li
              className=" px-4"
              onClick={() => setOpenServicesDropdown((prev) => !prev)}
            >
              Services
              <ArrowDropDown sx={{ color: yellow[700] }} />
              {openServicesDropdown && <ServicesDropdownMenu />}
            </li>
            <li className=" px-4">Agents </li>
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
