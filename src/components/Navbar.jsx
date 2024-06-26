import React from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { Logout, AdminOut } from "../action/index";

const Navbar = () => {
  const user = useSelector((state) => state.Auth.user);
  const admin = useSelector((state) => state.Auth.admin);

  const { logout, adminOut } = useContext(AuthContext);

  return (
    <>
      <nav className="bg-[#A0DEFF] flex justify-between px-10 items-center">
        <h1 className="text-3xl">Users</h1>
        <div className="w-[12%] flex justify-between">
          {user ? (
            <button
              className="bg-[#FDDE55] w-[100%] p-2 rounded-full my-1"
              onClick={logout}
            >
              Log Out
            </button>
          ) : null}
          {admin ? (
            <button
              className="bg-[#FDDE55] w-[100%] p-2 rounded-full my-1"
              onClick={adminOut}
            >
              Admin out
            </button>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
