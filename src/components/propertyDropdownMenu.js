import React from "react";
import { Link } from "react-router-dom";

function propertyDropdownMenu() {
  return (
    <div className=" dropdown_menu flex flex-col h-40 w-32 md:top-14 md:right-auto right-32 top-[80px] absolute bg-amber-600 rounded-sm">
      <ul className=" flex flex-col gap-4 text-customBlue font-semibold text-center cursor-pointer divide-y divide-customBlue">
        <li>
          <Link to="/BuyPage">Buy</Link>
        </li>
        <li>
          {" "}
          <Link to="/sellPage">Sell</Link>
        </li>
        <li>
          <Link to="/RentPage">Rent</Link>
        </li>
        <li>
          <Link to="/MortgagePage">Mortgage</Link>
        </li>
      </ul>
    </div>
  );
}

export default propertyDropdownMenu;
