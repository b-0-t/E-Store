// @ts-nocheck
import React, { useState, ChangeEvent, FormEvent, MouseEvent } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useGlobalStore from "../SignUp_Store/GlobalStore";
import useCurrUserStore from "./data/userdata";

// Define the type for the props
interface LoginFormProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

// Define the User interface based on your store structure
interface User {
  id: number;
  accountType: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  schoolName?: string;
  petName?: string;
  cartList: [];
  wishList: [];
  OrderHistoryList: [];
}

const LoginForm: React.FC<LoginFormProps> = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const { curruser, setcurrUser } = useCurrUserStore();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // Use the User interface for type safety
  const users = useGlobalStore((state) => state.users) as User[];

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === "email") {
      setEmail(value);
    } else if (id === "password") {
      setPassword(value);
    }
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let flag = 0;
    for (const user of users) {
      if (user.email === email) {
        flag = 1;
        if (user.password !== password) {
          alert("Wrong Password");
          setPassword("");
        } else {
          toast.success("Logged In");
          setcurrUser(user);
          setIsLoggedIn(true);
          console.log(curruser);
          if (user.accountType === "seller") {
            navigate("/pri/seller");
          } else if (user.accountType === "customer") {
            navigate("/pri/home");
          }
        }
      }
    }
    if (flag === 0) {
      alert("User Not Exist");
      setPassword("");
      setEmail("");
    }
  };

  const passwordChangeHandler = () => {
    let notPresent = 1;

    if (email !== "") {
      for (const user of users) {
        if (user.email === email) {
          notPresent = 0;
          navigate("/showPasswordPage", { state: { user } });
        }
      }
      if (notPresent === 1) alert("User not exist");
    } else {
      alert("Enter your Email");
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-[426px] gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          <strong> Email Address </strong>
          <sup className="text-red-950"> *</sup>
        </p>
        <input
          required
          type="email"
          id="email"
          value={email}
          onChange={changeHandler}
          placeholder="Enter email address"
          name="email"
          className="border-[1px] rounded-[0.5rem] text-black w-full p-[12px] "
        />
      </label>

      <label className="w-full relative">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
          <strong> Password </strong>
          <sup className="text-red-950"> *</sup>
        </p>
        <input
          required
          id="password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
          className="border-[1px] rounded-[0.5rem] text-black w-full p-[12px] "
        />
        <span
          className="absolute right-3 top-[38px] cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
          ) : (
            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
          )}
        </span>
        <p
          onClick={passwordChangeHandler}
          className="text-xs mt-1 text-black max-w-max ml-auto cursor-pointer"
        >
          <strong>
            {" "}
            <span className="italic text-blue-900">Forgot Password </span>
          </strong>
        </p>
      </label>

      <button className="w-full bg-gray-300  hover:bg-gray-400 rounded-[8px] font-medium text-gray-800 px-[12px] py-[8px] mt-6">
        LogIn
      </button>
    </form>
  );
};

export default LoginForm;
