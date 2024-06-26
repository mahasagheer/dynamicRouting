import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FC } from "react";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { CSpinner } from "@coreui/react";

const Comments: FC = () => {
  const mystate = useSelector((state) => state.Spinner);
  const { postId } = useParams();
  const { data, status } = useQuery("users", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    return res.json();
  });
  return (
    <>
      <h1 className="text-center text-3xl my-10">View Comments</h1>
      {status === "error" && (
        <p className="text-center text-xl">Error fetching data</p>
      )}
      {status === "loading" && mystate ? (
        <div className="text-center text-xl">
          <CSpinner color="warning" variant="grow" />
        </div>
      ) : null}
      {status === "success" &&
        data
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
