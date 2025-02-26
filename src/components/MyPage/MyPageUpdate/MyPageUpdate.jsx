import { AddressOption } from "../../Signup/Signup.stlyles";

import {
  DefaultButton,
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
import { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";

const MyPageUpdate = () => {
  const { auth, updateProfileImage } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [file, setFile] = useState(null);
  const [exsitingFileUrl, setExsitingFileUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorData, setErrorData] = useState("");

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
        console.log(response.data);
        alert("회원 정보가 수정 되었습니다.");
        window.location = "/mypage/info";
        if (exsitingFileUrl) {
          updateProfileImage(exsitingFileUrl);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        setErrorMessage(error.response.data.message);
        setErrorData(error.response.data.data);
      });
  };

  const handleDefautlImg = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-restricted-globals
    const isConfirmed = confirm("기본 이미지로 수정하시겠습니까?");
    if (!isConfirmed) {
      return;
    }

    const member = {
      userNo: auth.userNo,
      userFileUrl: "/main_img.PNG",
    };

    axios
      .put("http://localhost/members/mypage/imgupdate", member, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        updateProfileImage("/main_img.PNG");
        window.location = "/mypage/info";
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
            {exsitingFileUrl ? (
              <>
                <UpdateImg src={exsitingFileUrl} />
              </>
            ) : (
              <UpdateImg src={auth.userImg} />
            )}
          </UpdateImgBox>
          <UpdateImgButton onClick={handleButtonClick}>
            사진 업데이트
          </UpdateImgButton>
          <DefaultButton onClick={handleDefautlImg}>기본 이미지</DefaultButton>
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
              ></UpdateIntput>
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
            </UpdateInputBox>
            <UpdateInputBox>
              <UpdateInputTitle>이메일</UpdateInputTitle>
              <UpdateIntput
                placeholder="이메일을 입력해주세요."
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
              ></UpdateIntput>
              {errorMessage && <UpdateError>{errorMessage}</UpdateError>}
              {errorData && <UpdateError>{errorData}</UpdateError>}
            </UpdateInputBox>
            <UpdateInputButton type="submit">수정 완료</UpdateInputButton>
          </UpdateTextBox>
        </UpdateTextForm>
      </UpdateFrom>
    </>
  );
};
export default MyPageUpdate;
