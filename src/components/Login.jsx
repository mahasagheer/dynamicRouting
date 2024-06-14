import React, { useState } from "react";
import Counter from "./Counter";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { counterContext } from "./AuthContext";

const Login = () => {
  const { setUser, data, setAdmin } = useContext(AuthContext);
  const [count] = useContext(counterContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userData = [{ email, password }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const find = data.find(
      (find) => find.email == email && find.password == password
    );
    if (find.role == "user") {
      setUser(true);
      console.log("user logged in ");

      localStorage.setItem("role", JSON.stringify(userData));
      navigate("/home");
    }
    if (find.role == "admin" && count == 2) {
      setAdmin(true);
      console.log("admin logged in ");
      navigate("/");
    }
  };
  return (
    <>
      <h1 className="text-center text-3xl mt-[10%] ">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="bg-[#A0DEFF] flex justify-center flex-col px-10 items-center p-5 mx-[30%]">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full my-4 text-lg p-3"
            value={email}
            required
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Counter />

          <input
            type="password"
            placeholder="Password"
            className="w-full my-4 text-lg p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
          />
          <button
            className="bg-[#FDDE55] w-[100%] p-2 rounded-full my-1 "
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
