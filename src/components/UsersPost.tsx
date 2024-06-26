import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { CSpinner } from "@coreui/react";
// import UseFetch from "./UseFetch";
// const { data, pending } = UseFetch<Post[]>(
//   "https://jsonplaceholder.typicode.com/posts"
// );

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Params {
  userId: string;
}

const UsersPost: FC = () => {
  const mystate = useSelector((state) => state.Spinner);
  const { userId } = useParams<Params>();
  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/home");
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log("deleted", id);
  };
  const { data, status } = useQuery("posts", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  });
  return (
    <>
      <h1 className="text-center text-3xl my-10">View Posts</h1>
      {status === "error" && (
        <div className="text-center text-xl">Error in Fetching Data</div>
      )}
      {status === "loading" && mystate ? (
        <div className="text-center text-xl">
          <CSpinner color="warning" variant="grow" />
        </div>
      ) : null}
      {data &&
        data
          .filter((view) => view.userId.toString() === userId)
          .map((show, i) => (
            <div
              key={i}
              className="bg-[#A0DEFF] my-2  mx-[10%] w-[20] p-4 h-[90] "
            >
              <Link to={`/users/${userId}/${show.id}`}>
                <p>
                  <strong>Title:</strong>
                  {show.title}
                </p>
                <p>
                  <strong>Content:</strong>
                  {show.body}
                </p>
              </Link>

              <button
                className="bg-[#FDDE55] w-[10%] p-2 rounded-full	my-1"
                onClick={() => handleDelete(show.id)}
              >
                Delete
              </button>
              <Link to={`/update/${show.id}`}>
                <button
                  className="bg-[#FDDE55] w-[10%] p-2 rounded-full	my-1"
                  title={show.title}
                >
                  Update
                </button>
              </Link>
            </div>
          ))}
    </>
  );
};

export default UsersPost;
