import { BrowserRouter, Routes, Route } from "react-router-dom";

import Users from "./components/Users";
import UsersPost from "./components/UsersPost";
import Comments from "./components/Comments";
import Blogs from "./components/Blogs";
import Update from "./components/Update";
import Navbar from "./components/Navbar";
import { useState } from "react";
import PrivateRoutes from "./components/PrivateRoutes";
import Admin from "./components/Admin";

function App() {
  const [user, setUser] = useState(false);
  const [admin, setAdmin] = useState(false);

  const login = () => {
    setUser(true);
  };
  const logout = () => {
    setUser(false);
  };
  const adminIn = () => {
    setAdmin(true);
  };
  const adminOut = () => {
    setAdmin(false);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar
          admin={admin}
          user={user}
          login={login}
          logout={logout}
          adminIn={adminIn}
          adminOut={adminOut}
        />
        <Routes>
          <Route path="/" element={<Users />} />
          <Route
            path="/users/:userId"
            element={
              <PrivateRoutes user={user}>
                <UsersPost />
              </PrivateRoutes>
            }
          ></Route>
          <Route
            path="users/:userId/:postId"
            element={
              <PrivateRoutes user={user}>
                <Comments />{" "}
              </PrivateRoutes>
            }
          ></Route>
          <Route
            path="/update/:userId"
            element={
              <PrivateRoutes user={user}>
                <Update />{" "}
              </PrivateRoutes>
            }
          ></Route>

          <Route
            path="/blogs/:userId"
            element={
              <PrivateRoutes admin={admin}>
                <Blogs />
              </PrivateRoutes>
            }
          ></Route>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
