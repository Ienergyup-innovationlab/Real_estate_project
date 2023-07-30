import {} from "@mui/material";
import React from "react";

function ReusableButton({ btn_txt }) {
  //this makes the button reusable such that when ever u wanna make use of the button you only have to enter the btn text as a string
  return (
    <div>
      <button className=" h-11 w-32 bg-amber-600 rounded-md text-customBlue font-bold ">
        {btn_txt}
      </button>
    </div>
  );
}

export default ReusableButton;
