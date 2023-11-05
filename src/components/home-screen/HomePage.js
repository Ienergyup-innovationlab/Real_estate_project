import Footer from "../Footer";
import Header from "../Header";
import vector from "./images/Vector.png";
import vector2 from "./images/Vector2.png";
import arrow from "./images/arrow.png";
import background1 from "./images/background1.png";
import background4 from "./images/background4.png";
import background2 from "./images/background2.png";
import background3 from "./images/background3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import styles from "./styles/my-style.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const PropertySearch = () => {
  const propertyMenu = ["Sale", "Rent", "Land"];
  return (
    <div className={`container ${styles.PScontainer}`}>
      <div className={`row ${styles.ContainerRow}`}>
        <div className="col w-1/2">
          <ul className={styles.listContainer}>
            {propertyMenu &&
              propertyMenu.map((menu, index) => (
                <li key={index} onClick={() => alert(`you clicked ${menu}`)}>
                  {menu}
                </li>
              ))}
          </ul>
        </div>

        <div className="col inputList">
          <div className={`inputContainer ${styles.flex}`}>
            <label className="text-white">Location</label>
            <select placeholder="set location">
              <option value="option1"> Select Location</option>
            </select>
          </div>

          <div className={`inputContainer ${styles.flex}`}>
            <label className="text-white">Pricing</label>
            <select placeholder="set location">
              <option value="option1">Select Pricing</option>
            </select>
          </div>

          <div className={`inputContainer ${styles.flex}`}>
            <label className="text-white">Property</label>
            <select placeholder="set location">
              <option value="option1">Select Property Type</option>
            </select>
          </div>

          <div className={styles.searchBtnContainer}>
            <button>
              <span>Search</span>
              <img src={vector} alt={vector} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const HomePageHero = ({ background }) => {
  return (
    <div className="w-full h-screen relative">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={background}
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <PropertySearch />
    </div>
  );
};

const HTitle = ({ text }) => {
  return (
    <div className={`H_title ${styles.titleHead}`}>
      <div>{text}</div>
    </div>
  );
};

// Custom previous button component
const CustomPrevArrow = (props) => (
  <button {...props} className="custom-prev-button">
    <img src={arrow} alt={arrow} width="25px" height="25px" />
  </button>
);

// Custom next button component
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

const HomeLowerBody = () => {
  const Car_images = [
    background4,
    background2,
    background3,
    background4,
    background2,
    background3,
  ];
  return (
    <div>
      <HTitle text={"Top Listed Products"} />
      <div
        style={{ width: "90%", margin: "0 auto", padding: "3%" }}
        className="height"
      >
        <MyCarousel images={Car_images} />
      </div>
      <HTitle text={"Top Listed Service"} />
      <div
        style={{ width: "90%", margin: "0 auto", padding: "3%" }}
        className="height"
      >
        <MyCarousel images={Car_images} />
      </div>
      <HTitle text={"Top Listed Deals"} />
      <div
        style={{ width: "90%", margin: "0 auto", padding: "3%" }}
        className="height"
      >
        <MyCarousel images={Car_images} />
      </div>
    </div>
  );
};

const HomePageBody = () => {
  return (
    <>
      <div className={styles.section2}>
        {/* first parent */}
        <div className={`row flex ${styles.parent}`}>
          {/* first childCover */}
          <div className={`col  flex-1 ${styles.childCover}`}>
            <div>
              <img
                className="top-0 left-0 w-full h-full object-cover"
                src={background2}
                alt="/"
              />
            </div>
          </div>

          {/* second childCover */}
          <div className={`col  flex-1 ${styles.childCover}`}>
            <div>
              <h2>Product Categories</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                proin quis auctor sit consectetur dolor nisi volutpat elit. Sed
                turpis convallis velit pulvinar lectus nec habitant.
              </p>
              <button>
                <span>Click to view more categories</span>
                <span>view more</span>
                <img src={vector2} alt="/" width="5%" />
              </button>
            </div>
          </div>
        </div>

        {/* second parent */}
        <div className={`row flex ${styles.parent}`}>
          {/* first childCover */}
          <div className={`col  flex-1 ${styles.childCover}`}>
            <div>
              <h2>Services Categories</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
                proin quis auctor sit consectetur dolor nisi volutpat elit. Sed
                turpis convallis velit pulvinar lectus nec habitant.
              </p>
              <button>
                <span>Click to view more categories</span>
                <span>view more</span>
                <img src={vector2} alt="/" width="5%" />
              </button>
            </div>
          </div>

          {/* second childCover */}
          <div className={`col  flex-1 ${styles.childCover}`}>
            <div>
              <img
                className="top-0 left-0 w-full h-72 object-cover"
                src={background3}
                alt="/"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomePageHero background={background1} />
      <HomePageBody />
      <HomeLowerBody />
      <Footer />
    </div>
  );
};

export default HomePage;
