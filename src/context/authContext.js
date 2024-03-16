import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const navigation = useNavigate();
  const [user, setUser] = useState(
    window.localStorage.getItem("token") || null
  );

  const login = (token) => {
    window.localStorage.setItem("token", JSON.stringify(token));
    setUser(JSON.stringify(token));
    navigation("/");
  };

  const logout = () => {
    window.localStorage.removeItem("token");
    setUser(null);
  };

  const isLogin = () => user;

  const authData = {
    user,
    login,
    logout,
    isLogin,
  };

  return (
    <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
  );
};
