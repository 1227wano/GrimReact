import { MyPageBox, MyPageFrom } from "./MyPage.stlyles";
import MyPageInfo from "./MyPageInfo/MyPageInfo";
import MyPageSidebar from "./MyPageSidebar/MyPageSidebar";
import { Routes, Route, Outlet } from "react-router-dom";
import MyPageUpdate from "./MyPageUpdate/MyPageUpdate";
import MyPagePoint from "./MyPagePoint/MyPagePoint";

import MyPageLeave from "./MyPageLeave/MyPageLeave";
import MyPagePassword from "./MyPagePassword/MyPagePassword";
import MyMuseum from "./MyMuseum/MyMuseum";

const MyPage = () => {
  return (
    <>
      <MyPageFrom>
        <MyPageSidebar />
        <MyPageBox>
          <Routes>
            <Route path="info" element={<MyPageInfo />} />
            <Route path="update" element={<MyPageUpdate />} />
            <Route path="point" element={<MyPagePoint />} />
            <Route path="password" element={<MyPagePassword />} />
            <Route path="leave" element={<MyPageLeave />} />
            <Route path="museumDetail" element={<MyMuseum />} />
          </Routes>
          <Outlet />
        </MyPageBox>
      </MyPageFrom>
    </>
  );
};
export default MyPage;
