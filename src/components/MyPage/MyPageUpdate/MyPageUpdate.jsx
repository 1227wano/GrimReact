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
          <UpdateFrom2_2>나는 회원정보 넣을꺼야ㅐ</UpdateFrom2_2>
        </UpdateFrom2>
        <UpdateFrom3></UpdateFrom3>
      </UpdateFrom>
    </>
  );
};
export default MyPageUpdate;
