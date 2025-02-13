import { MyPageBox } from "../MyPage.stlyles";
import {
  UpdateFrom,
  UpdateImg,
  UpdateImgBox,
  UpdateImgButton,
  UpdateInputBox,
  UpdateInputButton,
  UpdateInputTitle,
  UpdateIntput,
  UpdateIntPut,
  UpdateText,
  UpdateTextBox,
  UpdateTextFrom,
  UpdateTextTitle,
  UpdateTitle,
} from "./MyPageUpdate.stlyles";

const MyPageUpdate = () => {
  return (
    <>
      <UpdateFrom>
        <UpdateTextFrom>
          <UpdateTitle>회원 정보 수정</UpdateTitle>
          <UpdateImgBox>
            <UpdateImg></UpdateImg>
          </UpdateImgBox>
          <UpdateImgButton>사진 업데이트</UpdateImgButton>
          <UpdateTextBox>
            <UpdateInputBox>
              <UpdateInputTitle>아이디 :</UpdateInputTitle>
              <UpdateIntput placeholder="ㅎㅎ"></UpdateIntput>
            </UpdateInputBox>
            <UpdateInputBox>
              <UpdateInputTitle>별명 :</UpdateInputTitle>
              <UpdateIntput placeholder="ㅎㅎ"></UpdateIntput>
            </UpdateInputBox>
            <UpdateInputBox>
              <UpdateInputTitle>주소 :</UpdateInputTitle>
              <UpdateIntput placeholder="ㅎㅎ"></UpdateIntput>
            </UpdateInputBox>
            <UpdateInputBox>
              <UpdateInputTitle>이메일 :</UpdateInputTitle>
              <UpdateIntput placeholder="ㅎㅎ"></UpdateIntput>
            </UpdateInputBox>
            <UpdateInputButton>수정 완료</UpdateInputButton>
          </UpdateTextBox>
        </UpdateTextFrom>
      </UpdateFrom>
    </>
  );
};
export default MyPageUpdate;
