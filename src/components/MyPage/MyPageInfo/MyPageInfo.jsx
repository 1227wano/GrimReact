import {
  InfoFrom,
  InfoImg,
  InfoImgBox,
  InfoText,
  InfoTextBox,
  InfoTextTitle,
  InfoTitle,
} from "./MyPageInfo.stlyles";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";

const MyPageInfo = () => {
  const { auth } = useContext(AuthContext);
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!auth.accessToken) return;

    axios
      .get("http://localhost/members/mypage/info", {
        headers: { Authorization: `Bearer ${auth.accessToken}` },
      })
      .then((response) => {
        console.log("데이터 받음", response);

        setMember(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("요청 실패", error);
        setError("데이터 불러오는 중 오류가 발생했습니다.");
        setLoading(false);
      });
  }, [auth.accessToken]);

  if (loading) return <p>로딩 중 ...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <InfoFrom>
        <InfoTitle>내 정보</InfoTitle>
        <InfoImgBox>
          <InfoImg></InfoImg>
        </InfoImgBox>
        <InfoTextBox>
          <InfoTextTitle>보유 잉크 : </InfoTextTitle>
          <InfoText></InfoText>
        </InfoTextBox>
        <InfoTextBox>
          <InfoTextTitle>아이디 : </InfoTextTitle>
          <InfoText>{member.username}</InfoText>
        </InfoTextBox>
        <InfoTextBox>
          <InfoTextTitle>별명 : </InfoTextTitle>
          <InfoText>{member.nickName}</InfoText>
        </InfoTextBox>
        <InfoTextBox>
          <InfoTextTitle>주소 : </InfoTextTitle>
          <InfoText>{member.address}</InfoText>
        </InfoTextBox>
        <InfoTextBox>
          <InfoTextTitle>이메일 : </InfoTextTitle>
          <InfoText>{member.email}</InfoText>
        </InfoTextBox>
        <InfoTextBox>
          <InfoTextTitle>그린 그림 수 :</InfoTextTitle>
          <InfoText></InfoText>
        </InfoTextBox>
        <InfoTextBox>
          <InfoTextTitle>좋아요 수 : </InfoTextTitle>
          <InfoText></InfoText>
        </InfoTextBox>
        <InfoTextBox>
          <InfoTextTitle>유저 등급 : </InfoTextTitle>
          <InfoText></InfoText>
        </InfoTextBox>
        <InfoTextBox>
          <InfoTextTitle>??</InfoTextTitle>
          <InfoText>??</InfoText>
        </InfoTextBox>
      </InfoFrom>
    </>
  );
};
export default MyPageInfo;
