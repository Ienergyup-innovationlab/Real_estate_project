import React from "react";
import landingimage from "../images/landingpageimage.jpg";
import productCategoryImage from "../images/productCategoriesImage.jpg";
import ServicesCategoryImage from "../images/ServicesCategoriesImage.png";
import { ArrowRightAlt } from "@mui/icons-material";
import ReusableButton from "./ReusableButton";
import TransparentReusableBtn from "./TransparentReusableBtn";
// import BuyerAgentSignup from "./BuyerAgentSignup";
function Body(btn_txt) {
  return (
    <div className=" container mx-auto">
      <div className=" z-0 pt-10 top-32 h[19rem] md:h-[48rem]">
        <img src={landingimage} alt="" />
      </div>
      <div className=" flex justify-evenly mt-20 pr-10">
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
            className=" md:h-[32rem] w-[32rem]"
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
      <div className="h-[40rem] bg-customBlue">
        {/* <BuyerAgentSignup /> */}
      </div>
      <h4 className=" text-center font-bold text-customBlue font-sans text-xl ">
        what clients say about us!
      </h4>

      <div className=" h-[43rem] w-auto bg-customBlue mb-20 flex flex-col justify-center items-center pb-20">
        <h2 className="font-bold text-amber-600 font-sans text-xl pb-10">
          Sustainable family-friendly residence and Satisfactory Properties
        </h2>
        <p className=" font-bold text-white text-center text-lg">
          {" "}
          we offer a wide range of properties,from luxirious estate to cozy
          appartment and property
          <br /> management services.cathering to all budget and preferences,
          with our expert team and user friendly,
          <br /> interface, finding your dream property or attracting the right
          buyer has never been easier.Explore our
          <br /> listings today and start your journey with us!
        </p>
        <h3 className="font-bold text-amber-600 pt-5 text-xl">NEWSLETTER</h3>
        <h3 className="text-white font-medium">
          {" "}
          Stay upto date with our latest news and products.
        </h3>

        <div className="flex pt-20">
          <TransparentReusableBtn btn_txt="Email" />
          <ReusableButton btn_txt="subscribe" />
        </div>

        <button className=" pt-6">
          <ReusableButton btn_txt="we are here for you" />{" "}
        </button>
      </div>
    </div>
  );
}

export default Body;
