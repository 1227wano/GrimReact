import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { AuthContext } from "../Context/AuthContext";

function Sidebar() {
  const navi = useNavigate();
  const { auth, logout } = useContext(AuthContext);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const goTo = (path) => {
    navi(path);
  };

  const handleProfileClick = () => {
    setIsAccordionOpen((prevState) => !prevState);
    if (!auth.isAuthenticated) {
      goTo("/login");
    }
  };

  return (
    <div className="sidebar">
      <h2 className="logoTitle">내가기린</h2>
      <h2>그린그림</h2>

      <div className="profile-picture" onClick={handleProfileClick}>
        <div className="start">
          {auth.isAuthenticated ? "마이페이지" : "시작하기"}
        </div>
      </div>

      {auth.isAuthenticated && (
        <div className={`accordion-content ${isAccordionOpen ? "open" : ""}`}>
          <ul>
            <li onClick={logout}>로그아웃</li>
            <li onClick={() => goTo("/mypage")}>프로필</li>
            <li onClick={() => goTo("/settings")}>설정</li>
          </ul>
        </div>
      )}

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
