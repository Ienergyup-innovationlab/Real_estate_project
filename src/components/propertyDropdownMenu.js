import React from "react";

function propertyDropdownMenu() {
  return (
    <div className=" dropdown_menu flex flex-col h-40 w-32 top-14  absolute bg-amber-600 rounded-sm">
      <ul className=" flex flex-col gap-4 text-customBlue font-semibold text-center cursor-pointer divide-y divide-customBlue">
        <li>Buy</li>
        <li>Sell</li>
        <li>Rent</li>
        <li>Mortgage</li>
      </ul>
    </div>
  );
}

export default propertyDropdownMenu;
