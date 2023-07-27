import React from "react";
import landingimage from "./images/landingpageimage.jpg";

function Body() {
  return (
    <div>
      <div className=" z-0 pt-10 top-32 h[19rem] md:h-[48rem]">
        <img src={landingimage} alt="" />
      </div>
    </div>
  );
}

export default Body;
