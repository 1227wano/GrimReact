import styled from "styled-components";

export const SignupContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
`;

export const SignupBox = styled.div`
  border: 1px solid gray;
  border-radius: 15px;
  border: 5px solid rgba(0, 0, 0, 0);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
  width: 650px;

  min-height: 650px;
  max-height: 1200px;
  background-color: rgb(116, 64, 150);
`;

export const SignupTitle = styled.div`
  font-size: 40px;
  font-weight: 700;
  margin: 30px 0;
  color: rgb(236, 178, 20);
`;

export const SignupService = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin: 10px 0;
  color: rgb(236, 178, 20);
`;

export const SignupTextBox = styled.div`
  margin: auto;
  border: 1px solid gray;
  border-radius: 10px;
  width: 350px;
  background-color: white;
`;

export const SignupIcon = styled.div`
  margin-right: 20px;
  font-size: 22px;
  display: inline;
  cursor: default;
`;

export const SignupText = styled.input`
  margin: 10px 0px;
  width: 270px;
  height: 30px;
  border: none;
  font-size: 20px;
  padding: 5px;

  &:focus {
    outline-style: groove;
    border-radius: 5px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const SignupHr = styled.hr`
  padding: none;
  margin: 1px;
`;

export const Form = styled.form``;

export const Address = styled.select`
  margin: 10px 0px;
  width: 270px;
  height: 30px;
  outline: none;
  border: none;
  font-size: 20px;

  &:focus {
    color: black;
  }
  &:active {
    color: black;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const AddressText = styled.input``;
export const AddressOption = styled.option``;

export const Email = styled.select``;
export const EmailText = styled.input``;
export const EmailOption = styled.option``;

export const SignupButton = styled.button`
  width: 300px;
  height: 45px;
  border-radius: 10px;
  border: none;
  margin: 30px 0px;
  font-size: 22px;
  font-weight: 700;
  background-color: rgb(81, 33, 116);
  color: rgb(236, 178, 20);

  &:hover {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
    cursor: pointer;
    background-color: rgb(59, 26, 82);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
  }

  &:active {
    background-color: rgb(81, 33, 116);
  }
`;
export const ErrorText = styled.div`
  margin: 15px 150px;
  color: rgb(255, 63, 63, 1);
  text-align: left;
  font-weight: 600;
`;
