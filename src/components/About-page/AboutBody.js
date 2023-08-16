import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import aboutimage1 from "./images/aboutImage1.png";
import aboutimage2 from "./images/aboutImage2.png";
import aboutimage3 from "./images/aboutImage3.png";
import aboutimage5 from "./images/aboutimage5.png";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide flex flex-row justify-center items-center">
          <img src={aboutimage1} alt="" className=" w-2/3 rounded-lg" />
        </div>
        <div className="embla__slide flex flex-row justify-center items-center">
          <img src={aboutimage2} alt="" className=" w-2/3 rounded-lg" />
        </div>
        <div className="embla__slide flex flex-row justify-center items-center">
          <img src={aboutimage3} alt="" className=" w-2/3 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

function AboutBody() {
  return (
    <div className=" container mx-auto">
      <div className=" mt-40">
        <EmblaCarousel />
        <h1 className=" bg-white text-black text-center absolute font-bold text-6xl p-5 rounded-lg top-28 left-[530px]">
          About us
        </h1>
      </div>

      <div className="h-[157px] bg-amber-500 mt-10 font-bold text-customBlue text-center flex flex-row items-center justify-center text-5xl">
        NO.1 Remote Property Search Engine.
      </div>

      <div className=" h-[1039px]  bg-customBlue flex flex-col items-center justify-center">
        <img src={aboutimage5} alt="" className=" md:w-[1114px] h-[742px] " />
      </div>

      <div className=" flex flex-row justify-center items-center">
        <div className=" mt-10 flex flex-row items-center justify-between w-[800px] h-[386px]">
          <h1 className="rounded-full py-16 px-20 bg-amber-500  font-bold ">
            Our Vision
          </h1>

          <p className=" px-20 text-start">
            Lorem ipsum dolor sit amet consectetur. Malesuada amet sem vitae
            cras adipiscing bibendum odio. Id sagittis viverra massa volutpat
            arcu enim ornare amet rhoncus. Orci sapien nunc consectetur augue
            mattis amet nec eget orci. Sit vel id sed montes accumsan risus
            sapien.
          </p>
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center">
        <div className=" mt-10 flex  flex-row-reverse items-center justify-between w-[800px] h-[386px]">
          <h1 className="rounded-full py-16 px-20 bg-amber-500  font-bold ">
            Our Beliefs
          </h1>

          <p className=" px-20 text-start">
            Lorem ipsum dolor sit amet consectetur. Malesuada amet sem vitae
            cras adipiscing bibendum odio. Id sagittis viverra massa volutpat
            arcu enim ornare amet rhoncus. Orci sapien nunc consectetur augue
            mattis amet nec eget orci. Sit vel id sed montes accumsan risus
            sapien.
          </p>
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center">
        <div className=" mt-10 flex  flex-row items-center justify-between w-[800px] h-[386px]">
          <h1 className="rounded-full py-16 px-20 bg-amber-500  font-bold ">
            Our Mission
          </h1>

          <p className=" px-20 text-start">
            Lorem ipsum dolor sit amet consectetur. Malesuada amet sem vitae
            cras adipiscing bibendum odio. Id sagittis viverra massa volutpat
            arcu enim ornare amet rhoncus. Orci sapien nunc consectetur augue
            mattis amet nec eget orci. Sit vel id sed montes accumsan risus
            sapien.
          </p>
        </div>
      </div>
      <h3 className=" font-bold text-3xl ml-10 mb-10">Our team </h3>
      <h3 className=" font-bold text-3xl ml-10"> Join Our team </h3>
      <p className=" font-medium  ml-10 text-start w-[50rem] mb-10">
        Are you a good team player, a specialist in your field and like to get
        things done? Here at IEnergyup Innovation lab, we are a high-energy,
        international and striving team who want to see things delivered. If you
        are interested in one of our open positions, please get in touch with
        us!
      </p>
    </div>
  );
}

export default AboutBody;
