import { useState, FormEvent, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { FC } from "react";

interface RouteParams {
  userId: number;
}
const Update: FC = () => {
  const { userId } = useParams<RouteParams>();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const blog = { userId, title, body };
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log(blog);
      console.log("blog posted");
    });
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  return (
    <>
      <h1 className="text-center text-3xl my-10">Posts-{userId}</h1>
      <form onSubmit={handleSubmit} className="flex flex-col mx-[20%]">
        <input
          type="text"
          value={title}
          placeholder="title"
          className="text-lg p-4 border-2 border-x-sky-500 rounded"
          onChange={handleTitleChange}
        />
        <textarea
          placeholder="type here..."
          rows={5}
          value={body}
          className="text-lg p-4 border-2 border-x-sky-500 rounded"
          onChange={handleBodyChange}
        />
        <button className="bg-[#FDDE55] w-[100%] p-2 rounded-full my-1">
          Post
        </button>
      </form>
    </>
  );
};

export default Update;
