import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { AuthContext } from "../Context/AuthContext";

function Sidebar() {
  const navi = useNavigate();

  const goTo = (path) => {
    navi(path);
  };

  const { auth, logout } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <h2 className="logoTitle">내가기린</h2>
      <h2>그린그림</h2>

      {auth.isAuthenticated ? <></> : <></>}

      <div className="profile-picture" onClick={() => goTo("/login")}>
        <div className="start">시작하기</div>
      </div>

      <ul>
        <li onClick={() => goTo("/")}>홈버튼</li>
        <li onClick={() => goTo("/paint")}>그림그리기</li>
        <li>상점</li>
        <li>경매</li>
        <li>그림 게시판</li>
        <li>소규모 게시판</li>
        <li>미술관</li>
      </ul>
    </div>
  );
}

export default Sidebar;
