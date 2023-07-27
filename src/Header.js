import React, { useState } from "react";
import ReusableButton from "./ReusableButton";
import logo1 from "./images/logo1.png";
import { ArrowDropDown } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { yellow } from "@mui/material/colors";
import DropdownMenu from "./DropdownMenu";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <>
      <header className="header  flex justify-between max-w-full h-14 md:h-20  bg-customBlue items-center sticky z-10 top-0">
        <div className=" header_left pl-9 ">
          <img
            className="w-10 md:w-16 h14 md:h-20 "
            src={logo1}
            alt=" company logo"
          />
        </div>
        <div className="header_middle hidden md:flex font-bold text-white">
          <ul className="flex justify-around">
            <li className=" px-4">Home </li>
            <li className=" px-4">About </li>
            <li className=" px-4">
              Property
              <ArrowDropDown sx={{ color: yellow[700] }} />
            </li>
            <li className=" px-4">
              Services
              <ArrowDropDown sx={{ color: yellow[700] }} />
            </li>
            <li className=" px-4">Agents </li>
          </ul>
        </div>
        <div className=" header_right hidden md:flex pr-10">
          <button>
            <ReusableButton />
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
