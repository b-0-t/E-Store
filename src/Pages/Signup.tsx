// @ts-nocheck
import React from "react";
import signupImg from "../assets/img/sideImage.png";
import Template from "../components/Template";

// Define prop types for the Signup component
interface SignupProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signupmain: React.FC<SignupProps> = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Let's do shopping today"
      desc1="Create an account"
      desc2="Enter your details below"
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Signupmain;
