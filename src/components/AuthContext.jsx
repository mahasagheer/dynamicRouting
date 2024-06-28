import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { logout, adminIn, adminOut, login } from "../features/auth/AuthSlice";

export const AuthContext = createContext();
export const counterContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  const admin = useSelector((state) => state.auth.admin);

  const dispatch = useDispatch();
  const [dataSet, setDataSet] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userData = [{ email, password }];
  const navigate = useNavigate();

  const logoutUser = () => {
    dispatch(logout());
    navigate("/");
  };

  const AdminOut = () => {
    dispatch(adminOut());
    navigate("/");
  };

  const { data } = useQuery("users", async () => {
    const res = await fetch("http://localhost:3001/roleBasedAuth");
    return res.json();
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const find = data.find(
      (find) => find.email == email && find.password == password
    );
    console.log(find);
    if (find.role == "user") {
      dispatch(adminOut());
      console.log(user);
      alert("user logged in ");
      navigate("/home");
      console.log(user);
      console.log(admin);
    } else if (find.role == "admin") {
      dispatch(logout());
      alert("admin logged in ");
      navigate("/home");
      console.log(user);
      console.log(admin);
    } else {
      navigate("/");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        logoutUser,
        AdminOut,
        dataSet,
        setDataSet,
        email,
        setEmail,
        password,
        setPassword,
        userData,
        handleSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// export const CountProvider = ({ children }) => {
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     setCount(count + 1);
//   };
//   return (
//     <counterContext.Provider value={[count, increment]}>
//       {children}
//     </counterContext.Provider>
//   );
// };
