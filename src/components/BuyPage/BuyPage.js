import { Header } from "../sell-page/sellPage";
import Houses from "./images/Houses.png";
import { FaBed, FaBath } from "react-icons/fa";
import ReusableButton from "../ReusableButton";
import { ArrowRight } from "@mui/icons-material";
import Image2 from "../sell-page/images/Image2.png";
import arrow from "../home-screen/images/arrow.png";
import Slider from "react-slick";
import background1 from "../home-screen/images/background1.png";
import background2 from "../home-screen/images/background2.png";
import background3 from "../home-screen/images/background3.png";
import Footer from "../Footer";

const CustomPrevArrow = (props) => (
  <button {...props} className="custom-prev-button">
    <img src={arrow} alt={arrow} width="25px" height="25px" />
  </button>
);

const CustomNextArrow = (props) => (
  <button {...props} className="custom-next-button">
    <img src={arrow} alt={arrow} width="25px" height="25px" />
  </button>
);

const MyCarousel = ({ images }) => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Change slide every 4 seconds
    nextArrow: <CustomPrevArrow />, // Custom previous button
    prevArrow: <CustomNextArrow />, // Custom next button
    responsive: [
      {
        breakpoint: 768, // breakpoint for smaller screens
        settings: {
          slidesToShow: 3, // Display 3 slides on smaller screens
        },
      },
      {
        breakpoint: 1024, //  breakpoint for larger screens
        settings: {
          slidesToShow: 4, // Display 4 slides on larger screens
        },
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`${index}`} className="slide-image" />
            <div class="image-title  text-center  font-bold">
              4 Bedroom Flat <br />
              Banana Island, Lagos
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
const Car_images = [
  background1,
  background2,
  background3,
  background1,
  background2,
  background3,
];

function BuyPage() {
  return (
    <div>
      <Header />
      <div className=" container mx-auto md:mt-20 mt-10">
        <div className=" bg-buybg h-[428px] md:h-[650px] md:w-full flex flex-col items-center justify-center">
          <h1 className="  selection:font-semibold text-center text-lg md:text-5xl text-white">
            {" "}
            Buy Your Home With Confidence
          </h1>
          <h3 className=" text-center text-white text-sm md:font-medium md:px-0 px-4 mt-1">
            {" "}
            iEnergy is making it simple to sell your home and move your dream
            forward
          </h3>
        </div>
        <div className="py-[2.5rem] px-[1.8rem] ">
          <div className="w-auto h-[fit]  shadow-lg rounded-xl p-[1.4rem] md:pl-[2.5rem]  border-2 border-gray-100 flex flex-col md:flex-row justify-around ">
            <div className="">
              <img
                className=" rounded-lg h-[fit] w-auto md:h-[300px] md:w-[450px] cursor-pointer mt-5"
                src={Houses}
                alt="Agent"
              />
            </div>
            <div>
              <div className="flex flex-col justify-center mb-5">
                <h1 className="text-xl font-semibold  cursor-pointer">
                  4 Bedroom Bungalow
                </h1>
                <div>
                  <div>
                    <p className="font-light text-[0.85rem] tracking-widest mb-[0.23rem]">
                      123 Obodo, Venue, Houston, Texas
                    </p>
                  </div>
                  <div className="w-[14.5rem] flex justify-around font-light mb-[0.5rem]">
                    <div className="w-[7rem] flex flex-between">
                      <FaBed className="mr-[0.45rem]" />
                      <p className="text-[0.825rem]">4 Bedroom </p>
                    </div>
                    <div className="w-[7rem] flex flex-between">
                      <FaBath className="mr-[0.45rem]" />
                      <p className="text-[0.825rem]">5 Bathroom </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-around w-[15.2rem] ml-[0.4rem] mb-[0.25rem]">
                  <p className="font-semibold text-[0.56rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore sit neque iste, reprehenderit totam delectus esse rem
                    dolore, officia, facilis atque? Rem sapiente quaerat odio
                    aperiam placeat at explicabo cumque!
                  </p>
                </div>
                <p className="font-semibold text-[1.45rem] text-center mb-[0.95rem] mt-[0.35rem]">
                  N999,000.00
                </p>
                <div className="flex justify-between w-[16rem] ">
                  <button className="border-2 border-amber-300 bg-inherit p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                    More
                  </button>
                  <button className="border-2 bg-amber-400 p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[2.5rem] px-[1.8rem] ">
          <div className="w-auto h-[fit]  shadow-lg rounded-xl p-[1.4rem] md:pl-[2.5rem]  border-2 border-gray-100 flex flex-col md:flex-row justify-around ">
            <div className="">
              <img
                className=" rounded-lg h-[fit] w-auto md:h-[300px] md:w-[450px] cursor-pointer mt-5"
                src={Houses}
                alt="Agent"
              />
            </div>
            <div>
              <div className="flex flex-col justify-center mb-5">
                <h1 className="text-xl font-semibold  cursor-pointer">
                  4 Bedroom Bungalow
                </h1>
                <div>
                  <div>
                    <p className="font-light text-[0.85rem] tracking-widest mb-[0.23rem]">
                      123 Obodo, Venue, Houston, Texas
                    </p>
                  </div>
                  <div className="w-[14.5rem] flex justify-around font-light mb-[0.5rem]">
                    <div className="w-[7rem] flex flex-between">
                      <FaBed className="mr-[0.45rem]" />
                      <p className="text-[0.825rem]">4 Bedroom </p>
                    </div>
                    <div className="w-[7rem] flex flex-between">
                      <FaBath className="mr-[0.45rem]" />
                      <p className="text-[0.825rem]">5 Bathroom </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-around w-[15.2rem] ml-[0.4rem] mb-[0.25rem]">
                  <p className="font-semibold text-[0.56rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore sit neque iste, reprehenderit totam delectus esse rem
                    dolore, officia, facilis atque? Rem sapiente quaerat odio
                    aperiam placeat at explicabo cumque!
                  </p>
                </div>
                <p className="font-semibold text-[1.45rem] text-center mb-[0.95rem] mt-[0.35rem]">
                  N999,000.00
                </p>
                <div className="flex justify-between w-[16rem] ">
                  <button className="border-2 border-amber-300 bg-inherit p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                    More
                  </button>
                  <button className="border-2 bg-amber-400 p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-[2.5rem] px-[1.8rem] ">
          <div className="w-auto h-[fit]  shadow-lg rounded-xl p-[1.4rem] md:pl-[2.5rem]  border-2 border-gray-100 flex flex-col md:flex-row justify-around ">
            <div className="">
              <img
                className=" rounded-lg h-[fit] w-auto md:h-[300px] md:w-[450px] cursor-pointer mt-5"
                src={Houses}
                alt="Agent"
              />
            </div>
            <div>
              <div className="flex flex-col justify-center mb-5">
                <h1 className="text-xl font-semibold  cursor-pointer">
                  4 Bedroom Bungalow
                </h1>
                <div>
                  <div>
                    <p className="font-light text-[0.85rem] tracking-widest mb-[0.23rem]">
                      123 Obodo, Venue, Houston, Texas
                    </p>
                  </div>
                  <div className="w-[14.5rem] flex justify-around font-light mb-[0.5rem]">
                    <div className="w-[7rem] flex flex-between">
                      <FaBed className="mr-[0.45rem]" />
                      <p className="text-[0.825rem]">4 Bedroom </p>
                    </div>
                    <div className="w-[7rem] flex flex-between">
                      <FaBath className="mr-[0.45rem]" />
                      <p className="text-[0.825rem]">5 Bathroom </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-around w-[15.2rem] ml-[0.4rem] mb-[0.25rem]">
                  <p className="font-semibold text-[0.56rem]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore sit neque iste, reprehenderit totam delectus esse rem
                    dolore, officia, facilis atque? Rem sapiente quaerat odio
                    aperiam placeat at explicabo cumque!
                  </p>
                </div>
                <p className="font-semibold text-[1.45rem] text-center mb-[0.95rem] mt-[0.35rem]">
                  N999,000.00
                </p>
                <div className="flex justify-between w-[16rem] ">
                  <button className="border-2 border-amber-300 bg-inherit p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                    More
                  </button>
                  <button className="border-2 bg-amber-400 p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" flex flex-col justify-center items-center mt-10 md:mt-32 w-full">
          <h2 className=" text-2xl font-bold text-center">
            Buy Your Home With A Trusted Local Agent
          </h2>
          <p className=" text-center md:w-1/2 mt-5 mx-4 md:mx-0">
            It is easy to buy your home when we connect you to a participating
            partner. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt{" "}
          </p>
        </div>
        <div className=" flex flex-col md:flex-row justify-around mt-5 md:mt-32">
          <div className=" flex items-center justify-center">
            <img
              src={Image2}
              alt=""
              className=" md:w-[600px] w-[320px] h-[312px] md:h-[438px]"
            />
          </div>
          <div className=" flex flex-col items-center justify-center mt-6">
            <p className=" font-bold text-customBlue mb-3 text-center">
              Stay upto date with our latest news and products
            </p>
            <input
              className=" w-80 h-10 border-2  border-gray-200 text-center mb-2 py-6"
              type="text"
              placeholder=" Enter your email here"
              value=""
            />
            <ReusableButton btn_txt={"Get started"} />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center mt-24">
          <div className=" w-[261px] md:w-[700px] h-2 rounded-lg bg-customBlue"></div>
          <h2 className=" font-bold text-base mt-5 cursor-pointer ">
            Go To Resources For a Successful Buy.
            <ArrowRight />{" "}
          </h2>
        </div>
        <div className=" h-[40-px] md:h-[100px] bg-slate-400 mt-10 font-bold text-customBlue text-center flex flex-row items-center justify-center md:text-3xl">
          Top listed deals.
        </div>
        <div
          style={{ width: "90%", margin: "0 auto", padding: "3%" }}
          className="height"
        >
          <MyCarousel images={Car_images} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default BuyPage;
