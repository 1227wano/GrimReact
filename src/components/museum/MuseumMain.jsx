import React from "react";
import "./MuseumMain.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MuseumForm from "./MuseumForm";

const { kakao } = window;

function MuseumMain() {
  const navi = useNavigate();
  useEffect(() => {
    if (kakao) {
      const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      const options = {
        center: new kakao.maps.LatLng(36.3058564614158, 127.571572404035), //지도의 중심좌표.
        level: 12, //지도의 레벨(확대, 축소 정도)
      };
      const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

      // 위도 경도 받환받기
      // 주소-좌표 변환 객체를 생성
      const geocoder = new kakao.maps.services.Geocoder();

      // 주소로 좌표를 검색
      geocoder.addressSearch(
        "전북특별자치도 장수군 장수읍 호비로 10", // 이 주소에 창설된 미술관 주소를 DB에서 불러와 넣기
        function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            console.log(result[0].y);
            console.log(result[0].x);
            // 결과값으로 받은 위치를 마커로 표시
            const marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시
            const infowindow = new kakao.maps.InfoWindow({
              content:
                '<div style="width:150px;text-align:center;padding:6px 0;">창설 예정 미술관</div>',
            });
            infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        }
      );

      // marker
      const imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지
        imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기입니다
        imageOption = { offset: new kakao.maps.Point(47, 69) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정.

      // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
      const markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        ),
        markerPosition = new kakao.maps.LatLng(34.686494, 135.52618);
      // 마커가 표시될 위치인데, 미술관 API에서 가져온 List의 주소를 API를 통해 경위도로 반환받아서 대입&반복으로 출력

      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        position: markerPosition,
        image: markerImage, // 마커이미지 설정
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
    }
  }, []);

  return (
    <>
      <div
        id="map"
        style={{
          width: "1000px",
          height: "1000px",
          border: "3px solid #eabc3e",
        }}
      ></div>

      <button onClick={() => navi("/apiMuseum")}>미술관 창설 신청</button>
    </>
  );
}

export default MuseumMain;
