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
  width: 100%;
  height: 35%;
  border: 1px solid white;
  border-radius: 15px;
  margin: 50px 0;
`;

export const PasswordText = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin: 5px 0;
  color: rgb(236, 178, 20);
`;

export const PasswordInput = styled.input`
  width: 400px;
  height: 40px;
  font-size: 20px;
  display: inline-block;
`;

export const PasswordButton = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid white;
  display: inline-block;
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
  margin: 10px 0;
  font-weight: 600;
`;

export const PasswordNotice = styled.div`
  border: 1px solid white;
  width: 120px;
  height: 40px;
  border-radius: 10px;
  display: inline-block;
`;
