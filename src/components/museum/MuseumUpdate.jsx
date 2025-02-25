// museumUpdate
// museumName, museumOpen, museumClose 만 바꾸게하기
// 처음에 select로 user의 museum 정보 불러와서,
// 수정Form에 museumName님의 미술관 수정페이지 입니다.
// 변경하실 미술관명 : <input>museumName
// 변경하실 운영시간 : <input type:date> museumOpen, museumClose
// -> update-set
import React from "react";
import "./MuseumUpdate.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const MuseumUpdate = () => {
  const { auth } = useContext(AuthContext);
  const [museumNo, setMuseumNo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [museum, setMuseum] = useState([]);
  const navi = useNavigate();
  const [museums, setMuseums] = useState([]);
  const [museumName, setMuseumName] = useState("");
  const [museumSidoName, setMuseumSidoName] = useState("");
  const [museumOpen, setMuseumOpen] = useState("");
  const [museumClose, setMuseumClose] = useState("");
  const [accessToken, setAccessToken] = useState("");

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

  // 얘는 form에서 입력한것을 보내는 것
  const handlerSubmit = (e) => {
    e.preventDefault(); // 기본설정 지우기

    axios
      .put(
        "http://localhost/museum",
        {
          museumName,
          museumSidoName,
          museumOpen,
          museumClose,
        },
        {
          headers: {
            Authorization: `Bearer ${auth.accessToken}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 201) {
          alert("미술관 수정이 성공적으로 수행되었습니다.");
          navi("/museum");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        <br />
        <h2>미술관 수정 페이지</h2>
        <p>수정할 미술관명과 개장시간 / 폐장시간을 선택해주세요.</p>
        <form method="post" onSubmit={handlerSubmit}>
          <input
            type="text"
            placeholder="미술관명을 10자 이내로 입력하시오"
            maxlength="10"
            id="museumName"
            value={museumName}
            onChange={(e) => setMuseumName(e.target.value)}
            required
          />
          <input
            type="text"
            id="museumSidoName"
            placeholder="미술관 주소는 변경할 수 없습니다."
            value={museum.museumSidoName}
            required
          />
          미술관 개장시간을 입력하시오 :{" "}
          <input
            type="time"
            id="museumOpen"
            value={museumOpen}
            onChange={(e) => setMuseumOpen(e.target.value)}
            required
          />
          미술관 폐장시간을 입력하시오 :{" "}
          <input
            type="time"
            id="museumClose"
            value={museumClose}
            onChange={(e) => setMuseumClose(e.target.value)}
            required
          />
          <button type="submit">미술관 정보 수정</button>
        </form>
        <br />
      </div>
    </>
  );
};

export default MuseumUpdate;
