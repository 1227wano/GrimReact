import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logoTitle">내가기린</h2>
      <h2>그린그림</h2>

      <div className="profile-picture"></div>

      <ul>
        <li>홈버튼</li>
        <li>그림그리기</li>
        <li>마이페이지</li>
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
