import styled from "styled-components";

export const LeaveTitle = styled.div`
  margin: 10px auto;
  font-size: 30px;
  font-weight: 700;
  color: rgb(236, 178, 20);
`;

export const LeaveFrom = styled.div`
  width: 100%;
  height: 100%;
`;

export const LeaveNoticTitle = styled.h2`
  color: rgb(255, 63, 63, 1);
`;

export const LeaveNoticTitle2 = styled.h2`
  color: rgb(255, 63, 63, 1);
  font-size: 18px;
  margin: 30px 0;
`;

export const LeaveNotic = styled.div`
  font-size: 20px;
  color: white;
  text-align: left;
  margin: 40px 0;
`;

export const LeaveInput = styled.input`
  width: 350px;
  height: 40px;
  font-size: 20px;
  display: inline-block;
  border-radius: 10px;
`;

export const LeaveText = styled.div`
  font-size: 22px;
  font-weight: 600;
  margin: 5px 0;
  color: rgb(236, 178, 20);
`;

export const LeaveButton = styled.button`
  width: 200px;
  height: 50px;
  margin: 10px 0;
  border-radius: 10px;
  border: 1px solid white;
  background-color: rgb(255, 63, 63, 1);
  font-size: 20px;
  font-weight: 600;

  &:hover {
    background-color: rgba(255, 63, 63, 0.5);
  }
`;

export const LeaveInputFrom = styled.form``;

export const LeaveError = styled.div`
  color: rgb(255, 63, 63, 1);
  font-size: 18px;
  font-weight: 600;
`;
