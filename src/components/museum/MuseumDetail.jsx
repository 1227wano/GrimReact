import React from "react";
import "./MuseumDetail.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const MuseumDatail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [museum, setMuseum] = useState([]);
  const navi = useNavigate(); // 명예의전당으로 보내기용

  useEffect(() => {
    axios
      .get(`http://localhost/museum/${id}`)
      .then((response) => {
        console.log(response.data);
        setMuseum(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(false);
      });
  }, []);

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

  return (
    <div>
      <h2>{museum.museumUserName}님의 미술관</h2>
      <span>{museum.museumName}</span>
      <p>
        운영시간 : {museum.museumOpen} ~ {museum.museumClose}
      </p>
    </div>
  );
};

export default MuseumDatail;
