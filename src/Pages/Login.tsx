// @ts-nocheck
import React from "react";

import loginImg from "../assets/img/sideImage.png";
import Template from "../components/Template";

// Define prop types for the Login component
interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Log in to Exclusive"
      desc2="Enter your details below"
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Login;
