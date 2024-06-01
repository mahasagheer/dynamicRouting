import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Fetch = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <>
      <h1 className="text-center text-3xl my-10">Users</h1>
      {users.map((user) => (
        <div className="bg-[#A0DEFF] flex justify-between my-4 mx-[10%] items-center	p-6 rounded-xl">
          <p className="text-lg pl-10">{user.id}</p>
          <div className="w-[40%]">
            <p className="text-lg">
              <strong>Name: </strong>
              {user.name}
            </p>
            <p className="text-lg">
              <strong>UserName: </strong>
              {user.username}
            </p>
            <p className="text-lg">
              <strong>Email: </strong>
              {user.email}
            </p>
            <span className="text-lg">
              <strong>Address: </strong> {user.address.street},
            </span>
            <span className="text-lg"> {user.address.suite},</span>
            <span className="text-lg"> {user.address.city},</span>
            <span className="text-lg"> {user.address.zipcode}</span>
            <p className="text-lg">
              <strong>Phone no: </strong>
              {user.phone}
            </p>
            <p className="text-lg">
              <strong>Website: </strong>
              {user.website}
            </p>
          </div>
          <div className="flex flex-col w-[15%]">
            <Link to={`/users/${user.id}`}>
              <button className="bg-[#FDDE55] w-[100%] p-2 rounded-full my-1	">
                View Post
              </button>
            </Link>
            <Link to={`/blogs/${user.id}`}>
              <button className="bg-[#FDDE55] w-[100%] p-2 rounded-full	my-1">
                Posts
              </button>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};
export default Fetch;
