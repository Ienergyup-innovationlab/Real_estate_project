import React from "react";
import landingimage from "../images/landingpageimage.jpg";
import productCategoryImage from "../images/productCategoriesImage.jpg";
import ServicesCategoryImage from "../images/ServicesCategoriesImage.png";
import { ArrowRightAlt } from "@mui/icons-material";
function Body() {
  return (
    <div className=" block items-center  h-screen">
      <div className=" z-0 pt-10 top-32 h[19rem] md:h-[48rem]">
        <img src={landingimage} alt="" />
      </div>
      <div className=" flex justify-between mt-28 mx-20 justify-item-center">
        <div className="  h-[43rem] w-[33rem]">
          <img
            className="md:h-[32rem] w-[32rem]"
            src={productCategoryImage}
            alt=""
          />
          <h4 className="text-2xl font-bold text-customBlue">
            Product Category
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
            quis auctor sit consectetur dolor nisi volutpat elit. Sed turpis
            convallis velit pulvinar lectus nec habitant.
          </p>
          <h5 className=" font-semibold decoration-from-font pt-7">
            view more categories
            <ArrowRightAlt />
          </h5>
        </div>
        <div className="  h-[43rem] w-[33rem]">
          <img
            className=" md:h-[31rem] w-[31rem]"
            src={ServicesCategoryImage}
            alt=""
          />
          <h4 className="text-2xl font-bold font-sans text-customBlue">
            Services Category
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam proin
            quis auctor sit consectetur dolor nisi volutpat elit. Sed turpis
            convallis velit pulvinar lectus nec habitant.
          </p>
          <h5 className=" font-semibold decoration-from-font pt-7">
            view more categories
            <ArrowRightAlt />
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Body;
