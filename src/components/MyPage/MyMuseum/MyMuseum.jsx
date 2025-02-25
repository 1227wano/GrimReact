import React from "react";
import {
  InfoForm,
  InfoText,
  InfoTextBox,
  InfoTextTitle,
  InfoTitle,
} from "./MyMuseum.styles";
import "./MyMuseum.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

const MyMuseum = () => {
  const { auth } = useContext(AuthContext);
  const [museumNo, setMuseumNo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [museum, setMuseum] = useState([]);
  const navi = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost/museum/myMuseum", {
        headers: { Authorization: `Bearer ${auth.accessToken}` },
      })
      .then((response) => {
        console.log(response.data);
        setMuseum(response.data);
        setMuseumNo(response.data.userNo);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleEdit = () => {
    navi("/museum/edit");
  };

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      axios
        .delete("http://localhost/museum", {
          // 여기부터
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        })
        .then(() => {
          window.confirm("삭제중입니다...");
          setTimeout(() => {
            navi("/museum");
          }, 2000);
        });
    }

    if (loading) {
      return (
        <div>
          <p>로딩중...</p>
        </div>
      );
    }

    if (error) {
      return (
        <div>
          <p>미술관을 찾을 수 없습니다.</p>
        </div>
      );
    }
  };
  return (
    <InfoForm>
      <InfoTitle>{museum.museumUserName}님의 미술관</InfoTitle>
      <InfoTitle>{museum.museumName}</InfoTitle>
      <InfoTextBox>
        <InfoTextTitle>운영시간 : </InfoTextTitle>
        <InfoText>
          {museum.museumOpen} ~ {museum.museumClose}
        </InfoText>
      </InfoTextBox>
      {auth.userNo == museumNo && (
        <InfoForm>
          <button onClick={handleEdit} className="edit-button">
            수정하기
          </button>
          <button onClick={handleDelete} className="delete-button">
            삭제하기
          </button>
        </InfoForm>
      )}
    </InfoForm>
  );
};

export default MyMuseum;
