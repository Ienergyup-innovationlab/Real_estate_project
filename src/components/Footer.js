import logo1 from "../images/logo1.png";
import WhatsApp from "../images/whatsappIcon.svg";
import facebook from "../images/facebookicon.svg";
import linkedin from "../images/linkedinicon.svg";
import twitter from "../images/twittericon.svg";

const Footer = () => {
  return (
    <div style={{ background: "#091A2B", maxHeight: "fit-content" }} className="footer">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#FFFFFF",
          padding: "3.5% ",
          flex: 1,
        }}
      >
        <div style={{ display: "flex", width: "25%" }} className="iEnergy_f_Addy">
          <div>
            <img src={logo1} alt="logo" />
          </div>
          <div style={{ marginLeft: "4%" }}>
            <h3>IenergyUp Property</h3>
            <p >
              5, Salem Avenue, Ikeja GRA, Lagos, Nigeria.
              <br/>PO 100100
            </p>
          </div>
        </div>

        <div>
          <h3 style={{ fontWeight: "800" }}>Company</h3>
          <ul style={{ fontWeight: "400" }}>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Contact us</li>
          </ul>
        </div>

        <div className="propertyType_cover">
          <h3 style={{ fontWeight: "800" }}>Property Type</h3>
          <ul style={{ fontWeight: "400" }}>
            <li className="cursor-pointer">Buy</li>
            <li className="cursor-pointer">Rent</li>
            <li className="cursor-pointer">Sale</li>
            <li className="cursor-pointer">Lease</li>
            <li className="cursor-pointer">Apartment</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontWeight: "800" }}>Legal & Regulatory</h3>
          <ul style={{ fontWeight: "400" }}>
            <li className="cursor-pointer">Privacy Policy</li>
            <li className="cursor-pointer">Terms and Conditions</li>
          </ul>
        </div>
      </div>

      <div style={{ background: "#091A2B" }}>
        <div
        className="social_img"
          style={{
            display: "flex",
            width: "15%",
            justifyContent: "space-between",
            marginLeft: "3.5%",
          }}
        >
          <img src={facebook} alt="/" />
          <img src={WhatsApp} alt="/" />
          <img src={linkedin} alt="/" />
          <img src={twitter} alt="/" />
        </div>
        <p style={{ textAlign: "center", color: "white", padding: " 2% 0" }} className="copyRight_txt">
          Copyright © 2023 IenergyUp. All rights reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
