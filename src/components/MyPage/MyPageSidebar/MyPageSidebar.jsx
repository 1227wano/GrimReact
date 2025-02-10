import {
  MyPageFrom,
  Sidebar,
  SidebarTextBox,
  SidebarTitle,
  SidebarText,
} from "./MyPageSidebar.stlyles";

import { useNavigate } from "react-router-dom";

const MyPageSidebar = () => {
  const navi = useNavigate();
  const goTo = (path) => {
    navi(`/mypage/${path}`);
  };
  return (
    <>
      <MyPageFrom>
        <Sidebar>
          <SidebarTitle>마이페이지</SidebarTitle>
          <SidebarTextBox onClick={() => goTo("info")}>
            <SidebarText>내 정보</SidebarText>
          </SidebarTextBox>
          <SidebarTextBox>
            <SidebarText>내 미술관</SidebarText>
          </SidebarTextBox>
          <SidebarTextBox>
            <SidebarText>내가그린그림</SidebarText>
          </SidebarTextBox>
          <SidebarTextBox>
            <SidebarText>경매내역</SidebarText>
          </SidebarTextBox>
          <SidebarTextBox>
            <SidebarText>포인트사용내역</SidebarText>
          </SidebarTextBox>
          <SidebarTextBox onClick={() => goTo("update")}>
            <SidebarText>회원정보수정</SidebarText>
          </SidebarTextBox>
          <SidebarTextBox>
            <SidebarText>회원탈퇴</SidebarText>
          </SidebarTextBox>
        </Sidebar>
      </MyPageFrom>
    </>
  );
};
export default MyPageSidebar;
