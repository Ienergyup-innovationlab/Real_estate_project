import React from "react";
import { Link } from "react-router-dom";

function propertyDropdownMenu() {
  return (
    <div className=" dropdown_menu flex flex-col h-[200px] w-32 md:top-14 md:right-auto right-32 top-[110px] absolute bg-amber-600 rounded-sm">
      <ul className=" flex flex-col gap-4 text-customBlue font-semibold text-center cursor-pointer divide-y divide-customBlue">
        <li className="pt-2">
          <Link to="/BuyPage">Buy</Link>
        </li>
        <li className="pt-2">
          {" "}
          <Link to="/sellPage">Sell</Link>
        </li>
        <li className="pt-2">
          <Link to="/RentPage">Rent</Link>
        </li>
        <li className="pt-2">
          <Link to="/MortgagePage">Mortgage</Link>
        </li>
      </ul>
    </div>
  );
}

export default propertyDropdownMenu;
