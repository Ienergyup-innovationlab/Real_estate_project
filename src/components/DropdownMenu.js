import React from "react";
import { Link } from "react-router-dom";
import ServicesDropdownMenu from "./servicesDropdownmenu";
import PropertyDropdownMenu from "./propertyDropdownMenu";
import { useState } from "react";

function DropdownMenu() {
  const [openServicesDropdown, setOpenServicesDropdown] = useState(false);
  const [openPropertyDropdown, setOpenPropertyDropdown] = useState(false);

  return (
    <div className=" dropdown_menu flex flex-col h-65 w-32 top-12 right-0 absolute bg-amber-600 rounded-sm">
      <ul className="flex flex-col gap-4 text-customBlue font-semibold text-center cursor-pointer divide-y divide-customBlue">
        <li className=" pt-3">
          <Link to="/home">Home</Link>
        </li>
        <li className="pt-3">
          <Link to="/About">About</Link>
        </li>
        <li
          className="pt-3"
          onClick={() => setOpenPropertyDropdown((prev) => !prev)}
        >
          <Link to="/properties">Properties</Link>

          {openPropertyDropdown && <PropertyDropdownMenu />}
        </li>
        <li
          className="pt-3"
          onClick={() => setOpenServicesDropdown((prev) => !prev)}
        >
          <Link to="/services">Services</Link>

          {openServicesDropdown && <ServicesDropdownMenu />}
        </li>
        <li className="pt-3">
          <Link to="/Agents">Agents</Link>
        </li>
        <li className="mb-0 text-sm text-white bg-customBlue h-12 pt-3 w-32 pl-6 rounded-b-sm">
          <Link to="/login">Login/Sign in</Link>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
