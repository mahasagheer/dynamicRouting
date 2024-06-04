import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FC } from "react";
import UseFetch from "./UseFetch";

const Comments: FC = () => {
  const { postId } = useParams();
  const { data, pending } = UseFetch(
    "https://jsonplaceholder.typicode.com/comments"
  );
  return (
    <>
      <h1 className="text-center text-3xl my-10">View Comments</h1>
      {pending && <div className="text-center text-xl">Loading...</div>}
      {data
        .filter((filterOut) => filterOut.postId == postId)
        .map((show, i) => (
          <Link key={i}>
            <div className="bg-[#A0DEFF] my-2  mx-[10%] w-[20] p-4 h-[90]">
              <p>
                <strong>Name: </strong>
                {show.name}
              </p>
              <p>
                <strong>Email: </strong>
                {show.email}
              </p>
              <p>
                <strong>Body: </strong>
                {show.body}
              </p>
            </div>
          </Link>
        ))}
    </>
  );
};

export default Comments;
