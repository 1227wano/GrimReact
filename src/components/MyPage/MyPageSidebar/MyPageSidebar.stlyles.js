import styled from "styled-components";

export const MyPageFrom = styled.div`
  margin-right: 10px;
  display: inline-flex;
`;

export const SidebarTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 2px;
  color: rgb(236, 178, 20);
  margin: 20px 0;

  &:hover {
    cursor: default;
  }
`;

export const Sidebar = styled.div`
  border-radius: 15px;
  width: 200px;
  max-height: 800px;
  background-color: rgb(116, 64, 150);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const SidebarTextBox = styled.div`
  height: 30px;
  padding: 5px;
  background-color: rgb(98, 39, 138);

  border: 1px solid rgb(59, 26, 82);

  &:hover {
    cursor: pointer;
    background-color: rgb(59, 26, 82);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  }
`;

export const SidebarText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(236, 178, 20);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;

  &:hover {
    cursor: pointer;
  }
`;
