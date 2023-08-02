import {} from "@mui/material";
import React from "react";

function ReusableButton({ btn_txt }) {
  //this makes the button reusable such that when ever u wanna make use of the button you only have to enter the btn text as a string
  return (
    <div>
      <button className=" h-11 w-32 bg-none rounded-md text-amber-600 font-bold border-2 border-amber-600">
        {btn_txt}
      </button>
    </div>
  );
}

export default ReusableButton;
