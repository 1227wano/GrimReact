import {
  Address,
  AddressOption,
  ErrorText,
  Form,
  SignupBox,
  SignupButton,
  SignupContainer,
  SignupHr,
  SignupIcon,
  SignupService,
  SignupText,
  SignupTextBox,
  SignupTitle,
} from "./Signup.stlyles";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [userId, setUserId] = useState("");
  const [userPwd, setUserPwd] = useState("");
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [idError, setIdError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [nameError, setNameError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost/members/signup", {
        userId: userId,
        userPwd: userPwd,
        userName: userName,
        userAddress: userAddress,
        userEmail: userEmail,
      })
      .then((response) => {
        alert(response.data);
        setIdError("");
        setPwdError("");
        setNameError("");
        setAddressError("");
        setEmailError("");
        window.location = "/";
      })
      .catch((error) => {
        setIdError(error.response.data.userId);
        setPwdError(error.response.data.userPwd);
        setNameError(error.response.data.userName);
        setAddressError(error.response.data.userAddress);
        setEmailError(error.response.data.userEmail);
      });
  };

  return (
    <SignupContainer>
      <SignupBox>
        <SignupTitle>내가기린그린그림</SignupTitle>
        <SignupService>회원가입 서비스</SignupService>
        <Form onSubmit={handleSubmit}>
          <SignupTextBox>
            <SignupIcon>👨‍🎨</SignupIcon>
            <SignupText
              placeholder="사용자명"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              type="text"
              minLength={6}
              maxLength={12}
            ></SignupText>
            <SignupHr />
            <SignupIcon>🔒</SignupIcon>
            <SignupText
              placeholder="비밀번호"
              value={userPwd}
              onChange={(e) => setUserPwd(e.target.value)}
              type="password"
              minLength={8}
              maxLength={16}
            ></SignupText>
            <SignupHr />
            <SignupIcon>👩‍🎨</SignupIcon>
            <SignupText
              placeholder="별명"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              minLength={2}
              maxLength={5}
            ></SignupText>
          </SignupTextBox>
          {idError && <ErrorText>{idError}</ErrorText>}
          {pwdError && <ErrorText>{pwdError}</ErrorText>}
          {nameError && <ErrorText>{nameError}</ErrorText>}
          <SignupTextBox>
            <SignupIcon>🏠</SignupIcon>
            <Address
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
            >
              <AddressOption value={""} disabled selected>
                주소
              </AddressOption>
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
            </Address>
            <SignupHr />
            <SignupIcon>📫</SignupIcon>
            <SignupText
              placeholder="이메일 [비밀번호찾기]"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              type="text"
              maxLength={22}
            ></SignupText>
          </SignupTextBox>
          {addressError && <ErrorText>{addressError}</ErrorText>}
          {emailError && <ErrorText>{emailError}</ErrorText>}
          <SignupButton type="submit">인증요청</SignupButton>
        </Form>
      </SignupBox>
    </SignupContainer>
  );
};

export default Signup;
