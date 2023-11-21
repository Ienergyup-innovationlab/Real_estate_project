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
          <img
            src={aboutimage1}
            alt=""
            className=" h-[221px] w-[326px] md:w-2/3 md:h-[600px] rounded-lg"
          />
        </div>
        <div className="embla__slide flex flex-row justify-center items-center">
          <img
            src={aboutimage2}
            alt=""
            className="h-[221px] w-[326px] md:w-2/3 md:h-[600px] rounded-lg"
          />
        </div>
        <div className="embla__slide flex flex-row justify-center items-center">
          <img
            src={aboutimage3}
            alt=""
            className="h-[221px] w-[326px] md:w-2/3 md:h-[600px] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

function AboutBody() {
  return (
    <div className=" container mx-auto">
      <div className="mt-32 md:mt-40">
        <EmblaCarousel />
        <h1 className="bg-white text-black text-center absolute font-bold md:text-6xl p-3 md:p-5 rounded-lg md:top-20 top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          About us
        </h1>
      </div>

      <div className=" h-[40-px] md:h-[157px] bg-amber-500 mt-10 font-bold text-customBlue text-center flex flex-row items-center justify-center md:text-5xl">
        NO.1 Remote Property Search Engine.
      </div>

      <div className="  h-[270px] md:h-[1039px]  bg-customBlue flex flex-col items-center justify-center">
        <img
          src={aboutimage5}
          alt=""
          className=" h-[193] w-[291px] md:w-[1114px] md:h-[742px] "
        />
      </div>

      <div className=" flex flex-row justify-center items-center">
        <div className=" mt-10 flex flex-col md:flex-row items-center justify-between md:w-[1000px] md:h-[300px]">
          <div className=" md:text-2xl bg-msnbg bg-no-repeat bg-contain font-bold w-[131px] h-[80px] md:w-[500px] md:h-[250px] flex justify-center items-center">
            Our Vision
          </div>

          <p className=" px-6 md:px-20 text-start text-xs md:text-base mt-4 mb-10 md:w-[500px]">
            Lorem ipsum dolor sit amet consectetur. Malesuada amet sem vitae
            cras adipiscing bibendum odio. Id sagittis viverra massa volutpat
            arcu enim ornare amet rhoncus. Orci sapien nunc consectetur augue
            mattis amet nec eget orci. Sit vel id sed montes accumsan risus
            sapien.
          </p>
        </div>
      </div>
      <div className=" flex flex-row justify-center items-center">
        <div className=" mt-10 flex flex-col md:flex-row-reverse items-center justify-between md:w-[1000px] md:h-[300px]">
          <div className=" md:text-2xl bg-Abtbg bg-no-repeat bg-contain font-bold w-[131px] h-[80px] md:w-[500px] md:h-[250px] flex justify-center items-center">
            Our Beliefs
          </div>

          <p className=" px-6 md:px-20 text-start text-xs md:text-base mt-4 mb-10 md:w-[500px]">
            Lorem ipsum dolor sit amet consectetur. Malesuada amet sem vitae
            cras adipiscing bibendum odio. Id sagittis viverra massa volutpat
            arcu enim ornare amet rhoncus. Orci sapien nunc consectetur augue
            mattis amet nec eget orci. Sit vel id sed montes accumsan risus
            sapien.
          </p>
        </div>
      </div>
      <div className=" flex md:flex-row justify-center items-center">
        <div className=" mt-10 flex flex-col md:flex-row items-center justify-between md:w-[1000px] md:h-[300px]">
          <div className=" md:text-2xl bg-msnbg bg-no-repeat bg-contain font-bold w-[131px] h-[80px] md:w-[500px] md:h-[250px] flex justify-center items-center">
            Our Mission
          </div>

          <p className=" px-6 md:px-20 text-start text-xs md:text-base mt-4 mb-10 md:w-[500px]">
            Lorem ipsum dolor sit amet consectetur. Malesuada amet sem vitae
            cras adipiscing bibendum odio. Id sagittis viverra massa volutpat
            arcu enim ornare amet rhoncus. Orci sapien nunc consectetur augue
            mattis amet nec eget orci. Sit vel id sed montes accumsan risus
            sapien.
          </p>
        </div>
      </div>
      <h3 className="font-bold text-lg md:text-3xl md:ml-10 ml-6 mb-10">
        Our team{" "}
      </h3>
      <h3 className=" font-bold text-lg md:text-3xl md:ml-10 ml-6">
        {" "}
        Join Our team{" "}
      </h3>
      <p className=" md:font-medium  text-xs md:text-base md:ml-10 text-start md:w-[50rem] mb-10 px-6 md:px-0">
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
