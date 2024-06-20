import React from "react";
import Counter from "./Counter";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
const Login = () => {
  const { email, setEmail, password, setPassword, handleSubmit } =
    useContext(AuthContext);

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
