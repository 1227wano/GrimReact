import { MyPageBox } from "../MyPage.stlyles";
import {
  UpdateFrom,
  UpdateFrom2,
  UpdateFrom2_1,
  UpdateFrom2_2,
  UpdateFrom3,
  UpdateImg,
  UpdateImgBox,
  UpdateImgButton,
  UpdateImgFrom,
  UpdateText,
  UpdateTextFrom,
  UpdateTextTitle,
  UpdateTitle,
} from "./MyPageUpdate.stlyles";

const MyPageUpdate = () => {
  return (
    <>
      <UpdateFrom>
        <UpdateTitle>회원정보 수정</UpdateTitle>
        <UpdateFrom2>
          <UpdateFrom2_1>
            <UpdateImgFrom>
              <UpdateImg src="" />
              <UpdateImgButton>이미지 수정</UpdateImgButton>
            </UpdateImgFrom>
          </UpdateFrom2_1>
          <UpdateFrom2_2>
            <UpdateTextFrom>
              <UpdateTextTitle>사용자명</UpdateTextTitle>
              <UpdateText type="text"></UpdateText>
              <br />
              <UpdateTextTitle>비밀번호</UpdateTextTitle>
              <UpdateText></UpdateText>
              <br />
              <UpdateTextTitle>별명</UpdateTextTitle>
              <UpdateText></UpdateText>
              <br />
              <UpdateTextTitle>주소</UpdateTextTitle>
              <UpdateText></UpdateText>
              <br />
              <UpdateTextTitle>이메일</UpdateTextTitle>
              <UpdateText></UpdateText>
            </UpdateTextFrom>
          </UpdateFrom2_2>
        </UpdateFrom2>
        <UpdateFrom3></UpdateFrom3>
      </UpdateFrom>
    </>
  );
};
export default MyPageUpdate;
