import styled from "styled-components";

export const UpdateFrom = styled.div`
  width: 100%;
  height: 100%;
`;

export const UpdateTitle = styled.div`
  margin: 10px auto;
  font-size: 30px;
  font-weight: 700;
  color: rgb(236, 178, 20);
`;

export const UpdateImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
export const UpdateImgBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgb(59, 26, 82);
  border-radius: 50%;
  margin: 20px auto;
  border: 5px solid rgb(236, 178, 20);
`;

export const UpdateTextBox = styled.div`
  width: 100%;
  margin: 5px 0px;
`;

export const UpdateInputBox = styled.div`
  margin: 10px 0px;
`;

export const UpdateInputFile = styled.input`
  display: none;
`;

export const UpdateInputTitle = styled.div`
  width: 100%;
  font-size: 22px;
  color: rgb(236, 178, 20);

  font-weight: 600;
`;

export const UpdateIntput = styled.input`
  width: 300px;
  height: 40px;

  border-radius: 15px;
`;

export const UpdateUserId = styled.input`
  width: 300px;
  height: 40px;

  border-radius: 15px;

  pointer-events: none;
  background-color: rgba(255, 255, 255, 0);
  opacity: 0.6;

  &::placeholder {
    color: rgb(255, 255, 255);
  }
`;

export const UpdateImgButton = styled.button`
  margin: 2px 5px;
  width: 150px;
  height: 45px;
  border-radius: 15px;
  border: 1px solid white;
  background-color: rgb(218, 163, 13);
  font-size: 18px;

  &:hover {
    background-color: rgba(236, 178, 20, 0.5);
  }
`;

export const DefaultButton = styled.button`
  margin: 2px 5px;
  width: 150px;
  height: 45px;
  border-radius: 15px;
  border: 1px solid white;
  background-color: rgb(158, 151, 133);
  font-size: 18px;

  &:hover {
    background-color: rgba(170, 166, 154, 0.5);
  }
`;
export const UpdateTextForm = styled.form``;

export const UpdateInputButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 15px;
  border: 1px solid white;
  background-color: rgb(37, 187, 69);
  font-size: 18px;
  margin: 25px 0px;

  &:hover {
    background-color: rgba(37, 187, 69, 0.5);
  }
`;

export const UpdateError = styled.div`
  color: rgb(255, 63, 63, 1);
  font-weight: 600;
`;
export const UpdateUserIdText = styled.div`
  color: rgb(218, 218, 218);
  font-weight: 600;
`;

export const UpdateAddress = styled.select`
  width: 300px;
  height: 40px;
  outline: none;
  border: none;
  font-size: 20px;
  border-radius: 10px;

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
