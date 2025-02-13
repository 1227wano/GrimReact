import React from "react";
import "./MuseumForm.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MuseumReal = () => {
  const [realMuseums, setRealMuseums] = useState([]);
  const [page, setPage] = useState(1);

  const navi = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost/museum/realMuseum?page=${page}`)
      .then((result) => {
        console.log(result);
        const response = result.data.GetFeature.item;
        console.log(response);
        setRealMuseums([...realMuseums, ...response]);
      });
  }, [page]);

  return (
    <select>
      {realMuseums.map((e, i) => (
        <option>{e.mus_nam}</option>
      ))}
    </select>
  );
};

export default MuseumReal;
