import { useState, useEffect } from "react";
const UseFetch = (url) => {
  const [data, setData] = useState([]);
  const [pending, setPending] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
        setPending(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [url]);
  return { data, pending };
};

export default UseFetch;
