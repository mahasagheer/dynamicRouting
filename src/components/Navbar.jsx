import React from "react";

const Navbar = ({ user, login, logout, adminIn, adminOut, admin }) => {
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
            <button
              className="bg-[#FDDE55] w-[100%] p-2 rounded-full my-1"
              onClick={login}
            >
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
            <button
              className="bg-[#FDDE55] w-[100%] p-2 rounded-full my-1"
              onClick={adminIn}
            >
              Admin In
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
