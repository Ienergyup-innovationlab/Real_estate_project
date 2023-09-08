import Footer from "./Footer";
import Header from "./Header";
import Client from "../images/clientimg.png";
import Houses from "../images/houses.png";
import carou1 from "../images/carou1.png";
import carou2 from "../images/carou2.png";
import carou3 from "../images/carou3.png";
// import carou4 from "../images/carou4.png";
import carou5 from "../images/carou5.png";
import carou6 from "../images/carou6.png";
import { FaBed, FaBath } from "react-icons/fa";
// import Carousel from "react-multi-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function BuyPage() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  //   the commented code is for the screen responsiveness of the multi-carousel-framework which i earlier used before embla
  //   const responsive = {
  //     superLargeDesktop: {
  //       breakpoint: { max: 4000, min: 3000 },
  //       items: 5,
  //     },
  //     desktop: {
  //       breakpoint: { max: 3000, min: 1024 },
  //       items: 4,
  //     },
  //     tablet: {
  //       breakpoint: { max: 1024, min: 464 },
  //       items: 4,
  //     },
  //     mobile: {
  //       breakpoint: { max: 464, min: 0 },
  //       items: 1,
  //     },`
  //   };
  function revealInput(e) {
    // this reveals and hides the email input field on the page
    const input = document.getElementById("input");
    if (input.classList.contains("invisible")) {
      input.classList.add("visible");
      input.classList.add("m-2");
      input.classList.remove("invisible");
    } else {
      input.classList.remove("visible");
      input.classList.remove("m-2");
      input.classList.add("invisible");
    }
  }
  return (
    <>
      <Header />
      <div className="bg-Buybg w-full h-[22rem] p-[1rem] bg-cover -mb-[0.45rem] flex flex-col place-items-center justify-center">
        <h1 className="text-white text-center font-bold text-[1.5rem] md:text-[2.25rem] mb-[0.75rem] md:mb-[0.3rem]">
          Buy Your Home With Confidence
        </h1>
        <p className="text-white text-center">
          iEnergy is making it simpler to buy your home and move your dreams
          forward
        </p>
      </div>
      <div className="mb-[3rem]">
        {/* the below div is exactly the design of how each house div should appear on the page only the parameters from the data needed to be changed  */}
        {/* <div className="py-[2.5rem] px-[1.8rem] -mb-[4rem]">
          {data.doc.map((houses, index = houses.id) => {
            return (
              <div className="w-full h-fit md:h-[18rem] shadow-lg rounded-xl p-[1.9rem] md:p-[0.75rem] pt-[3rem] md:pt-[5rem] border-2 border-gray-100 flex flex-col md:flex-row justify-between mb-[2rem]">
                <div className="w-[16.6rem] md:w-[20.5rem] -mt-[2.15rem] md:-mt-[4.15rem] h-[13.3rem] md:h-[17rem] lg:w-[26rem] ">
                  <div>
                    <img
                      className="mb-[0.8rem] rounded-lg h-[13.05rem] md:h-[16.75rem] w-full cursor-pointer"
                      src={houses.images[0]}
                      alt="Agent"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-xl font-semibold mt-[1.14rem] md:-mt-[3.85rem] mb-[0.7rem] cursor-pointer">
                    {houses.name}
                  </h1>
                  <div>
                    <div>
                      <p className="font-light text-[0.85rem] tracking-widest mb-[0.23rem]">
                        {houses.location}
                      </p>
                    </div>
                    <div className="w-[14.5rem] flex justify-around font-light mb-[0.5rem]">
                      <div className="w-[7rem] flex flex-between">
                        <FaBed className="mr-[0.45rem]" />
                        <p className="text-[0.825rem]">4 {houses.bedrooms} </p>
                      </div>
                      <div className="w-[7rem] flex flex-between">
                        <FaBath className="mr-[0.45rem]" />
                        <p className="text-[0.825rem]">5 {houses.baths}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-around w-[15.2rem] ml-[0.4rem] mb-[0.25rem]">
                    <p className="font-semibold text-[0.56rem]">
                      {houses.description}
                    </p>
                  </div>
                  <p className="font-semibold text-[1.45rem] text-center mb-[0.95rem] mt-[0.35rem]">
                    {houses.price}
                  </p>
                  <div className="flex justify-between w-[16rem]">
                    <button className="border-2 border-amber-300 bg-inherit p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                      More
                    </button>
                    <button className="border-2 bg-amber-400 p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                      Lease
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
        <div className="py-[2.5rem] px-[1.8rem] -mb-[4rem]">
          <div className="w-full h-fit md:h-[18rem] shadow-lg rounded-xl p-[1.9rem] md:p-[0.75rem] pt-[3rem] md:pt-[5rem] border-2 border-gray-100 flex flex-col md:flex-row justify-between mb-[2rem]">
            <div className="w-[16.6rem] md:w-[20.5rem] -mt-[2.15rem] md:-mt-[4.15rem] h-[13.3rem] md:h-[17rem] lg:w-[26rem] ">
              <div>
                <img
                  className="mb-[0.8rem] rounded-lg h-[13.05rem] md:h-[16.75rem] w-full cursor-pointer"
                  src={Houses}
                  alt="Agent"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-semibold mt-[1.14rem] md:-mt-[3.85rem] mb-[0.7rem] cursor-pointer">
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
              <div className="flex justify-between w-[16rem]">
                <button className="border-2 border-amber-300 bg-inherit p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                  More
                </button>
                <button className="border-2 bg-amber-400 p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                  Buy
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-fit md:h-[18rem] shadow-lg rounded-xl p-[1.9rem] md:p-[0.75rem] pt-[3rem] md:pt-[5rem] border-2 border-gray-100 flex flex-col md:flex-row justify-between mb-[2rem]">
            <div className="w-[16.6rem] md:w-[20.5rem] -mt-[2.15rem] md:-mt-[4.15rem] h-[13.3rem] md:h-[17rem] lg:w-[26rem] ">
              <div>
                <img
                  className="mb-[0.8rem] rounded-lg h-[13.05rem] md:h-[16.75rem] w-full cursor-pointer"
                  src={Houses}
                  alt="Agent"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-semibold mt-[1.14rem] md:-mt-[3.85rem] mb-[0.7rem] cursor-pointer">
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
              <div className="flex justify-between w-[16rem]">
                <button className="border-2 border-amber-300 bg-inherit p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                  More
                </button>
                <button className="border-2 bg-amber-400 p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                  Buy
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-fit md:h-[18rem] shadow-lg rounded-xl p-[1.9rem] md:p-[0.75rem] pt-[3rem] md:pt-[5rem] border-2 border-gray-100 flex flex-col md:flex-row justify-between mb-[2rem]">
            <div className="w-[16.6rem] md:w-[20.5rem] -mt-[2.15rem] md:-mt-[4.15rem] h-[13.3rem] md:h-[17rem] lg:w-[26rem] ">
              <div>
                <img
                  className="mb-[0.8rem] rounded-lg h-[13.05rem] md:h-[16.75rem] w-full cursor-pointer"
                  src={Houses}
                  alt="Agent"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-semibold mt-[1.14rem] md:-mt-[3.85rem] mb-[0.7rem] cursor-pointer">
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
              <div className="flex justify-between w-[16rem]">
                <button className="border-2 border-amber-300 bg-inherit p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                  More
                </button>
                <button className="border-2 bg-amber-400 p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                  Buy
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-fit md:h-[18rem] shadow-lg rounded-xl p-[1.9rem] md:p-[0.75rem] pt-[3rem] md:pt-[5rem] border-2 border-gray-100 flex flex-col md:flex-row justify-between mb-[2rem]">
            <div className="w-[16.6rem] md:w-[20.5rem] -mt-[2.15rem] md:-mt-[4.15rem] h-[13.3rem] md:h-[17rem] lg:w-[26rem] ">
              <div>
                <img
                  className="mb-[0.8rem] rounded-lg h-[13.05rem] md:h-[16.75rem] w-full cursor-pointer"
                  src={Houses}
                  alt="Agent"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-semibold mt-[1.14rem] md:-mt-[3.85rem] mb-[0.7rem] cursor-pointer">
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
              <div className="flex justify-between w-[16rem]">
                <button className="border-2 border-amber-300 bg-inherit p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                  More
                </button>
                <button className="border-2 bg-amber-400 p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                  Buy
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-fit md:h-[18rem] shadow-lg rounded-xl p-[1.9rem] md:p-[0.75rem] pt-[3rem] md:pt-[5rem] border-2 border-gray-100 flex flex-col md:flex-row justify-between mb-[2rem]">
            <div className="w-[16.6rem] md:w-[20.5rem] -mt-[2.15rem] md:-mt-[4.15rem] h-[13.3rem] md:h-[17rem] lg:w-[26rem] ">
              <div>
                <img
                  className="mb-[0.8rem] rounded-lg h-[13.05rem] md:h-[16.75rem] w-full cursor-pointer"
                  src={Houses}
                  alt="Agent"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-semibold mt-[1.14rem] md:-mt-[3.85rem] mb-[0.7rem] cursor-pointer">
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
              <div className="flex justify-between w-[16rem]">
                <button className="border-2 border-amber-300 bg-inherit p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                  More
                </button>
                <button className="border-2 bg-amber-400 p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                  Buy
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-fit md:h-[18rem] shadow-lg rounded-xl p-[1.9rem] md:p-[0.75rem] pt-[3rem] md:pt-[5rem] border-2 border-gray-100 flex flex-col md:flex-row justify-between mb-[2rem]">
            <div className="w-[16.6rem] md:w-[20.5rem] -mt-[2.15rem] md:-mt-[4.15rem] h-[13.3rem] md:h-[17rem] lg:w-[26rem] ">
              <div>
                <img
                  className="mb-[0.8rem] rounded-lg h-[13.05rem] md:h-[16.75rem] w-full cursor-pointer"
                  src={Houses}
                  alt="Agent"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-semibold mt-[1.14rem] md:-mt-[3.85rem] mb-[0.7rem] cursor-pointer">
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
              <div className="flex justify-between w-[16rem]">
                <button className="border-2 border-amber-300 bg-inherit p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                  More
                </button>
                <button className="border-2 bg-amber-400 p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                  Buy
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-fit md:h-[18rem] shadow-lg rounded-xl p-[1.9rem] md:p-[0.75rem] pt-[3rem] md:pt-[5rem] border-2 border-gray-100 flex flex-col md:flex-row justify-between mb-[2rem]">
            <div className="w-[16.6rem] md:w-[20.5rem] -mt-[2.15rem] md:-mt-[4.15rem] h-[13.3rem] md:h-[17rem] lg:w-[26rem] ">
              <div>
                <img
                  className="mb-[0.8rem] rounded-lg h-[13.05rem] md:h-[16.75rem] w-full cursor-pointer"
                  src={Houses}
                  alt="Agent"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-semibold mt-[1.14rem] md:-mt-[3.85rem] mb-[0.7rem] cursor-pointer">
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
              <div className="flex justify-between w-[16rem]">
                <button className="border-2 border-amber-300 bg-inherit p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                  More
                </button>
                <button className="border-2 bg-amber-400 p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">
                  Buy
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-fit md:h-[18rem] shadow-lg rounded-xl p-[1.9rem] md:p-[0.75rem] pt-[3rem] md:pt-[5rem] border-2 border-gray-100 flex flex-col md:flex-row justify-between mb-[2rem]">
            <div className="w-[16.6rem] md:w-[20.5rem] -mt-[2.15rem] md:-mt-[4.15rem] h-[13.3rem] md:h-[17rem] lg:w-[26rem] ">
              <div>
                <img
                  className="mb-[0.8rem] rounded-lg h-[13.05rem] md:h-[16.75rem] w-full cursor-pointer"
                  src={Houses}
                  alt="Agent"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-semibold mt-[1.14rem] md:-mt-[3.85rem] mb-[0.7rem] cursor-pointer">
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
              <div className="flex justify-between w-[16rem]">
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
      <div className="px-[3.25rem] pb-[3rem]">
        <div className="text-center px-[1.2rem] mb-[4.5rem]">
          <h1 className="font-bold text-[1.25rem] mb-[1rem]">
            Buy Your Home from a Trusted Local Agent
          </h1>
          <p className="text-[0.78rem]">
            it is easy to buy your Home when we connect you to a participating
            partner.
          </p>
          <p className="text-[0.78rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta qui,
            aspernatur earum molestias officia hic maiores perferendis, veniam
            accusamus ea nulla,{" "}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <img className="h-[13rem] w-[26rem]" src={Client} alt="Agentimg" />
          </div>
          <div className="flex flex-col justify-center relative md:left-[3.25rem] p-[0.5rem] place-items-center">
            <h1 className="text-[0.8rem] text-center">Enter Your Email</h1>
            <p className="text-[0.55rem] md:w-[12rem]">
              Stay up to date with our latest news and update
            </p>
            <div className="md:mx-[5rem]">
              <form
                className="flex flex-col justify-center mx-auto w-fit"
                onSubmit={(e) => e.preventDefault(e)}
              >
                <input
                  id="input"
                  className="invisible border-2 shadow-inner border-black rounded-md"
                  type="text"
                />
                <button
                  className="border-2 bg-inherit font-semibold p-[0.4rem] w-[14rem] rounded-md"
                  onClick={() => revealInput()}
                >
                  Email
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="my-[3.85rem] border-4 flex relative md:-[10.35rem] border-black rounded-lg w-[15rem] md:w-[24rem]"></div>
        <h1 className="text-center font-bold">
          Go To Resources For a Successful Purchase{" "}
          <a href="" className="text-2xl font-bold mt-[0.85rem]">
            &#8594;
          </a>{" "}
        </h1>
      </div>
      <div className="w-full p-[1rem] bg-slate-400 font-extrabold text-lg text-center mb-[2.5rem]">
        Top Listed Deals
      </div>
      <div className="overflow-hidden mb-5" ref={emblaRef}>
        <div className="flex p-[1.5rem] mb-[1.125rem]">
          <div className="mx-1">
            <img src={carou5} alt="carouimg" className="w-[10rem] h-[10rem]" />
          </div>
          <div className="mx-1">
            <img src={carou1} alt="carouimg" className="w-[10rem] h-[10rem]" />
          </div>
          <div className="mx-1">
            <img src={carou2} alt="carouimg" className="w-[10rem] h-[10rem]" />
          </div>
          <div className="mx-1">
            <img src={carou3} alt="carouimg" className="w-[10rem] h-[10rem]" />
          </div>
          <div className="mx-1">
            <img src={carou6} alt="carouimg" className="w-[10rem] h-[10rem]" />
          </div>
          {/* <div className="mx-1">
            <img src={carou4} alt="carouimg" className="w-[10rem] h-[10rem]" />
          </div> */}
        </div>
      </div>
      {/* the commented below is the multi-carousel i earlier used very responsive */}
      {/* <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2200} className="p-[1.5rem] mb-[1.125rem]">
                <div><img src={carou6} alt="carouimg" className="w-[10rem] h-[10rem]"/></div>
                <div><img src={carou1} alt="carouimg" className="w-[10rem] h-[10rem]"/></div>
                <div><img src={carou2} alt="carouimg" className="w-[10rem] h-[10rem]"/></div>
                <div><img src={carou5} alt="carouimg" className="w-[10rem] h-[10rem]"/></div>
                <div><img src={carou3} alt="carouimg" className="w-[10rem] h-[10rem]"/></div>
                <div><img src={carou4} alt="carouimg" className="w-[10rem] h-[10rem]"/></div>
                <div><img src={carou5} alt="carouimg" className="w-[10rem] h-[10rem]"/></div>
            </Carousel> */}
      <Footer />
    </>
  );
}
