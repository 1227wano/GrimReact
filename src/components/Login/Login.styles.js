import styled from "styled-components";

export const LoginContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
`;

export const LoginBox = styled.div`
  width: 650px;
  height: 650px;
  border: 5px solid rgba(0, 0, 0, 0);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  border-radius: 20px;
  background-color: rgb(116, 64, 150);
`;

export const LoginText = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin: 25px 0;
  color: rgb(236, 178, 20);
`;

export const LoginId = styled.input`
  border-radius: 10px;
  font-size: 20px;
  width: 450px;
  height: 40px;
  padding: 10px;
  margin-top: 20px;
  background-color: rgb(59, 26, 82);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  color: rgb(236, 178, 20);
  border: none;
  &:focus {
    outline: 2px solid rgb(40, 0, 40);
  }
`;

export const LoginPwd = styled.input`
  border-radius: 10px;
  font-size: 20px;
  width: 450px;
  height: 40px;
  padding: 10px;
  margin-top: 10px;
  background-color: rgb(59, 26, 82);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  color: rgb(236, 178, 20);
  border: none;
  &:focus {
    outline: 2px solid rgb(40, 0, 40);
  }
`;

export const LoginButton = styled.button`
  width: 450px;
  height: 50px;
  margin: 25px 0;
  background-color: rgb(81, 33, 116);
  color: rgb(236, 178, 20);
  font-size: 30px;
  border: none;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
    cursor: pointer;
    background-color: rgb(59, 26, 82);
  }
  &:active {
    background-color: rgb(81, 33, 116);
  }
`;
export const LoginHr = styled.hr`
  margin-top: 30px;
  border: 1px double rgb(59, 26, 82);
  width: 500px;
`;

export const LoginNew = styled.div`
  margin: 30px 0;
  font-size: 18px;
  font-weight: 500;
  color: wheat;
`;
export const LoginSignup = styled.a`
  margin: 0px 15px;
  font-size: 20px;
  text-decoration: none;
  color: rgb(236, 178, 20);

  &:hover {
    text-decoration: underline;
  }
`;
export const Form = styled.form``;
