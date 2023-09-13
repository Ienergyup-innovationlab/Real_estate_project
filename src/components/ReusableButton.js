import {} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function ReusableButton({ btn_txt, to }) {
  //this makes the button reusable such that when ever u wanna make use of the button you only have to enter the btn text as a string
  return (
    <div>
      <Link to={to}>
        <button className=" h-8  w-auto md:h-11 md:w-auto  px-2 md:px-8 bg-amber-600 rounded-md text-customBlue font-bold ">
          {btn_txt}
        </button>
      </Link>
    </div>
  );
}

export default ReusableButton;
