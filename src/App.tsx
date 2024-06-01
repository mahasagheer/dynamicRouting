import { BrowserRouter, Routes, Route } from "react-router-dom";

import Fetch from "./components/Fetch";
import FetchPost from "./components/FetchPost";
import Comments from "./components/Comments";
import Blogs from "./components/Blogs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Fetch />} />
          <Route path="/users/:userId" element={<FetchPost />} />
          <Route path="/users/:userId/:postId" element={<Comments />} />
          <Route path="/blogs/:userId" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
