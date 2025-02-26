import React from "react";
import "./MuseumMain.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MuseumForm from "./MuseumForm";
import marker1 from "../../img/marker1.gif";
import marker2 from "../../img/marker2.gif";
import marker3 from "../../img/marker3.gif";
const { kakao } = window;

function MuseumMain() {
  const navi = useNavigate();

  const [museums, setMuseums] = useState([]);
  const [realMuseums, setRealMuseums] = useState([]);
  const [page, setPage] = useState(1);
  const [address, setAddress] = useState([]);

  useEffect(() => {
    // DB미술관 정보 받아오기
    const dbMus = async () => {
      const response = await axios.get("http://localhost/museum"); // dbMus는 await해서 get을 카카오API보다 먼저 수행하기 위해
      setMuseums([...response.data]);
      DBmarker([...response.data]);
      return;
    };
    dbMus();

    // 실제미술관 정보 받아오기
    const realMus = async (num) => {
      const result = await axios.get(
        `http://localhost/museum/realMuseum?page=${num}`
      );
      setRealMuseums([
        ...result.data.response.result.featureCollection.features,
      ]);
      REALmarker([...result.data.response.result.featureCollection.features]);
      return;
    };
    realMus(1); // API요청파라미터의 size에 최대값이 1000이어서 총 1500개를 조회하기 위해 page를 1,2..로 해서 요청하기
    realMus(2);
    realMus(3);
    realMus(4);
    realMus(5);

    // 지도 코드
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    const options = {
      center: new kakao.maps.LatLng(36.3058564614158, 127.571572404035), //지도의 중심좌표.
      level: 13, //지도의 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    // 주소-좌표 변환 객체를 생성(위도 경도 받환받기)
    const geocoder = new kakao.maps.services.Geocoder();
    // 여기까진 픽스코드

    // 여기부터 DB미술관 마킹
    const DBmarker = (arr) => {
      // marker는 위에서 response에 담아온 data를 넘겨서 카카오 마커로 띄우기 위해 함수로
      if (kakao) {
        // DB미술관을 반복해서 마커 띄우기
        arr.map((museum) => {
          geocoder.addressSearch(
            museum.museumSidoName, //이 주소에 DB의 museumSidoName 불러와서 대입
            function (result, status) {
              // 정상적으로 검색이 완료됐으면
              if (status === kakao.maps.services.Status.OK) {
                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                //~이미지 마커 만들기~
                const imageSrc = `${marker1}`,
                  imageSize = new kakao.maps.Size(50, 50), // 마커이미지의 크기입니다
                  imageOption = { offset: new kakao.maps.Point(47, 69) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정.
                // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                const markerImage = new kakao.maps.MarkerImage(
                  imageSrc,
                  imageSize,
                  imageOption
                );
                // 결과값으로 받은 위치를 마커로 표시
                const marker = new kakao.maps.Marker({
                  map: map,
                  position: coords,
                  image: markerImage,
                });

                kakao.maps.event.addListener(marker, "click", function () {
                  navi(`/museum/${museum.userNo}`); // 각 마커 미술관에서 상세보기로
                });

                marker.setMap(map); // 마커가 지도 위에 표시되도록 설정합니다

                // 인포윈도우로 장소에 대한 설명을 표시
                const infowindow = new kakao.maps.InfoWindow({
                  content: `<div style="width:150px;text-align:center;padding:9px 0;">${museum.museumName}</div>`,
                });
                infowindow.open(map, marker);
              }
            }
          );
        });
        // 까지가 DB미술관 반복 마킹
      }
    };

    // 여기부터 실제미술관 마킹
    const REALmarker = (arr) => {
      // marker는 위에서 response에 담아온 data를 넘겨서 카카오 마커로 띄우기 위해 함수로
      // const filterPlaces =
      if (kakao) {
        // 실제미술관을 반복해서 마커 띄우기
        arr.map((address) => {
          if (
            address.properties.mus_typ === "국립" &&
            address.properties.mus_nam.includes("미술관")
          ) {
            geocoder.addressSearch(
              address.properties.new_adr,
              //이 주소에 실제 미술관의 new_adr(주소) 대입
              function (result, status) {
                // 정상적으로 검색이 완료됐으면
                if (status === kakao.maps.services.Status.OK) {
                  const coords = new kakao.maps.LatLng(
                    result[0].y,
                    result[0].x
                  );

                  //~이미지 마커 만들기~
                  const imageSrc = `${marker2}`,
                    imageSize = new kakao.maps.Size(50, 50), // 마커이미지의 크기입니다
                    imageOption = { offset: new kakao.maps.Point(47, 69) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정.
                  // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
                  const markerImage = new kakao.maps.MarkerImage(
                    imageSrc,
                    imageSize,
                    imageOption
                  );
                  // 결과값으로 받은 위치를 마커로 표시
                  const marker = new kakao.maps.Marker({
                    map: map,
                    position: coords,
                    image: markerImage,
                  });
                  marker.setMap(map); // 마커가 지도 위에 표시되도록 설정합니다

                  // 인포윈도우로 장소에 대한 설명을 표시
                  const infowindow = new kakao.maps.InfoWindow({
                    content: `<div style="width:150px;text-align:center;padding:6px 0;">${address.properties.mus_nam}</div>`,
                  });
                  infowindow.open(map, marker);
                }
              }
            );
          }
          //setPage(page + 1); 는 state기 때문에 반복문이 돌아갈때마다 재랜더링되버려서 안됨
        });
      }
    };

    // ~번외~ 오사카 마커 만들기
    const imageSrc = `${marker3}`,
      imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
      imageOption = { offset: new kakao.maps.Point(47, 69) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정.
    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      ),
      markerPosition = new kakao.maps.LatLng(34.686494, 135.52618); // 마커 위치(현재 오사카)
    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage, // 마커이미지 설정
    });
    marker.setMap(map); // 마커가 지도 위에 표시되도록 설정합니다
  }, [page]);

  return (
    <>
      <div className="museum-main-container">
        <div id="map" className="museum-map"></div>
        <br />
        <button
          className="museum-main-button"
          onClick={() => navi("/apiMuseum")}
        >
          미술관 창설 신청👉
        </button>
      </div>
    </>
  );
}

export default MuseumMain;
