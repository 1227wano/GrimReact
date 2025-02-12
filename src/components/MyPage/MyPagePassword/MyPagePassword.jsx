import {
  PasswordButton,
  PasswordError,
  PasswordForm,
  PasswordInput,
  PasswordInputButton,
  PasswordInputForm,
  PasswordNotice,
  PasswordText,
  PasswordTextBox,
  PasswordTitle,
} from "./MyPagePassword.stlyles";

const MyPagePassword = () => {
  return (
    <>
      <PasswordForm>
        <PasswordInputForm>
          <PasswordTitle>비밀번호 변경</PasswordTitle>
          <PasswordTextBox>
            <PasswordText>현재 비밀번호</PasswordText>
            <PasswordInput type="password"></PasswordInput>
            <PasswordButton>👀</PasswordButton>
            <PasswordNotice>클릭시 비밀번호 확인</PasswordNotice>
            <PasswordError>비밀번호가 일치하지 않습니다.</PasswordError>
          </PasswordTextBox>
          <PasswordTextBox>
            <PasswordText>새 비밀번호</PasswordText>
            <PasswordInput type="password"></PasswordInput>
            <PasswordButton>👀</PasswordButton>
            <PasswordNotice>클릭시 비밀번호 확인</PasswordNotice>
            <PasswordText>새 비밀번호 확인</PasswordText>
            <PasswordInput type="password"></PasswordInput>
            <PasswordButton>👀</PasswordButton>
            <PasswordNotice>클릭시 비밀번호 확인</PasswordNotice>
            <PasswordError>사용할 수 없는 비밀번호 입니다.</PasswordError>

            <PasswordError>비밀번호가 일치하지 않습니다.</PasswordError>
          </PasswordTextBox>
          <PasswordInputButton>수정하기</PasswordInputButton>
        </PasswordInputForm>
      </PasswordForm>
    </>
  );
};
export default MyPagePassword;
