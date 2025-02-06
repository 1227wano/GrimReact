import React from "react";
import "./MuseumMain.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MuseumMain = () => {
  const [museums, setMuseums] = useState([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost/museum?page=${page}`).then((result) => {
      console.log(result);
      const response = result.data.getFoodKr.item;
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

  return (
    <>
      <div>
        <select onChange={handleSelected}>
          {museums.map((e, i) => {
            return <option>{e.MAIN_TITLE}</option>;
          })}
        </select>
      </div>
    </>
  );
};

export default MuseumMain;
