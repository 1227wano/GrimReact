import { MyPageFrom } from "../MyPage.stlyles";
import {
  PointInt,
  PointListButton,
  PointTable,
  PointTbody,
  PointTd,
  PointText,
  PointTh,
  PointThead,
  PointTitle,
  PointTr,
  ThDate,
  ThPoint,
} from "./MypagePoint.stlyles";

const MyPagePoint = () => {
  return (
    <>
      <PointTitle>잉크 내역</PointTitle>
      <PointText>총 잉크 : </PointText>
      <PointInt>5000</PointInt>
      <PointTable>
        <PointThead>
          <PointTr>
            <ThPoint>잉크 수</ThPoint>
            <PointTh>사유</PointTh>
            <ThDate>날짜</ThDate>
          </PointTr>
        </PointThead>
        <PointTbody>
          <PointTr>
            <PointTd>-200</PointTd>
            <PointTd>물감 구매</PointTd>
            <PointTd>2024.02.02</PointTd>
          </PointTr>
          <PointTr>
            <PointTd>1000</PointTd>
            <PointTd>회원가입 지급</PointTd>
            <PointTd>2024.02.08</PointTd>
          </PointTr>
        </PointTbody>
      </PointTable>
      <PointListButton>더 보기</PointListButton>
    </>
  );
};
export default MyPagePoint;
