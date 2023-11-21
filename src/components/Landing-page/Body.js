import React from "react";
import landingimage from "../Landing-page/images/landingpageimage.jpg";
import extra1 from "../Landing-page/images/extra1.jpg";
import extra2 from "../Landing-page/images/extra2.jpg";
import extra3 from "../Landing-page/images/extra3.jpg";
import newsletterimage from "../Landing-page/images/newsletterimage.png";
import productCategoryImage from "../Landing-page/images/productCategoriesImage.jpg";
import ServicesCategoryImage from "../Landing-page/images/ServicesCategoriesImage.png";
import { ArrowRight, ArrowRightAlt, WhatsApp } from "@mui/icons-material";
import ReusableButton from "../ReusableButton";
import BuyerAgentSignup from "../BuyerAgentSignup";
import { PropertySearch } from "../home-screen/HomePage";
import Card from "./Card";
import homeData from "./HomeData";
import HouseImage from "../Landing-page/images/HouseImage.avif";
import { Link } from "react-router-dom";
// import TestimonialCard from "../TestimonialCard";

function Body() {
  return (
    <div className=" container mx-auto">
      <div className=" mt-20 ">
        <img
          src={landingimage}
          alt=""
          className=" z-0 mt-3 md:mt-10 h-[40rem] w-screen object-cover "
        />
        <div className="bg-black/30 absolute top-0 left-0 w-full h-[40rem] mt-20" />
        <PropertySearch />
      </div>

      <div className="flex-col  md:flex-row flex justify-evenly items-center mt-10 md:mt-14">
        <div className="  md:h-[43rem] md:w-[33rem] flex flex-col items-center justify-center">
          <img
            className="w-[21rem] h-[19rem] md:h-[30rem] md:w-[30rem] "
            src={productCategoryImage}
            alt=""
          />
          <div>
            <h4 className=" sm:mr-4 text-2xl font-bold text-customBlue text-start md:ml-4 ml-6 cursor-pointer">
              <Link to="/properties">Product Category</Link>
            </h4>
            <p className=" text-xs md:text-base text-start md:text-left md:px-4 px-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              proin quis auctor sit consectetur dolor nisi volutpat elit. Sed
              turpis convallis velit pulvinar lectus nec habitant.
            </p>
            <h5 className=" font-semibold decoration-from-font pt-7 text-end cursor-pointer">
              <Link to="/properties">view more categories</Link>
              <ArrowRightAlt />
            </h5>
          </div>
        </div>
        <div className="md:h-[43rem] md:w-[33rem] flex flex-col items-center justify-center">
          <img
            className="w-[21rem] h-[19rem]  md:h-[30rem] md:w-[30rem] "
            src={ServicesCategoryImage}
            alt=""
          />
          <div>
            <h4 className="text-2xl font-bold font-sans text-customBlue text-start md:ml-4 ml-6 cursor-pointer">
              <Link to="/services">Services Category</Link>
            </h4>
            <p className=" text-xs md:text-base text-start md:text-left md:px-4 px-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              proin quis auctor sit consectetur dolor nisi volutpat elit. Sed
              turpis convallis velit pulvinar lectus nec habitant.
            </p>
            <h5 className=" font-semibold decoration-from-font pt-7 text-end cursor-pointer">
              <Link to="/services">view more categories</Link>
              <ArrowRightAlt />
            </h5>
          </div>
        </div>
      </div>
      <div className=" flex-col h-fit md:h-[40rem] bg-customBlue flex md:flex-row items-center justify-evenly">
        <BuyerAgentSignup title="Buyer" />
        <BuyerAgentSignup title="Agent" />
        <BuyerAgentSignup title="Services" />
      </div>

      <div>
        <h1 className="text-center text-customBlue text-3xl font-bold mt-20">
          Latest Properties
        </h1>
        <div className="lg:grid lg:gap-x-12 lg:gap-y-12 lg:grid-cols-4 mx-14 pb mt-10  ">
          {homeData.map((home) => (
            <Card home={home} key={home.id} HouseImage={HouseImage} />
          ))}
        </div>
      </div>
      <h4 className=" text-center font-bold text-customBlue font-sans text-xl ">
        what clients say about us!
      </h4>
      <div className=""> {/* <TestimonialCard /> */}</div>
      <div className=" flex flex-col items-center ">
        {" "}
        <img
          className="md:hidden w-[21rem] h-[16rem] my-2"
          src={extra1}
          alt=""
        />
        <img
          className="md:hidden w-[21rem] h-[16rem] my-2"
          src={extra2}
          alt=""
        />
        <button className=" md:hidden font-bold pb-10">
          view more <ArrowRight />
        </button>
      </div>
      <div className=" h-[43rem] w-auto md:bg-customBlue mb-20 flex flex-col justify-center items-center md:pb-20">
        <div className="text-center">
          <h2 className="font-bold text-customBlue md:text-amber-600 font-sans text-lg md:text-xl md:pb-10">
            Sustainable family-friendly residence and Satisfactory Properties
          </h2>
          <p className=" font-bold text-customBlue p-4 md:text-white text-center text-sm md:text-lg">
            {" "}
            we offer a wide range of properties,from luxirious estate to cozy
            appartment and property management services.cathering to all budget
            and preferences, with our expert team and user friendly, interface,
            finding your dream property or attracting the right buyer has never
            been easier.Explore our listings today and start your journey with
            us!
          </p>
          <img
            className="md:hidden w-full h-[16rem] my-2"
            src={extra3}
            alt=""
          />
          <div className=" flex flex-col items-center md:hidden">
            <img src={newsletterimage} alt="" />
          </div>
          <h3 className="font-bold text-customBlue md:text-amber-600 md:pt-5 text-xl">
            NEWSLETTER
          </h3>
          <h3 className=" text-customBlue md:text-white font-bold text-xs md:text-base ">
            Stay upto date with our latest news and products.
          </h3>
        </div>
        <div className=" hidden md:flex flex-row pt-10 md:justify-self-auto items-center">
          <input
            className="w-36 h-10  bg-slate-50"
            type="text"
            placeholder="Email"
            value=""
          />

          <ReusableButton btn_txt="subscribe" />
        </div>
        <div className=" flex flex-row justify-around pt-2 md:hidden">
          <input
            className="w-36 h-10 border-2 border-customBlue"
            type="text"
            placeholder="Email"
            value=""
          />
          <button className="w-36 h-10 bg-customBlue text-white font-bold">
            Subscribe
          </button>
        </div>{" "}
        <h3 className="md:hidden text-customBlue font-bold">
          We promise not to spam you.
        </h3>
        <br />
        <button className="hidden md:block h-8  w-auto md:h-11 md:w-auto  px-2 md:px-8 bg-amber-600 rounded-full text-customBlue font-bold ">
          <WhatsApp />
          we are here for you
        </button>
      </div>
    </div>
  );
}

export default Body;
