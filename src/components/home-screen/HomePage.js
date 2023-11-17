import Footer from "../Footer";
import Header from "../Header";
import vector from "./images/Vector.png";
import vector2 from "./images/Vector2.png";
import arrow from "./images/arrow.png";
import background1 from "./images/background1.png";
import background2 from "./images/background2.png";
import background3 from "./images/background3.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import styles from "./styles/my-style.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const PropertySearch = () => {
  const propertyMenu = ["Buy", "Rent", "Short Let"];
  return (
    <div className={`container ${styles.PScontainer}`}>
      <div className={`row ${styles.ContainerRow}`}>
        <form action="/" method="get">
          <div className="col w-full">
            <ul className={styles.listContainer}>
              {propertyMenu &&
                propertyMenu.map((menu, index) => (
                  <li key={index} onClick={() => alert(`you clicked ${menu}`)}>
                    {menu}
                  </li>
                ))}
            </ul>
          </div>
          <div className="col hbtn inputSearches">
            <input id="propertyLocation" name="propertyLocation" placeholder="Enter a state, locality or area" data-results="all" type="text" />
          </div>
          <div className="col inputList">
            <div className={`inputContainer ${styles.flex}`}>
              <label className="text-white">Type</label>
              <select placeholder="set location" name="type-of-property" id="propertyType">
                <option value=" "> All Types</option>
                <option value="option1"> Flat / Apartment</option>
                <option value="option2"> House</option>
                <option value="option3"> Land</option>
                <option value="option4"> Commercial Property</option>
              </select>
            </div>

            <div className={`inputContainer ${styles.flex}`}>
              <label className="text-white">Bedrooms</label>
              <select placeholder="set location" name="type-of-bedrooms" id="bedroomsType">
                <option value=" ">Any</option>
                <option value="1room">1</option>
                <option value="2rooms">2</option>
                <option value="3rooms">3</option>
                <option value="4rooms">4</option>
                <option value="5rooms">5</option>
                <option value="6+rooms">6+</option>
              </select>
            </div>

            <div className={`inputContainer ${styles.flex}`}>
              <label className="text-white">Min Price</label>
              <select placeholder="set location" name="min-price" id="minPrice">
                <option value=" ">No Min</option>
                <option value="N100,000">N100,000</option>
                <option value="N200,000">N200,000</option>
                <option value="N250,000">N250,000</option>
                <option value="N300,000">N300,000</option>
                <option value="N400,000">N400,000</option>
                <option value="N600,000">N600,000</option>
                <option value="N700,000">N700,000</option>
                <option value="N800,000">N800,000</option>
                <option value="N900,000">N900,000</option>
                <option value="N1,000,000">N1,000,000</option>
                <option value="N2,000,000">N2,000,000</option>
                <option value="N2,500,000">N2,500,000</option>
                <option value="N3,000,000">N3,000,000</option>
                <option value="N4,000,000">N4,000,000</option>
                <option value="N5,000,000">N5,000,000</option>
                <option value="N10,000,000">N10,000,000</option>
                <option value="N20,000,000">N20,000,000</option>
                <option value="N30,000,000">N30,000,000</option>
                <option value="N40,000,000">N40,000,000</option>
                <option value="N50,000,000">N50,000,000</option>
                <option value="N60,000,000">N60,000,000</option>

              </select>
            </div>

            <div className={`inputContainer ${styles.flex}`}>
              <label className="text-white">Max Price</label>
              <select placeholder="set location" name="max-price" id="maxPrice">
              <option value=" ">No Min</option>
                <option value="N100,000">N100,000</option>
                <option value="N200,000">N200,000</option>
                <option value="N250,000">N250,000</option>
                <option value="N300,000">N300,000</option>
                <option value="N400,000">N400,000</option>
                <option value="N600,000">N600,000</option>
                <option value="N700,000">N700,000</option>
                <option value="N800,000">N800,000</option>
                <option value="N900,000">N900,000</option>
                <option value="N1,000,000">N1,000,000</option>
                <option value="N2,000,000">N2,000,000</option>
                <option value="N2,500,000">N2,500,000</option>
                <option value="N3,000,000">N3,000,000</option>
                <option value="N4,000,000">N4,000,000</option>
                <option value="N5,000,000">N5,000,000</option>
                <option value="N10,000,000">N10,000,000</option>
                <option value="N20,000,000">N20,000,000</option>
                <option value="N30,000,000">N30,000,000</option>
                <option value="N40,000,000">N40,000,000</option>
                <option value="N50,000,000">N50,000,000</option>
                <option value="N60,000,000">N60,000,000</option>
              </select>
            </div>
          </div>
          <div className="col inputList hbtn">
            <div className={styles.searchBtnContainer}>
              <button id="submit" type="submit">
                <span>Search</span>
                <img src={vector} alt={vector} />
              </button>
            </div>
          </div>
        </form>
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
    background1,
    background2,
    background3,
    background1,
    background2,
    background3,
  ];
  return (
    <div>
      <HTitle text={"Top Listed Products"} />
      <div style={{ width: "90%", margin: "0 auto", padding: "3%" }} className="height">
        <MyCarousel images={Car_images} />
      </div>
      <HTitle text={"Top Listed Service"} />
      <div style={{ width: "90%", margin: "0 auto" , padding: "3%"}} className="height">
        <MyCarousel images={Car_images} />
      </div>
      <HTitle text={"Top Listed Deals"} />
      <div style={{ width: "90%", margin: "0 auto", padding: "3%" }} className="height">
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
                className="top-0 left-0 w-full h-full object-cover"
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
