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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<PrivateRoutes />}>
          <Route
            path="/home"
            element={
              <>
                <Navbar />
                <Users />
              </>
            }
          />
          <Route
            path="/users/:userId"
            element={
              <>
                <Navbar />
                <UsersPost />
              </>
            }
          />
          <Route
            path="users/:userId/:postId"
            element={
              <>
                <Navbar />
                <Comments />
              </>
            }
          />
          <Route
            path="/update/:userId"
            element={
              <>
                <Navbar />
                <Update />
              </>
            }
          />
        </Route>
        <Route path="/blogs/:userId" element={<Blogs />} />
        <Route path="/admin" element={<Admin />} />
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
