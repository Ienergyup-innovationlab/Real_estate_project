import React from "react";
import Landingpage from "./components/Landing-page/Landingpage";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import HomePage from "./components/home-screen/HomePage";
// import AgentSignUP from "./components/AgentSignUp";
import "./App.css";
import Login from "./components/Login";
import HouseOwnerSignUp from "./components/HouseOwnerSignUp";
import AboutPage from "./components/About-page/aboutPage";
import Agents from "./components/Agent-page/Agents";
import SellPage from "../src/components/sell-page/sellPage";
import Signup from "./components/SignUp";
import MortgagePage from "./components/Mortgage-page/MortgagePage";
import BuyPage from "./components/BuyPage/BuyPage";
import Properties from "./components/properties";
import Services from "./components/services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/login" element={<Login />} />
      {/*--path="*" helps display an error && navigate to "pageNotFound" if user navigates to a page that doesnt exist*/}
      <Route path="*" element={<PageNotFound />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/Agents" element={<Agents />} />
      <Route path="/HouseOwnerSignup" element={<HouseOwnerSignUp />} />
      <Route path="/RealtorSignup" element={<HouseOwnerSignUp />} />
      <Route path="/CustomerSignup" element={<HouseOwnerSignUp />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/MortgagePage" element={<MortgagePage />} />
      <Route path="/BuyPage" element={<BuyPage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Sellpage" element={<SellPage />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

export default App;
