import { useState } from "react";
import Header from "./Header";
import { Checkbox } from "@mui/material";
import Footer from "./Footer";

export default function HouseOwnerSignUp({}){
  
  const [signUpForm, setSignUpForm] = useState("HouseOwner")
  // the above would be used in the parent signUp parent page and then passwed to each child as a prop

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    // Add your login logic here.
    // For simplicity, we will just log the username and password for now.
    console.log("Firstname:", firstname);
    console.log("Lastname:", lastname);
    console.log("phone:", phone);
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div>
      <Header />
      <div className="m-auto w-full p-2 flex flex-col place-items-center">
        <div className="h-fit w-[16rem] mb-[2rem] rounded-md border-black border-0 grid grid-cols-4 divide-x-2 md:w-[30rem] md:h-[3.2rem]">
            <button className="font-semibold border-black border-2 rounded-lg text-sm" onClick={()=>{setSignUpForm("Agent")}}>
              Realtor
            </button>
            <button className="font-semibold rounded-lg border-2 border-black text-sm" onClick={()=>{setSignUpForm("Agent")}}>
              Customer
            </button>
            <button className="font-semibold rounded-lg border-black border-2 text-sm" onClick={()=>{setSignUpForm("Agent")}}>
              Agent
            </button>
            <button className="font-semibold rounded-lg border-2 bg-amber-500 border-black text-sm" onClick={()=>{setSignUpForm("Agent")}}>
              House Owner
            </button>
        </div>
        <div>
          <input
            className="border-2 border-amber-200 my-[0.7rem] h-[3.5rem] rounded-lg w-[20rem] p-[0.5rem]"
            type="text"
            id="Firstname"
            value={firstname}
            placeholder="First Name"
            onChange={(e)=>setFirstname(e.target.value)}
          />
        </div>
        <div>
          <input
            className="border-2 border-amber-200 my-[0.7rem] h-[3.5rem] rounded-lg w-[20rem] p-[0.5rem]"
            type="text"
            id="Lastname"
            value={lastname}
            placeholder="Last Name"
            onChange={(e)=>setLastname(e.target.value)}
          />
        </div>
        <div>
          <input
            className="border-2 border-amber-200 my-[0.7rem] h-[3.5rem] rounded-lg w-[20rem] p-[0.5rem]"
            type="text"
            id="username"
            value={username}
            placeholder="Email"
            onChange={(e)=>setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            className="border-2 border-amber-200 my-[0.7rem] h-[3.5rem] rounded-lg w-[20rem] p-[0.5rem]"
            type="number"
            id="number"
            value={phone}
            placeholder="Phone Number"
            onChange={(e)=>setPhone(e.target.value)}
          />
        </div>
        <div>
          <input
            className="border-2 border-amber-200 my-[0.7rem] h-[3.5rem] rounded-md w-[20rem] p-[0.5rem] mb-[1.2rem]"
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <Checkbox required className="relative left-1 md:relative md:-top-2"/>
          <h1>I accept IEnergyUp Property's terms of use and privacy condition terms</h1>
        </div>
        <a className="mb-[2.3rem] text-sm text-gray-400 text-center md:-mt-[0.8rem]" href="#"><p>Terms of use and Privacy condition</p></a>
        <button 
          className="border-2 text-white rounded-md border-gray-600 h-[4rem] w-[14rem] bg-slate-900 p-[0.65rem]"
          onClick={handleLogin}>
          Submit
        </button>
        <p className="p-3 m-auto w-fit-content text-[0.9rem]">Already Have An Account ? <span style={{ color: "#091A2B", fontWeight: "700"}}>Login</span></p>
      </div>
      <Footer/>
    </div>
  );
};
