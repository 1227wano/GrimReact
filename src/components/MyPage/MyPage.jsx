import {
  MyPageBox,
  MyPageFrom,
  MyPageText,
  MyPageTextBox,
  MyPaSidebar,
} from "./MyPage.stlyles";

const MyPage = () => {
  return (
    <>
      <MyPageFrom>
        <MyPaSidebar></MyPaSidebar>
        <MyPageBox>
          <MyPageTextBox></MyPageTextBox>
        </MyPageBox>
      </MyPageFrom>
    </>
  );
};
export default MyPage;
