import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Add your login logic here.
    // For simplicity, we will just log the username and password for now.
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div>
      <Header />
      <div
        style={{
          margin: "10% auto",
          width: "40%",
          padding: "2%",
        //   border: "2px solid black",
          display: "flex", 
          flexDirection: "column", 
        }}
      >
        <div style={{ width: "100%"}}>
          <input
            style={{ border: "1px solid grey", width: "100%", padding: "3%", borderRadius: "10px" }}
            type="text"
            id="username"
            value={username}
            placeholder="Email"
            onChange={handleUsernameChange}
          />
        </div>
        <div style={{ width: "100%"}}>
          <input
            style={{ border: "1px solid grey", width: "100%", margin: "7% auto", padding: "3%", borderRadius: "10px" }}
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </div>
        <button style={{ border: "1px solid grey", width: "60%", margin: "4% auto", padding: "3%", borderRadius: "10px", color: "#F0F2F2", background: "#091A2B", fontWeight: "800", fontSize: "20px" }} onClick={handleLogin}>
          Login
        </button>
        <p style={{ width: "fit-content", margin: "0 auto", padding: "2%"}}>Forgot password ?</p>
        <p style={{ width: "fit-content", margin: "0 auto", padding: "2%"}}>Already Have An Account ? <span style={{ color: "#091A2B", fontWeight: "700"}}>SignUp</span></p>
      </div>
    </div>
  );
};

export default Login;
