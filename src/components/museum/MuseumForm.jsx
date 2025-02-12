import React from "react";
import "./MuseumForm.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MuseumForm = () => {
  const [museums, setMuseums] = useState([]);
  const [page, setPage] = useState(1);
  const navi = useNavigate();
  const [museumName, setMuseumName] = useState("");
  const [museumSidoName, setMuseumSidoName] = useState("");
  const [museumOpen, setMuseumOpen] = useState("");
  const [museumClose, setMuseumClose] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost/museum/apiMuseum?page=${page}`)
      .then((result) => {
        console.log(result);
        const response = result.data.getRealEstateList.item;
        console.log(response);
        setMuseums([...museums, ...response]);
      });
  }, [page]);

  const [name, setName] = useState("");

  const handleSelected = (e) => {
    const arr = [...e.target];
    const el = arr.filter((e) => e.selected);
    const text = el[0].innerText;
    console.log(el[0].innerText);
    setName(text);
  };

  const handlerSubmit = () => {
    // if (museumName.trim() === "" || museumSidoName.trim() === "") {
    //   alert("필수 입력값이 누락되었니다.");
    //   return;
    // }

    axios
      .post(`http://localhost/museum`, {
        museumName: museumName,
        museumSidoName: museumSidoName,
        museumOpen: museumOpen,
        museumClose: museumClose,
      })

      .then((result) => console.log(result));
  };

  return (
    <>
      <div>
        <br />
        <h2>미술관 창설 신청 페이지</h2>
        <p>
          창설하실 미술관의 주소를 선택하여, 미술관명과 개장시간 / 폐장시간을
          선택해주세요.
        </p>
        <form action={"/mypage"} method="post" onSubmit={handlerSubmit}>
          <select onChange={handleSelected}>
            {museums.map((e, i) => (
              <option /*250212여기까지*/ value={museumSidoName}>
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
            value={museumName}
          />
          미술관 개장시간을 입력하시오 :{" "}
          <input type="time" value={museumOpen} />
          미술관 폐장시간을 입력하시오 :{" "}
          <input type="time" value={museumClose} />
          <button>미술관 등록 신청~</button>
        </form>
        <br />
      </div>
    </>
  );
};

export default MuseumForm;
