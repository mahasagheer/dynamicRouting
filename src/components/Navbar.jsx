import React from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.auth.userLoggedIn.user);
  const admin = useSelector((state) => state.auth.admin);

  console.log(user);
  // const { logoutUser, AdminOut, admin, user } = useContext(AuthContext);

  return (
    <>
      <nav className="bg-[#A0DEFF] flex justify-between px-10 items-center">
        <h1 className="text-3xl">Users</h1>
        <div className="w-[12%] flex justify-between">
          {user ? (
            <button className="bg-[#FDDE55] w-[100%] p-2 rounded-full my-1">
              Log Out
            </button>
          ) : null}
          {admin ? (
            <button className="bg-[#FDDE55] w-[100%] p-2 rounded-full my-1">
              Admin out
            </button>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
