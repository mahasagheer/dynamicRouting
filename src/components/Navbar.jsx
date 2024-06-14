import React from "react";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
const Navbar = () => {
  const { user, admin, logout, adminOut } = useContext(AuthContext);

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
          ) : (
            <button className="bg-[#FDDE55] w-[100%] p-2 rounded-full my-1">
              Log In
            </button>
          )}
          {admin ? (
            <button
              className="bg-[#FDDE55] w-[100%] p-2 rounded-full my-1"
              onClick={adminOut}
            >
              Admin Out
            </button>
          ) : (
            <button className="bg-[#FDDE55] w-[100%] p-2 rounded-full my-1">
              Admin In
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
