import { useState } from "react";
import { useParams } from "react-router-dom";

const Blogs = () => {
  const { userId } = useParams();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { userId, title, body };
    console.log(blog);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("blog posted");
    });
  };
  return (
    <>
      <h1 className="text-center text-3xl my-10">Posts-{userId}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col mx-[20%]">
        <input
          type="text"
          value={title}
          placeholder="title"
          className="text-lg p-4 border-2 border-x-sky-500	rounded	"
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <textarea
          placeholder="type here..."
          rows={5}
          value={body}
          className="text-lg p-4 border-2	border-x-sky-500	rounded"
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <button className="bg-[#FDDE55] w-[100%] p-2 rounded-full my-1">
          Post
        </button>
      </form>
    </>
  );
};

export default Blogs;
