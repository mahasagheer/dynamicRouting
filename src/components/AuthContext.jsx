import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();
export const counterContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(!!localStorage.getItem("role"));
  const [admin, setAdmin] = useState(false);
  const [data, setData] = useState([]);
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
