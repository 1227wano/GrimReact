import {
  InputBox,
  NoticeBox,
  PasswordButton,
  PasswordCheck,
  PasswordError,
  PasswordForm,
  PasswordInput,
  PasswordInputButton,
  PasswordInputForm,
  PasswordNotice,
  PasswordNoticeText,
  PasswordText,
  PasswordTextBox,
  PasswordTitle,
} from "./MyPagePassword.stlyles";
import { AuthContext } from "../../Context/AuthContext";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

const MyPagePassword = () => {
  const { auth } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");

  const [currentError, setCurrentError] = useState("");
  const [newError, setNewError] = useState("");
  const [CheckError, setCheckError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const passwordView = (e) => {
    e.preventDefault();
    setShowPassword((prevState) => !prevState);
  };

  const checkdPassword = () => {
    if (!newPasswordCheck && !newPassword) {
      setErrorMsg("");
    } else if (newPasswordCheck && newPasswordCheck !== newPassword) {
      setErrorMsg("❌ 비밀번호가 일치하지 않습니다.");
    } else if (newPasswordCheck && newPasswordCheck === newPassword) {
      setErrorMsg("✅ 비밀번호 일치함");
    } else {
      setErrorMsg("");
    }
  };
  useEffect(() => {
    checkdPassword();
  }, [newPassword, newPasswordCheck]);

  const handleChangePassword = (e) => {
    e.preventDefault();

    axios
      .put(
        "http://localhost/members/mypage/password",
        {
          currentPassword: currentPassword,
          newPassword: newPassword,
          newPasswordCheck: newPasswordCheck,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);

        setCurrentPassword("");
        setNewPassword("");
        setNewPasswordCheck("");

        setCurrentError("");
        setNewError("");
        setCheckError("");

        setCurrentError(response.data.currentPassword);
        setNewError(response.data.newPassword);
        setCheckError(response.data.newPasswordCheck);
        alert("비밀번호가 성공적으로 변경되었습니다!");
      })
      .catch((error) => {
        setCurrentError(error.response.data.currentPassword);
        setNewError(error.response.data.newPassword);
        setCheckError(error.response.data.newPasswordCheck);
        setErrorMessage(error.response.data.data);
      });
  };

  return (
    <>
      <PasswordForm>
        <PasswordInputForm onSubmit={handleChangePassword}>
          <PasswordTitle>비밀번호 변경</PasswordTitle>
          <PasswordTextBox>
            <PasswordText>현재 비밀번호</PasswordText>
            <InputBox>
              <PasswordInput
                type={showPassword ? "text" : "password"}
                onChange={(e) => setCurrentPassword(e.target.value)}
                value={currentPassword}
                required
                placeholder="현재 비밀번호"
              ></PasswordInput>
            </InputBox>
            {errorMessage && <PasswordError>{errorMessage}</PasswordError>}
            {currentError && <PasswordError>{currentError}</PasswordError>}
          </PasswordTextBox>
          <PasswordTextBox>
            <PasswordText>새 비밀번호</PasswordText>
            <InputBox>
              <PasswordInput
                type={showPassword ? "text" : "password"}
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
                required
                placeholder="새 비밀번호"
              ></PasswordInput>
            </InputBox>
            <PasswordText>새 비밀번호 확인</PasswordText>
            <InputBox>
              <PasswordInput
                type={showPassword ? "text" : "password"}
                onChange={(e) => setNewPasswordCheck(e.target.value)}
                value={newPasswordCheck}
                placeholder="새 비밀번호 확인"
                required
              ></PasswordInput>
            </InputBox>

            {newError && <PasswordError>{newError}</PasswordError>}
            {CheckError && <PasswordError>{CheckError}</PasswordError>}
            {errorMsg && (
              <PasswordError
                style={{
                  color: errorMsg.includes("✅ 비밀번호 일치함")
                    ? "rgb(37, 187, 69)"
                    : "rgb(255, 63, 63, 1)",
                }}
              >
                {errorMsg}
              </PasswordError>
            )}
          </PasswordTextBox>
          <PasswordNoticeText>도움이 필요하신가요?</PasswordNoticeText>
          <NoticeBox>
            <PasswordButton onClick={passwordView}>
              {showPassword ? "🙉" : "🙈"}
            </PasswordButton>
            <PasswordNotice>비밀번호 보기</PasswordNotice>
          </NoticeBox>
          <PasswordInputButton type="submit">수정하기</PasswordInputButton>
        </PasswordInputForm>
      </PasswordForm>
    </>
  );
};
export default MyPagePassword;
