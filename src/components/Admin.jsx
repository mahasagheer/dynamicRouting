import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <h1 className=" mt-20 text-3xl ">Only Admin can access this page</h1>
        <Link to={"/"}>
          <button className="bg-[#FDDE55] w-[100%] p-2 rounded-full my-5 flex">
            Back to home page
          </button>
        </Link>
      </div>
    </>
  );
};

export default Admin;
