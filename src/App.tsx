import { BrowserRouter, Routes, Route } from "react-router-dom";

import Users from "./components/Users";
import UsersPost from "./components/UsersPost";
import Comments from "./components/Comments";
import Blogs from "./components/Blogs";
import Update from "./components/Update";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/users/:userId" element={<UsersPost />} />
          <Route path="/users/:userId/:postId" element={<Comments />} />
          <Route path="/blogs/:userId" element={<Blogs />} />
          <Route path="/update/:userId" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
