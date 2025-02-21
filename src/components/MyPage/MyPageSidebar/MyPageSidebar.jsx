import {
  MyPageFrom,
  Sidebar,
  SidebarTextBox,
  SidebarTitle,
  SidebarText,
} from "./MyPageSidebar.stlyles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyPageSidebar = () => {
  const navi = useNavigate();
  const [activeMenu, setActiveMenu] = useState("info");

  const goTo = (path) => {
    setActiveMenu(path);
    navi(`/mypage/${path}`);
  };
  return (
    <>
      <MyPageFrom>
        <Sidebar>
          <SidebarTitle>마이페이지</SidebarTitle>
          <SidebarTextBox
            onClick={() => goTo("info")}
            style={{
              backgroundColor: activeMenu === "info" ? "rgb(59, 26, 82)" : "",
            }}
          >
            <SidebarText>내 정보</SidebarText>
          </SidebarTextBox>
          <SidebarTextBox
            onClick={() => goTo("museumDetail")} // 본인이 만든 미술관 상세보기로
            style={{
              backgroundColor:
                activeMenu === "museumDetail" ? "rgb(59, 26, 82)" : "",
            }}
          >
            <SidebarText>내 미술관</SidebarText>
          </SidebarTextBox>
          <SidebarTextBox>
            <SidebarText>내가그린그림</SidebarText>
          </SidebarTextBox>
          <SidebarTextBox>
            <SidebarText>경매내역</SidebarText>
          </SidebarTextBox>
          <SidebarTextBox
            onClick={() => goTo("point")}
            style={{
              backgroundColor: activeMenu === "point" ? "rgb(59, 26, 82)" : "",
            }}
          >
            <SidebarText>잉크내역</SidebarText>
          </SidebarTextBox>
          <SidebarTextBox
            onClick={() => goTo("update")}
            style={{
              backgroundColor: activeMenu === "update" ? "rgb(59, 26, 82)" : "",
            }}
          >
            <SidebarText>회원정보 변경</SidebarText>
          </SidebarTextBox>
          <SidebarTextBox
            onClick={() => goTo("password")}
            style={{
              backgroundColor:
                activeMenu === "password" ? "rgb(59, 26, 82)" : "",
            }}
          >
            <SidebarText>✅비밀번호 변경</SidebarText>
          </SidebarTextBox>
          <SidebarTextBox
            onClick={() => goTo("leave")}
            style={{
              backgroundColor: activeMenu === "leave" ? "rgb(59, 26, 82)" : "",
            }}
          >
            <SidebarText>✅회원탈퇴</SidebarText>
          </SidebarTextBox>
        </Sidebar>
      </MyPageFrom>
    </>
  );
};
export default MyPageSidebar;
