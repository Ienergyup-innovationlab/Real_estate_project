import React from "react";
import { Link } from "react-router-dom";

function DropdownMenu() {
  return (
    <div className=" dropdown_menu flex flex-col h-80 w-32 top-12 right-0 absolute bg-amber-600 rounded-sm">
      <ul className=" flex flex-col gap-4 text-customBlue font-semibold text-center cursor-pointer divide-y divide-customBlue">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/BuyPage">Buy</Link>
        </li>
        <li>
          <Link to="/RentPage">Rent</Link>
        </li>
        <li>
          <Link to="/sellPage">Sell</Link>
        </li>
        <li>
          <Link to="/MortgagePage">Mortgage</Link>
        </li>
        <li>
          <Link to="/Agents">Agents</Link>
        </li>
        <li>Help</li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
