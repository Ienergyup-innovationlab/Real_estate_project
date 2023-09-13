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
import Agents from "./components/Agents";
import SellPage from "../src/components/sell-page/sellPage";
import AgentSignup from "./components/AgentSignUp";

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
      <Route path="/AgentSignup" element={<AgentSignup />} />

      <Route path="/About" element={<AboutPage />} />
      <Route path="/Sellpage" element={<SellPage />} />
    </Routes>
  );
}

export default App;
