import { useEffect, useState } from "react";
import Header from "./Header";
import styles from "../styles/login.module.css";
import linkedIn from "../images/loginLinkedIn.png";
import google from "../images/devicon_google.png";
import facebook from "../images/devicon_facebook.png";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [loading, setLoading] = useState(false);

  const loginOptions = [
    { label: "Linkedin", imageSrc: linkedIn },
    { label: "Google", imageSrc: google },
    { label: "Facecbook", imageSrc: facebook },
  ];

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      // Make a POST request to your API endpoint
      const response = await axios.post(
        "https://ienergyup-ecommerce.onrender.com/api/v1/users/login",
        formData
      );

      // Check the response status code
      if (response.status === 200) {
        // User is successfully logged in
        console.log("Login successful");
        setSuccess(true);
        setLoading(false);
        // Redirect to the welcome page or perform other actions as needed
      } else {
        // Display an error message if login fails
        console.error("Login failed");
        setFailure(true);
        setLoading(false);
      }
    } catch (error) {
      // Handle any network or other errors
      console.error("An error occurred:", error);
      setFailure(true);
      setLoading(false);
    }

    // Clear the form fields
    setFormData({ ...formData, email: "", password: "" });
  };

  useEffect(() => {
    // Check if success is currently true
    if (success || failure) {
      // Wait for 5 seconds and then set success to false
      const timer = setTimeout(() => {
        setSuccess(false);
        setFailure(false);
      }, 5000); // 5000 milliseconds = 5 seconds

      // Clean up the timer when the component unmounts
      return () => clearTimeout(timer);
    }
  }, [success, failure]); // This effect depends on the success state

  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className={styles.container}>
      <Header />
      <h1>Login to your Account</h1>
      <ul className={styles.socialMediaContainer}>
        {loginOptions.map((loginOption) => (
          <li key={loginOption.label}>
            <img
              src={loginOption.imageSrc}
              alt="/"
              width="25px"
              height="25px"
              style={{
                backgroundColor:
                  loginOption.label === "Linkedin" ? "#0a66c2" : "",
              }}
            />
            Continue using {loginOption.label}
          </li>
        ))}
      </ul>
      <p className={styles.or}>Or</p>
      {success && <p>logged in success</p>}
      {failure && <p> user does not exist</p>}
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleFieldChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleFieldChange}
        />
        <button type="submit">login</button>
      </form>
      <p className={styles.forgotPW}>Forgot password ?</p>
      <p className={styles.haveAccnt}>
        Dont Have An Account ?{" "}
        <span>
          {" "}
          <Link to="/Signup">SignUp</Link>
        </span>
      </p>
    </div>
  );
};

export default Login;
