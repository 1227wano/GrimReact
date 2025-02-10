import { MyPageBox, MyPageFrom } from "./MyPage.stlyles";
import MyPageInfo from "./MyPageInfo/MyPageInfo";
import MyPageSidebar from "./MyPageSidebar/MyPageSidebar";
import { Routes, Route, Outlet } from "react-router-dom";
import MyPageUpdate from "./MyPageUpdate/MyPageUpdate";

const MyPage = () => {
  return (
    <>
      <MyPageFrom>
        <MyPageSidebar />
        <MyPageBox>
          <Routes>
            <Route path="info" element={<MyPageInfo />} />
            <Route path="update" element={<MyPageUpdate />} />
          </Routes>
          <Outlet />
        </MyPageBox>
      </MyPageFrom>
    </>
  );
};
export default MyPage;
