import React from "react";
import "./Main.css";
import NAGAGIRINGREENGRIM from "../../img/NAGAGIRINGREENGRIM.jpg";
const Main = () => {
  return (
    <div className="main-container">
      <h1 className="main-title">내가기린그린그림에 오신 것을 환영합니다</h1>
      <div className="image-container">
        <img src={NAGAGIRINGREENGRIM} alt="Welcome" className="welcome-image" />
      </div>
      <p className="intro-paragraph">안녕하세요?</p>
      <p className="intro-paragraph">저는 그림을 그리는 기린입니다.</p>
      <p className="description-paragraph">
        이곳은 본인만의 상상과 역량을 마음껏 표현하여 다양한 그림을 그리는
        사이트 “내가기린그린그림” 입니다. 줄여서 “내기그그” 라고 불러주시와요.
      </p>
      <p className="description-paragraph">
        이 사이트는 직접 기린.. 아니, 그린 그림을 통해 많은 사람과 소통하고
        마음을 공유하며, 무엇보다 그림그리기를 즐기는 것에 최적화 되어 있습니다.
      </p>
      <p className="description-paragraph">
        60세 어르신도 즐길 수 있는 회원의 편의성과 화려한 FRONT도 놓칠 수 없는
        POINT이며,
      </p>
      <p className="description-paragraph">
        등록된 그림 중 잘 기린 그림은 경쟁을 통해 전국 미술관의 명예의 전당에
        등재될 수도 있어요.
      </p>
      <p className="description-paragraph">
        과연 저보다 그림을 잘 그릴 수 있을까요? 그럼 당신의 그림을 기다리고
        있겠습니다. Let’s Girin Time!
      </p>
    </div>
  );
};

export default Main;
