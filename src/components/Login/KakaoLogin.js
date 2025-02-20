import { KakaoImg, KakaoLogin } from "./Login.styles";
import axios from "axios";
import { useEffect } from "react";

const KaKaoLogin = () => {
  const Rest_api_key = "22037b1000d672d856d5c603e656c581";
  const redirect_uri = "http://localhost:3000/kakao/callback";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      console.log("Authorization code:", code);

      axios
        .get(`http://localhost/kakao/callback?code=${code}`)
        .then((response) => {
          console.log("User Info:", response.data);
          // 사용자 정보를 이용해 처리
        })
        .catch((error) => {
          console.error("Error user Info ", error);
        });
    }
  }, []);

  return (
    <>
      <KakaoLogin onClick={handleLogin}>
        <KakaoImg src="/kakao_login_medium_narrow.png"></KakaoImg>
      </KakaoLogin>
    </>
  );
};

export default KaKaoLogin;
