import { useState, FormEvent, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { FC } from "react";
import UseFetch from "./UseFetch";

interface RouteParams {
  userId: number;
}
const Update: FC = () => {
  const { userId } = useParams<RouteParams>();
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const { data, pending } = UseFetch<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
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
  const filter = data.find((data) => data.id == userId);
  return (
    <>
      <h1 className="text-center text-3xl my-10">Posts-{userId}</h1>
      {pending && <div className="text-center text-xl">Loading...</div>}
      <form onSubmit={handleSubmit} className="flex flex-col mx-[20%]">
        {filter && (
          <>
            <input
              type="text"
              value={(filter.title = title)}
              placeholder="title"
              className="text-lg p-4 border-2 border-x-sky-500 rounded"
              onChange={handleTitleChange}
            />
            <textarea
              placeholder="type here..."
              rows={5}
              value={(filter.body = body)}
              className="text-lg p-4 border-2 border-x-sky-500 rounded"
              onChange={handleBodyChange}
            />
          </>
        )}
        <button className="bg-[#FDDE55] w-[100%] p-2 rounded-full my-1">
          Post
        </button>
      </form>
      ;
    </>
  );
};

export default Update;
