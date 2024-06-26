import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { Logout, AdminOut } from "../action/index";

export const AuthContext = createContext();
export const counterContext = createContext(null);
export const AuthProvider = ({ children }) => {
  const user = useSelector((state) => state.Auth.user);
  const admin = useSelector((state) => state.Auth.admin);
  const dispatch = useDispatch();
  const [dataSet, setDataSet] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userData = [{ email, password }];
  const navigate = useNavigate();

  const logout = () => {
    dispatch(Logout());
    navigate("/");
    localStorage.removeItem("role");
  };
  const adminOut = () => {
    dispatch(AdminOut());
    navigate("/");
    localStorage.removeItem("role");
  };

  const { data, status } = useQuery("users", async () => {
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
      alert("user logged in ");
      localStorage.setItem("role", JSON.stringify(userData));
      navigate("/home");
    } else if (find.role == "admin") {
      alert("admin logged in ");
      navigate("/home");
      localStorage.setItem("role", JSON.stringify(userData));
    } else {
      navigate("/");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        admin,
        logout,
        adminOut,
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
