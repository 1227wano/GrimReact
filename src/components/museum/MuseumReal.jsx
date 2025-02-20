import React from "react";
import "./MuseumForm.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MuseumReal = () => {
  const [page, setPage] = useState(1);
  const [museum, setMuseum] = useState([]);

  const navi = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost/museum/realMuseum?page=${page}`)
      .then((result) => {
        const response = result.data.response.result.featureCollection.features;
        console.log(response);
        response.map((m, i) => {
          const adr = m.properties.new_adr; // 미술관주소
          console.log(adr);
          museum.push(adr);
          console.log(museum); // museum에 담긴 page=1의 미술관주소 10개가 출력됨
        });
        setMuseum(museum);
      });
    // setPage(page + 1);
    // setTimeout(() => {}, 10000);
  }, [page]);

  return <div>{museum}</div>;
};

export default MuseumReal;
