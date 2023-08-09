import Footer from "../Footer";
// import Header from "../Header";
import vector from "./images/Vector.png";
import vector2 from "./images/Vector2.png";
import background1 from "./images/background1.png";
import background2 from "./images/background2.png";
import background3 from "./images/background3.png";

export const PropertySearch = () => {
  return (
    <div
      className="container"
      style={{ margin: "0% auto", position: "absolute", bottom: "5%" }}
    >
      <div
        className="row"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          margin: "0% auto",
        }}
      >
        <div className="col" style={{ width: "50%" }}>
          <ul className="listContainer">
            <li
              style={{
                borderTopLeftRadius: "10px",
                background: "#FFA41B",
                border: "none",
                color: "black",
              }}
            >
              Sale
            </li>
            <li>Rent</li>
            <li style={{ borderTopRightRadius: "10px" }}>Land</li>
          </ul>
        </div>

        <div className="col inputList">
          <div
            className="inputContainer"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label>Location</label>
            <select placeholder="set location">
              <option value="option1"> Select Location</option>
            </select>
          </div>
          <div
            className="inputContainer"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label>Location</label>
            <select placeholder="set location">
              <option value="option1">Select Pricing</option>
            </select>
          </div>
          <div
            className="inputContainer"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label>Location</label>
            <select placeholder="set location">
              <option value="option1">Select Property Type</option>
            </select>
          </div>
          <div
            className=""
            style={{
              display: "flex",
              width: "7%",
              margin: "0% 3%",
              position: "relative",
            }}
          >
            <button
              style={{
                margin: "0 auto",
                width: "60%",
                height: "60%",
                position: "absolute",
                bottom: "2%",
                left: "20%",
                padding: "14%",
                background: "#091A2B",
                borderRadius: "7px",
              }}
            >
              <img
                src={vector}
                alt="/"
                width="55%"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePageHero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src={background1}
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <PropertySearch />
    </div>
  );
};

const HomePageBody = () => {
  return (
    <div style={{ height: "150vh", paddingRight: "7%" }}>
      <div className="row  flex" style={{ height: "50%" }}>
        <div
          className="col  flex-1"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className=""
            style={{
              height: "70%",
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="top-0 left-0 w-full h-full object-cover"
              src={background2}
              alt="/"
            />
          </div>
        </div>
        <div
          className="col  flex-1"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className=""
            style={{
              height: "70%",
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h2
              className=""
              style={{
                width: "100%",
                fontWeight: "800",
                fontSize: "larger",
                marginBottom: "3%",
              }}
            >
              Product Categories
            </h2>
            <p style={{ width: "100%", marginBottom: "8%" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              proin quis auctor sit consectetur dolor nisi volutpat elit. Sed
              turpis convallis velit pulvinar lectus nec habitant.
            </p>
            <button
              style={{
                width: "100%",
                border: "1px solid #FCB332",
                background: "#FCB332",
                padding: "3% 10%",
                borderRadius: "35px",
                fontWeight: "800",
                textAlign: "left",
                position: "relative",
              }}
            >
              Click to view more categories
              <img
                src={vector2}
                alt="/"
                width="5%"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "90%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="row  flex" style={{ height: "50%" }}>
        <div
          className="col flex-1"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className=""
            style={{
              height: "70%",
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <h2
              className=""
              style={{
                width: "100%",
                fontWeight: "800",
                fontSize: "larger",
                marginBottom: "3%",
              }}
            >
              Services Categories
            </h2>
            <p style={{ width: "100%", marginBottom: "8%" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam
              proin quis auctor sit consectetur dolor nisi volutpat elit. Sed
              turpis convallis velit pulvinar lectus nec habitant.
            </p>
            <button
              style={{
                width: "100%",
                border: "1px solid #FCB332",
                background: "#FCB332",
                padding: "3% 10%",
                borderRadius: "35px",
                fontWeight: "800",
                textAlign: "left",
                position: "relative",
              }}
            >
              Click to view more categories
              <img
                src={vector2}
                alt="/"
                width="5%"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "90%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </button>
          </div>{" "}
        </div>
        <div
          className="col flex-1"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className=""
            style={{
              height: "70%",
              width: "80%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="top-0 left-0 w-full h-full object-cover"
              src={background3}
              alt="/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const HomePage = () => {
  return (
    <div>
      {/* <Header /> */}
      <HomePageHero />
      <HomePageBody />
      <Footer />
    </div>
  );
};

export default HomePage;
