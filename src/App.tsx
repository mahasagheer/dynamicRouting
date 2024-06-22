import { Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import UsersPost from "./components/UsersPost";
import Comments from "./components/Comments";
import Blogs from "./components/Blogs";
import Update from "./components/Update";
import PrivateRoutes from "./components/PrivateRoutes";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ReactForm from "./components/ReactForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <PrivateRoutes roles={["admin", "user"]}>
              <Navbar />
              <Users />
            </PrivateRoutes>
          }
        />
        <Route
          path="/users/:userId"
          element={
            <PrivateRoutes roles={["admin", "user"]}>
              <Navbar />
              <UsersPost />
            </PrivateRoutes>
          }
        />
        <Route
          path="users/:userId/:postId"
          element={
            <PrivateRoutes roles={["admin", "user"]}>
              <Navbar />
              <Comments />
            </PrivateRoutes>
          }
        />
        <Route
          path="/update/:userId"
          element={
            <PrivateRoutes roles={["admin", "user"]}>
              <Navbar />
              <Update />
            </PrivateRoutes>
          }
        />

        <Route
          path="/blogs/:userId"
          element={
            <PrivateRoutes roles={"admin"}>
              <Blogs />
            </PrivateRoutes>
          }
        />
        <Route path="/admin" element={<Admin />} />
        <Route path="/form" element={<ReactForm />} />
      </Routes>
    </>
  );
}

export default App;

/* <Route
            path="/"
            element={
              <AuthContext.Provider value={{ user, setUser, setAdmin }}>
                <Login />
              </AuthContext.Provider>
            }
          /> */
