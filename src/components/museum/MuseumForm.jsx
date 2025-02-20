import React from "react";
import "./MuseumForm.css";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

const MuseumForm = () => {
  const [museums, setMuseums] = useState([]);
  const [page, setPage] = useState(1);
  const navi = useNavigate();
  const [museumName, setMuseumName] = useState("");
  const [museumSidoName, setMuseumSidoName] = useState("");
  const [museumOpen, setMuseumOpen] = useState("");
  const [museumClose, setMuseumClose] = useState("");
  const { auth } = useContext(AuthContext);
  const [userNo, setUserNo] = useState("");
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    if (!auth.isAuthenticated) {
      alert("로그인 후 이용해주시기 바랍니다.");
      navi("/login");
    } else {
      setUserNo(auth.userNo);
      setAccessToken(auth.accessToken);
    }
    axios
      .get(`http://localhost/museum/apiMuseum?page=${page}`)
      .then((result) => {
        // console.log(result); 얘는 API에서 받아온 응답 파라미터 Object
        const response = result.data.getRealEstateList.item;
        // console.log(response); 얘는 매물객체들이 들어있는 Array
        setMuseums([...museums, ...response]);
      });
  }, [page]);

  // 얘는 select의 option값을 sidoName으로 넣는것
  const handleSelected = (e) => {
    const arr = [...e.target];
    const el = arr.filter((e) => e.selected);
    const text = el[0].innerText;
    console.log(text);
    // setName(text);
    setMuseumSidoName(text);
  };

  // 얘는 form에서 입력한것을 보내는 것
  const handlerSubmit = (e) => {
    // if (museumName.trim() === "" || museumSidoName.trim() === "") {
    //   alert("필수 입력값이 누락되었니다.");
    //   return;
    // }
    e.preventDefault(); // 기본설정 지우기

    axios
      .post(
        "http://localhost/museum",
        {
          museumName: museumName,
          museumSidoName: museumSidoName,
          museumOpen: museumOpen,
          museumClose: museumClose,
          userNo: auth.userNo,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((response) => {
        //console.log(response);
        if (response.status === 201) {
          alert("미술관 신청이 성공적으로 수행되었습니다.");
          navi("/museum");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const abc = (e) => {
  //   console.log(e.target.value);
  //   setMuseumSidoName(e.target.value);
  // };

  return (
    <>
      <div>
        <br />
        <h2>미술관 창설 신청 페이지</h2>
        <p>
          창설하실 미술관의 주소를 선택하여, 미술관명과 개장시간 / 폐장시간을
          선택해주세요.
        </p>
        <form method="post" onSubmit={handlerSubmit}>
          <select onChange={handleSelected}>
            {museums.map((e, i) => (
              <option key={`${i}`} id="museumSidoName" required>
                {e.arnoAdr}
              </option>
            ))}
          </select>
          <br />
          <br />
          <input
            type="text"
            placeholder="미술관명을 10자 이내로 입력하시오"
            maxlength="10"
            id="museumName"
            value={museumName}
            onChange={(e) => setMuseumName(e.target.value)}
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
          <button type="submit">미술관 등록 신청~</button>
        </form>
        <br />
      </div>
    </>
  );
};

export default MuseumForm;
