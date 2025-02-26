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
  const [hof, setHof] = useState([]);

  useEffect(() => {
    // 미술관 상세정보 조회
    const musDet = async () => {
      await axios
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
    };
    musDet();

    // 미술관 내의 명예의 전당
    const like = async () => {
      const response = await axios.get("http://localhost/museum/like");
      setHof(response.data);
      console.log(response.data);
      return;
    };
    like();
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
    <div className="museum">
      <div className="museum-detail">
        <br />
        <h2>{museum.museumUserName}님의 미술관</h2>
        <span>{museum.museumName}</span>
        <p>
          운영시간 : {museum.museumOpen} ~ {museum.museumClose}
        </p>
      </div>
      <br />
      <div>
        <h1 className="hof-title">명예의 전당</h1>
        <div className="hof">
          {hof.map((fame) => {
            return (
              <>
                <div className="hof-content">
                  <img
                    className="hof-image"
                    src={fame.picName}
                    alt={fame.picTitle}
                  />
                  <h2>작품명 : {fame.picTitle}</h2>
                  <p>{fame.userName} 님의 미술관</p>
                  <p>좋아요 수 : {fame.like}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MuseumDatail;
