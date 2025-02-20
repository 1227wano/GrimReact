import { AddressOption } from "../../Signup/Signup.stlyles";

import {
  UpdateAddress,
  UpdateError,
  UpdateFrom,
  UpdateImg,
  UpdateImgBox,
  UpdateImgButton,
  UpdateInputBox,
  UpdateInputButton,
  UpdateInputFile,
  UpdateInputTitle,
  UpdateIntput,
  UpdateTextBox,
  UpdateTextForm,
  UpdateTitle,
  UpdateUserId,
  UpdateUserIdText,
} from "./MyPageUpdate.stlyles";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyPageUpdate = () => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [file, setFile] = useState(null);
  const [exsitingFileUrl, setExsitingFileUrl] = useState("");

  const handleImageUpload = (e) => {
    const exsitingFileUrl = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setExsitingFileUrl(reader.result);
    };
    if (exsitingFileUrl) {
      reader.readAsDataURL(exsitingFileUrl);
    }
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    document.getElementById(`fileInput`).click();
  };

  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/");
    } else {
      axios
        .get("http://localhost/members/mypage/update", {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        })
        .then((response) => {
          setUserName(response.data.userName);
          setUserAddress(response.data.userAddress);
          setUserEmail(response.data.userEmail);
          setExsitingFileUrl(response.data.userFileUrl || "");

          console.info(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [auth, navigate]);

  const handleUpdate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userNo", auth.userNo);
    formData.append("userName", userName);
    formData.append("userAddress", userAddress);
    formData.append("userEmail", userEmail);
    formData.append("userFileUrl", exsitingFileUrl);

    if (file) {
      formData.append("file", file);
    }

    axios
      .put("http://localhost/members/mypage/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${auth.accessToken}`,
        },
      })
      .then((response) => {
        console.log(auth.userNo);
        console.log(response.target);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <UpdateFrom>
        <UpdateTextForm onSubmit={handleUpdate}>
          <UpdateTitle>회원 정보 수정</UpdateTitle>
          <UpdateImgBox>
            {exsitingFileUrl && (
              <>
                <UpdateImg src={exsitingFileUrl} />
              </>
            )}
          </UpdateImgBox>
          <UpdateImgButton onClick={handleButtonClick}>
            사진 업데이트
          </UpdateImgButton>
          <UpdateInputFile
            type="file"
            id="fileInput"
            onChange={handleImageUpload}
            accept="image/*"
          ></UpdateInputFile>
          <UpdateTextBox>
            <UpdateInputBox>
              <UpdateInputTitle>아이디</UpdateInputTitle>
              <UpdateUserId placeholder={auth.username}></UpdateUserId>
              <input type="hidden" name="userNo" value={auth.userNo} />
              <UpdateUserIdText>아이디는 수정이 불가능합니다.</UpdateUserIdText>
            </UpdateInputBox>
            <UpdateInputBox>
              <UpdateInputTitle>별명</UpdateInputTitle>
              <UpdateIntput
                placeholder="사이트에 보이는 닉네임"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              ></UpdateIntput>
              <UpdateError>잘못된 입력이야~</UpdateError>
            </UpdateInputBox>
            <UpdateInputBox>
              <UpdateInputTitle>주소</UpdateInputTitle>
              <UpdateAddress
                value={userAddress}
                onChange={(e) => setUserAddress(e.target.value)}
              >
                <AddressOption value={""}>주소</AddressOption>
                <AddressOption value={"서울특별시"}>서울특별시</AddressOption>
                <AddressOption value={"부산광역시"}>부산광역시</AddressOption>
                <AddressOption value={"대구광역시"}>대구광역시</AddressOption>
                <AddressOption value={"인천광역시"}>인천광역시</AddressOption>
                <AddressOption value={"광주광역시"}>광주광역시</AddressOption>
                <AddressOption value={"대전광역시"}>대전광역시</AddressOption>
                <AddressOption value={"울산광역시"}>울산광역시</AddressOption>
                <AddressOption value={"세종특별자치시"}>
                  세종특별자치시
                </AddressOption>
                <AddressOption value={"경기도"}>경기도</AddressOption>
                <AddressOption value={"충청북도"}>충청북도</AddressOption>
                <AddressOption value={"충청남도"}>충청남도</AddressOption>
                <AddressOption value={"전라남도"}>전라남도</AddressOption>
                <AddressOption value={"경상북도"}>경상북도</AddressOption>
                <AddressOption value={"경상남도"}>경상남도</AddressOption>
                <AddressOption value={"강원특별자치도"}>
                  강원특별자치도
                </AddressOption>
                <AddressOption value={"전북특별자치도"}>
                  전북특별자치도
                </AddressOption>
                <AddressOption value={"제주특별자치도"}>
                  제주특별자치도
                </AddressOption>
              </UpdateAddress>
              <UpdateError>잘못된 입력이야~</UpdateError>
            </UpdateInputBox>
            <UpdateInputBox>
              <UpdateInputTitle>이메일</UpdateInputTitle>
              <UpdateIntput
                placeholder="이메일을 입력해주세요."
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              ></UpdateIntput>
              <UpdateError>잘못된 입력이야~</UpdateError>
            </UpdateInputBox>
            <UpdateInputButton type="submit">수정 완료</UpdateInputButton>
          </UpdateTextBox>
        </UpdateTextForm>
      </UpdateFrom>
    </>
  );
};
export default MyPageUpdate;
