import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
export const counterContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(!!localStorage.getItem("role"));
  const [admin, setAdmin] = useState(false);
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userData = [{ email, password }];
  const navigate = useNavigate();

  const logout = () => {
    setUser(false);
    navigate("/");
    localStorage.removeItem("role");
  };
  const adminOut = () => {
    setAdmin(false);
    navigate("/");
    localStorage.removeItem("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const find = data.find(
      (find) => find.email == email && find.password == password
    );
    if (find.role == "user") {
      setUser(true);
      alert("user logged in ");
      localStorage.setItem("role", JSON.stringify(userData));
      navigate("/home");
    } else if (find.role == "admin") {
      setAdmin(true);
      alert("admin logged in ");
      navigate("/home");
      localStorage.setItem("role", JSON.stringify(userData));
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    fetch("http://localhost:3001/roleBasedAuth")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        setAdmin,
        admin,
        logout,
        adminOut,
        data,
        setData,
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
export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <counterContext.Provider value={[count, increment]}>
      {children}
    </counterContext.Provider>
  );
};
