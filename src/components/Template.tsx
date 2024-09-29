// @ts-nocheck
import React from "react";
import frameImage from "../assets/img/frame.png";
import SignupForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

// Define prop types for the Template component
interface TemplateProps {
  title: string;
  desc1: string;
  desc2: string;
  image: string;
  formtype: "signup" | "login";
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Template: React.FC<TemplateProps> = ({
  title,
  desc1,
  desc2,
  image,
  formtype,
  setIsLoggedIn,
}) => {
  return (
    <div className=" flex flex-col lg:flex-row justify-center lg:justify-between w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-8 ">
      <div className=" w-full lg:w-11/12 lg:max-w-[450px] flex flex-col items-center  lg:items-start shadow-sm ">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem] text-center lg:text-left">
          {title}!!
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4 text-center lg:text-left">
          <span className="text-black-50 ">{desc1}</span>
          <br />
          <span className="text-black-50 italic ">{desc2}</span>
        </p>
        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className="flex w-[426px] items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-black"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem]">
            OR
          </p>
          <div className="w-full h-[1px] bg-black"></div>
        </div>
        {/* className='w-full bg-gray-300  hover:bg-gray-400 rounded-[8px] font-medium text-gray-800 px-[12px] py-[8px] mt-6' */}
        <button
          className="w-[426px] flex justify-center items-center rounded-[8px] font-medium
            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 bg-gray-300 hover:bg-gray-400 text-gray-800 "
        >
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>
      {/* Image Container */}
      <div className="hidden lg:block relative w-11/12 max-w-[450px] mt-15 top-[150px] ">
        <img
          src={frameImage}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
          className="absolute top-7"
        />
        <img
          src={image}
          alt="Mobile"
          width={558}
          height={490}
          loading="lazy"
          className="absolute -top-5 right-4  shadow-lg"
        />
      </div>
    </div>
  );
};

export default Template;
