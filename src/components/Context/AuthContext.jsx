import { useState, useEffect, createContext, children } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    userNo: null,
    username: null,
    userImg: null,
    accessToken: null,
    refreshToken: null,
    isAuthenticated: false,
  });

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const userImg = localStorage.getItem("userImg");
    const username = localStorage.getItem("username");
    const userNo = localStorage.getItem("userNo");
    if (accessToken && refreshToken && userImg && username && userNo) {
      setAuth({
        userNo,
        username,
        userImg,
        accessToken,
        refreshToken,
        isAuthenticated: true,
      });
    }
  }, []);

  const login = (userNo, username, accessToken, refreshToken, userImg) => {
    setAuth({
      userNo,
      username,
      userImg,
      accessToken,
      refreshToken,
      isAuthenticated: true,
    });
    localStorage.setItem("userNo", userNo);
    localStorage.setItem("username", username);
    localStorage.setItem("userImg", userImg);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };

  const updateProfileImage = (newUserImg) => {
    setAuth((prevState) => ({
      ...prevState,
      userImg: newUserImg,
    }));
    localStorage.setItem("userImg", newUserImg);
  };

  const logout = () => {
    setAuth({
      userNo: null,
      username: null,
      userImg: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
    });
    localStorage.removeItem("userNo");
    localStorage.removeItem("username");
    localStorage.removeItem("userImg");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout, updateProfileImage }}>
      {children}
    </AuthContext.Provider>
  );
};
