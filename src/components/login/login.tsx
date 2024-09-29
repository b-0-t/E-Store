// @ts-nocheck
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import userlogstore from "../data/loginuser";

export default function Login() {
  const { user, setuserlog } = userlogstore();

  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const navi = useNavigate();
  function goto() {
    navi("/pri/home/*");
  }
  const handleSubmit = () => {
    const user = {
      name,
      password,
      role,
    };
    setuserlog(user);

    console.log("User data saved:", user);
    goto();
  };

  return (
    <div>
      <h2>User Registration</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Role:
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </label>
      </div>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        Register
      </button>
      {password}
      {role}
      {name}
    </div>
  );
}
