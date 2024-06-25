import { useQuery } from "react-query";
const UseFetch = (url) => {
  const { data, status } = useQuery("users", async () => {
    const res = await fetch(url);
    return res.json();
  });
  console.log(data);
  return (
    <>
      <p>{status}</p>
    </>
  );
};

export default UseFetch;

// import { useState, useEffect } from "react";
// const UseFetch = (url) => {
//   const [data, setData] = useState([]);
//   const [pending, setPending] = useState(true);
//   useEffect(() => {
//     fetch(url)
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         setData(data);
//         setPending(false);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   }, [url]);
//   return { data, pending };
// };

// export default UseFetch;
