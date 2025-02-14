import { MyPageBox } from "../MyPage.stlyles";
import {
  UpdateError,
  UpdateFrom,
  UpdateImg,
  UpdateImgBox,
  UpdateImgButton,
  UpdateInputBox,
  UpdateInputButton,
  UpdateInputTitle,
  UpdateIntput,
  UpdateTextBox,
  UpdateTextFrom,
  UpdateTitle,
  UpdateUserId,
  UpdateUserIdText,
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
              <UpdateInputTitle>아이디</UpdateInputTitle>
              <UpdateUserId placeholder="ㅎㅎ"></UpdateUserId>
              <UpdateUserIdText>아이디는 수정이 불가능합니다.</UpdateUserIdText>
            </UpdateInputBox>
            <UpdateInputBox>
              <UpdateInputTitle>별명</UpdateInputTitle>
              <UpdateIntput placeholder="사이트에 보이는 닉네임"></UpdateIntput>
              <UpdateError>잘못된 입력이야~</UpdateError>
            </UpdateInputBox>
            <UpdateInputBox>
              <UpdateInputTitle>주소</UpdateInputTitle>
              <UpdateIntput placeholder="주소"></UpdateIntput>
              <UpdateError>잘못된 입력이야~</UpdateError>
            </UpdateInputBox>
            <UpdateInputBox>
              <UpdateInputTitle>이메일</UpdateInputTitle>
              <UpdateIntput placeholder="이메일을 입력해주세요."></UpdateIntput>
              <UpdateError>잘못된 입력이야~</UpdateError>
            </UpdateInputBox>
            <UpdateInputButton>수정 완료</UpdateInputButton>
          </UpdateTextBox>
        </UpdateTextFrom>
      </UpdateFrom>
    </>
  );
};
export default MyPageUpdate;
