import React from "react";

function DropdownMenu() {
  return (
    <div className=" dropdown_menu flex flex-col h-60 w-32 top-12 right-0 absolute bg-amber-600 rounded-sm">
      <ul className=" flex flex-col gap-4 text-customBlue font-semibold items-center cursor-pointer">
        <li>Home</li>
        <li>About</li>
        <li>Properties</li>
        <li>Services</li>
        <li>Agents</li>
        <li className=" text-sm text-white bg-customBlue h-12 pt-3 w-32 pl-6 rounded-b-sm">
          Login/Sign in
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
