import {
  LeaveButton,
  LeaveError,
  LeaveFrom,
  LeaveInput,
  LeaveInputFrom,
  LeaveNotic,
  LeaveNoticTitle,
  LeaveNoticTitle2,
  LeaveText,
  LeaveTitle,
} from "./MyPageLeave.stlyles";
import { useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MyPageLeave = () => {
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleDeleteAccount = (e) => {
    e.preventDefault();
    setError("");

    axios
      .delete("http://localhost/members/mypage/leave", {
        data: {
          password,
        },
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      })
      .then(() => {
        logout();
        navigate("/");
        alert("탈퇴성공~");
      })
      .catch((error) => {
        setError("❌ 비밀번호가 일치하지 않습니다.");
      });
  };

  return (
    <>
      <LeaveFrom>
        <LeaveTitle>회원 탈퇴</LeaveTitle>
        <LeaveNoticTitle>* 주의사항 *</LeaveNoticTitle>
        <LeaveNotic>
          계정 정보 삭제: 귀하의 계정과 관련된 모든 정보(이름, 이메일, 설정
          등)가 삭제됩니다.
          <br />
          이용 기록 삭제: 이전에 이용했던 서비스 내역, 주문 기록, 활동 내역 등이
          모두 삭제됩니다.
          <br />
          복구 불가: 삭제된 데이터는 복구가 불가능하며, 다시 계정을 생성하더라도
          이전 데이터는 복구되지 않습니다.
          <br />
          <br />
          추가 안내: 회원탈퇴를 진행하시기 전에 중요한 데이터가 있다면 미리
          저장해 주세요.
        </LeaveNotic>
        <LeaveNoticTitle2>
          회원탈퇴를 원하시면 신중히 결정해 주시기 바랍니다.
        </LeaveNoticTitle2>
        <LeaveText>현재 비밀번호</LeaveText>
        <LeaveInputFrom onSubmit={handleDeleteAccount}>
          <LeaveInput
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            placeholder="현재 비밀번호 입력"
          ></LeaveInput>
          {error && <LeaveError>{error}</LeaveError>}
          <br />
          <LeaveButton type="submit">탈퇴하기</LeaveButton>
        </LeaveInputFrom>
      </LeaveFrom>
    </>
  );
};
export default MyPageLeave;
