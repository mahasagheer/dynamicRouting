import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Comments = () => {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComments(data);
      });
  }, []);
  const com = comments.filter((show) => show.postId == postId);
  console.log(postId);
  return (
    <>
      <h1 className="text-center text-3xl my-10">View Comments</h1>
      {com.map((show) => (
        <Link to={`/${show.id}`}>
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
