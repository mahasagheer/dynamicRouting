import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const FetchPost = () => {
  const [viewPost, setViewPost] = useState([]);
  const { userId } = useParams();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setViewPost(data);
      });
  }, []);
  const filt = viewPost.filter((view) => view.userId == userId);

  return (
    <>
      <h1 className="text-center text-3xl my-10">View Posts</h1>
      {filt.map((show) => (
        <Link to={`/users/${userId}/${show.id}`}>
          <div className="bg-[#A0DEFF] my-2  mx-[10%] w-[20] p-4 h-[90] ">
            <p>
              <strong>Title:</strong>
              {show.title}
            </p>
            <p>
              <strong>Content:</strong>
              {show.body}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default FetchPost;
