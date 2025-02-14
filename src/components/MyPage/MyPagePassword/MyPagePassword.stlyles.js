import styled from "styled-components";

export const PasswordForm = styled.div`
  width: 100%;
  height: 100%;
`;

export const PasswordTitle = styled.div`
  margin: 10px auto;
  font-size: 30px;
  font-weight: 700;
  color: rgb(236, 178, 20);
`;

export const PasswordTextBox = styled.div`
  padding: 5px;
  width: 100%;
  height: 35%;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  margin: 20px 0;
`;

export const PasswordText = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin: 5px 0;
  color: rgb(236, 178, 20);
`;

export const PasswordInput = styled.input`
  width: 350px;
  height: 40px;
  font-size: 20px;
  display: inline-block;
`;

export const PasswordNotice = styled.div`
  display: none;
`;

export const PasswordNoticeText = styled.div`
  font-size: 18px;
  color: white;
`;

export const PasswordButton = styled.button`
  margin: 10px auto;
  width: 50px;
  height: 50px;
  border: 1px solid white;
  font-size: 25px;
  text-align: justify;
  display: flex;
  justify-content: center;
  justify-items: center;
  padding: 0;
  line-height: 2;
  background-color: rgb(134, 80, 145);

  &:hover + ${PasswordNotice} {
    display: inline-block;

    background-color: rgb(236, 178, 20);
    border-radius: 5px;
    width: 150px;
    height: 30px;
    color: white;
    margin: 1px auto;
    font-size: 20px;
  }
`;

export const PasswordInputForm = styled.form``;

export const PasswordInputButton = styled.button`
  width: 200px;
  height: 50px;
  border: 1px solid white;
  font-size: 20px;
  background-color: rgb(37, 187, 69);

  &:hover {
    background-color: rgba(37, 187, 69, 0.5);
  }
`;

export const PasswordError = styled.div`
  color: rgb(255, 63, 63, 1);
  margin: 5px 0;
  font-weight: 600;
`;

export const PasswordCheck = styled.div`
  margin: 5px 0;
  font-weight: 600;
  color: rgb(37, 187, 69);
`;

export const InputBox = styled.div`
  height: 50px;
  margin: 5px 0;
`;

export const NoticeBox = styled.div`
  width: 100%;
  height: 35%;

  margin: 10px 0;
`;
