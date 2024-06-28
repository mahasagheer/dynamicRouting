import { Link } from "react-router-dom";
import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../features/auth/UserSlice";
import { CSpinner } from "@coreui/react";

const Users: FC = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <h1
        className="text-center text-3xl my-10"
        onClick={() => dispatch(fetchUser())}
      >
        Users
      </h1>
      {state.user.isLoading && (
        <div className="text-center text-xl">
          <CSpinner color="warning" variant="grow" />
        </div>
      )}
      {state.user.isError && (
        <div className="text-center text-xl">
          Check Your Internet Connection
        </div>
      )}

      <div>
        {state.user.data &&
          state.user.data.map((data, i) => (
            <div
              key={i}
              className="bg-[#A0DEFF] flex justify-between my-4 mx-[10%] items-center	p-6 rounded-xl"
            >
              <p className="text-lg pl-10">{data.id}</p>
              <div className="w-[40%]">
                <p className="text-lg">
                  <strong>Name: </strong>
                  {data.name}
                </p>
                <p className="text-lg">
                  <strong>UserName: </strong>
                  {data.username}
                </p>
                <p className="text-lg">
                  <strong>Email: </strong>
                  {data.email}
                </p>
                <span className="text-lg">
                  <strong>Address: </strong> {data.address.street},
                </span>
                <span className="text-lg"> {data.address.suite},</span>
                <span className="text-lg"> {data.address.city},</span>
                <span className="text-lg"> {data.address.zipcode}</span>
                <p className="text-lg">
                  <strong>Phone no: </strong>
                  {data.phone}
                </p>
                <p className="text-lg">
                  <strong>Website: </strong>
                  {data.website}
                </p>
              </div>
              <div className="flex flex-col w-[15%]">
                <Link to={`/users/${data.id}`}>
                  <button className="bg-[#FDDE55] w-[100%] p-2 rounded-full my-1	">
                    View Post
                  </button>
                </Link>
                <Link to={`/blogs/${data.id}`}>
                  <button className="bg-[#FDDE55] w-[100%] p-2 rounded-full	my-1">
                    Posts
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
      {/* )} */}
    </>
  );
};
export default Users;

// import UseFetch from "./UseFetch";
// const { data } = UseFetch("https://jsonplaceholder.typicode.com/users");
