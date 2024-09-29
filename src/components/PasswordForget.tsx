// @ts-nocheck
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import useGlobalStore from "../SignUp_Store/GlobalStore";

// Define the interface for user
interface User {
  id: string;
  email: string;
  schoolName: string;
  petName: string;
}

// Define the component state and props
const PasswordForget: React.FC = () => {
  const [schoolName, setSchoolName] = useState<string>("");
  const [petName, setPetName] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [flag, setFlag] = useState<boolean>(false);
  const [crateNewPassword, setCrateNewPassword] = useState<string>("");

  const location = useLocation();
  const navigate = useNavigate();

  // Assuming the user is provided via location state
  const user = location.state?.user as User;

  // Use the User interface for type safety
  const { users, passwordChanger } = useGlobalStore((state) => ({
    users: state.users as User[],
    passwordChanger: state.passwordChanger,
  }));

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    if (id === "schoolName") {
      setSchoolName(value);
    } else if (id === "petName") {
      setPetName(value);
    } else if (id === "crateNewPassword") {
      setCrateNewPassword(value);
    }
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (user && user.schoolName === schoolName && user.petName === petName) {
      setFlag(true);
    } else {
      toast.error("Credentials do not match");
    }
  };

  const submitHandler1 = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userToUpdate = users.find((u) => u.email === user?.email);
    if (userToUpdate) {
      console.log(
        "user id ->",
        userToUpdate.id,
        " new password is-> ",
        crateNewPassword
      );
      passwordChanger(userToUpdate.id, crateNewPassword);
      setPassword(crateNewPassword);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    navigate("/login");
  };

  return (
    <div className="h-[100vh] flex justify-center items-center bg-gray ">
      {flag ? (
        <form
          onSubmit={submitHandler1}
          className="w-fit h-fit border-[1px] rounded-md p-6  shadow-xl bg-gray-100"
        >
          <fieldset>
            <legend>
              {" "}
              <strong>Enter Your Password Carefully</strong>
            </legend>

            <input
              className="border-[1px] mt-3"
              type="text"
              placeholder="Create New Password"
              id="crateNewPassword"
              value={crateNewPassword}
              onChange={changeHandler}
              required
            />
            <br />
            <br />
            <div className="text-center">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <span>Submit</span>
              </button>
            </div>
          </fieldset>
        </form>
      ) : (
        <form
          onSubmit={submitHandler}
          className="w-fit h-fit border-[1px] rounded-md p-6  shadow-xl bg-gray-100"
        >
          <fieldset>
            <legend>
              {" "}
              <strong>Enter Your Details </strong>
            </legend>
            {/* <label htmlFor="firstName"> <strong>School Name </strong></label> */}
            <input
              className="border-[1px] mt-3"
              type="text"
              placeholder="School Name"
              id="schoolName"
              value={schoolName}
              onChange={changeHandler}
              required
            />
            <br />
            <br />
            {/* <label htmlFor="lastName">Pet Name</label> */}
            <input
              className="border-[1px]"
              type="text"
              placeholder="Pet Name"
              id="petName"
              value={petName}
              onChange={changeHandler}
              required
            />
            <br />
            <br />
            <div className="text-center">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <span>Submit</span>
              </button>
            </div>
          </fieldset>
        </form>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <h2 id="modal-modal-title">
            <strong>Your New Password Is:</strong>
          </h2>
          <p id="modal-modal-description">{password}</p>
        </Box>
      </Modal>
    </div>
  );
};

export default PasswordForget;
