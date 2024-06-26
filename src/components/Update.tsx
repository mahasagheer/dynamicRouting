import { useParams } from "react-router-dom";
import { FC } from "react";
// import UseFetch from "./UseFetch";
import { useFormik } from "formik";
import { useQuery } from "react-query";
import * as Yup from "yup";

interface RouteParams {
  userId: number;
}
const Update: FC = () => {
  const { userId } = useParams<RouteParams>();
  // const { data, pending } = UseFetch<Post[]>(
  //   "https://jsonplaceholder.typicode.com/posts"
  // );
  const { data } = useQuery("posts", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  });
  const filter = data.find((data) => data.id == userId);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        title: filter.title,
        body: filter.body,
        userId: filter.userId,
        id: userId,
      },
      validationSchema: Yup.object({
        title: Yup.string().min(10).max(20).required("Enter title..."),
        body: Yup.string().min(50).max(250).required("Type Here......"),
      }),
      onSubmit: (values) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }).then(() => {
          console.log(values);
          console.log("blog posted");
        });
      },
    });

  return (
    <>
      <h1 className="text-center text-3xl my-10">Posts-{userId}</h1>
      {/* {pending && <div className="text-center text-xl">Loading...</div>} */}
      <form onSubmit={handleSubmit} className="flex flex-col mx-[20%]">
        <>
          <input
            type="text"
            value={values.title}
            name="title"
            placeholder="title"
            className="text-lg p-4 border-2 border-x-sky-500 rounded"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.title && touched.title ? <p>{errors.title}</p> : null}
          <textarea
            placeholder="type here..."
            rows={5}
            name="body"
            value={values.body}
            className="text-lg p-4 border-2 border-x-sky-500 rounded"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.body && touched.body ? <p>{errors.body}</p> : null}
        </>
        <button
          className="bg-[#FDDE55] w-[100%] p-2 rounded-full my-1"
          type="submit"
        >
          Post
        </button>
      </form>
      ;
    </>
  );
};

export default Update;
