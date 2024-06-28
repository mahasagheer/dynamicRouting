import React from "react";
import Counter from "./Counter";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout, adminIn, adminOut, login } from "../features/auth/AuthSlice";
import { fetchFakeApi } from "../features/auth/FakeApiSlice";

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { t } = useTranslation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchFakeApi());
    if (state.fakeapi.data) {
      const find = state.fakeapi.data.find(
        (find) => find.email == email && find.password == password
      );
      console.log(find);
      navigate("/home");

      if (find.role == "user") {
        alert("user logged in ");
        navigate("/home");
        dispatch(
          login({
            email: email,
            password: password,
            user: true,
          })
        );
        console.log(state.auth.user);
      }
      // } else if (find.role == "admin") {
      //   alert("admin logged in ");
      //   navigate("/home");
      //   dispatch(
      //     adminIn({
      //       email: email,
      //       password: password,
      //       admin: true,
      //     })
      //   );
      // } else {
      //   navigate("/");
      // }
    }
  };
  return (
    <>
      <h1 className="text-center text-3xl mt-[10%] ">{t("login")}</h1>
      <form onSubmit={handleSubmit}>
        <div className="bg-[#A0DEFF] flex justify-center flex-col px-10 items-center p-5 mx-[30%]">
          <input
            type="email"
            placeholder={t("email")}
            className="w-full my-4 text-lg p-3"
            value={email}
            required
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Counter />

          <input
            type="password"
            placeholder={t("password")}
            className="w-full my-4 text-lg p-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="on"
          />
          <button
            className="bg-[#FDDE55] w-[100%] p-2 rounded-full my-1 "
            type="submit"
          >
            {t("login")}
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
