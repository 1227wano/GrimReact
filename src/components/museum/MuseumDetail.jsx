import React from "react";
import "./MuseumDetail.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

/*
  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
*/

const MuseumDatail = () => {
  const { id } = useParams();
  const { auth } = useContext(AuthContext);
  const [museumNo, setMuseumNo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [museum, setMuseum] = useState([]);
  const navi = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost/museum/${id}`, {
        // id=museum.userNo 여기부터 바꿔
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
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
    navi(`/museum/${id}/edit`);
  };

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      axios
        .delete(`http://localhost/museum/${id}`, {
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
    <div>
      <h2>{/*미술관장명(user에서 조인 select)*/}님의 미술관</h2>
      <span>{museum.museumName}</span>
      <p>
        운영시간 : {museum.museumOpen} ~ {museum.museumClose}
      </p>
      {auth.userNo == museumNo && (
        <div>
          <button onClick={handleEdit}>수정하기</button>
          <button onClick={handleDelete}>삭제하기</button>
        </div>
      )}
    </div>
  );
};

export default MuseumDatail;
