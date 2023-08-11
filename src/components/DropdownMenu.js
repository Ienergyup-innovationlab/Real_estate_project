import React from "react";
import { Link } from "react-router-dom";

function DropdownMenu() {
  return (
    <div className=" dropdown_menu flex flex-col h-60 w-32 top-12 right-0 absolute bg-amber-600 rounded-sm">
      <ul className=" flex flex-col gap-4 text-customBlue font-semibold text-center cursor-pointer divide-y divide-customBlue">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>About</li>
        <li>Properties</li>
        <li>Services</li>
        <li>
          <Link to="/AgentSignup">Agents</Link>
        </li>
        <li className=" text-sm text-white bg-customBlue h-12 pt-3 w-32 pl-6 rounded-b-sm">
          <Link to="/login">Login/Sign in</Link>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
