// @ts-nocheck
import React, { useState, ChangeEvent, FormEvent } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useGlobalStore from "../SignUp_Store/GlobalStore";
import useCurrUserStore from "./data/userdata";

interface SignupFormProps {
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

interface Cartitem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

interface Wishlistitem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

interface Card {
  productId: string;
  [key: string]: any;
}

interface User {
  id: number;
  accountType: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  schoolName: string;
  petName: string;
  cartList: [];
  wishList: [];
  OrderHistoryList: [];
}

const SignupForm: React.FC<SignupFormProps> = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [accountType, setAccountType] = useState<string>("customer");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [createPassword, setCreatePassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [modalCheck, setModalCheck] = useState<boolean>(false);

  const { setcurrUser } = useCurrUserStore();

  const { users, addUser, count, increaseCount } = useGlobalStore((state) => ({
    users: state.users,
    addUser: state.addUser,
    count: state.count,
    increaseCount: state.increaseCount,
  }));
  const validatePassword = (password: string): boolean => {
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasAlphabet = /[a-zA-Z]/.test(password);
    return hasSpecialChar && hasNumber && hasAlphabet;
  };
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    switch (id) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "createPassword":
        setCreatePassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (createPassword !== confirmPassword) {
      console.log(confirmPassword, createPassword);
      setCreatePassword("");
      setConfirmPassword("");
      toast.error("Passwords do not match");
      return;
    }
    if (!validatePassword(createPassword)) {
      toast.error(`Re-create strong password
          (i.e @123Ashu)`);
      setCreatePassword("");
      setConfirmPassword("");
      return;
    }

    if (users.some((user) => user.email === email)) {
      setCreatePassword("");
      setConfirmPassword("");
      setFirstName("");
      setLastName("");
      setEmail("");
      toast.error("Account Already Exists");
      return;
    }

    const schoolName = prompt("Enter Your School Name") || "";
    const petName = prompt("Enter Your Pet Name") || "";

    if (firstName) {
      addUser({
        id: count,
        accountType,
        firstName,
        lastName,
        email,
        password: confirmPassword,
        schoolName,
        petName,
        cartList: [],
        wishList: [],
        OrderHistoryList: [],
      });
      let user = {
        id: count,
        accountType,
        firstName,
        lastName,
        email,
        password: confirmPassword,
        schoolName,
        petName,
        cartList: [],
        wishList: [],
        OrderHistoryList: [],
      };
      setcurrUser(user);

      increaseCount();
      setIsLoggedIn(true);
      setCreatePassword("");
      setConfirmPassword("");
      setFirstName("");
      setLastName("");
      setEmail("");

      toast.success("Account Created");

      if (user.accountType === "seller") {
        navigate("/pri/seller");
      } else if (user.accountType === "customer") {
        navigate("/pri/home");
      }
    }
  };

  return (
    <div>
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max border-[1px] shadow-md">
        <button
          className={`${
            accountType === "customer"
              ? "text-black bg-gray-500"
              : "bg-transparent text-black"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("customer")}
        >
          Customer
        </button>
        <button
          className={`${
            accountType === "seller"
              ? "text-black bg-gray-500"
              : "bg-transparent text-black"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("seller")}
        >
          Seller
        </button>
      </div>

      <form onSubmit={submitHandler}>
        <div className="flex gap-x-4 mt-[20px]">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              <strong> First Name </strong>
              <sup className="text-red-950"> *</sup>
            </p>
            <input
              required
              type="text"
              id="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={firstName}
              className="border-[1px] rounded-[0.5rem] text-black w-full p-[12px] "
            />
          </label>
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              <strong> Last Name </strong>
              <sup className="text-red-950"> *</sup>
            </p>
            <input
              required
              type="text"
              id="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={lastName}
              className="border-[1px] rounded-[0.5rem] text-black w-full p-[12px] "
            />
          </label>
        </div>

        <div className="mt-[20px]">
          <label className="w-full mt-[20px]">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              <strong>Email Address </strong>
              <sup className="text-red-950"> *</sup>
            </p>
            <input
              required
              type="email"
              id="email"
              onChange={changeHandler}
              placeholder="Enter Email Address"
              value={email}
              className="border-[1px] rounded-[0.5rem] text-black w-full p-[12px] "
            />
          </label>
        </div>

        <div className="w-full flex gap-x-4 mt-[20px]">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              <strong>Create Password</strong>
              <sup className="text-red-950"> *</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              id="createPassword"
              onChange={changeHandler}
              placeholder=" Enter Password"
              value={createPassword}
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
          </label>
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]">
              <strong> Confirm Password </strong>
              <sup className="text-red-950"> *</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={confirmPassword}
              className="border-[1px] rounded-[0.5rem] text-black w-full p-[12px] "
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>

        <button className="w-full bg-gray-300  hover:bg-gray-400 rounded-[8px] font-medium text-gray-800 px-[12px] py-[8px] mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
