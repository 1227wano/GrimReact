import React, { useState, useContext } from "react";
import "./BoardModal.css";
import EditModal from "./EditModal";
import { AuthContext } from "../Context/AuthContext";

const BoardModal = ({ isOpen, onClose, post, no }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const { auth } = useContext(AuthContext);

  const handleEditClick = (e) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  if (!isOpen) return null;

  console.log(auth);
  console.log(post);

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
          <h2>{post.picTitle}</h2>
          <img src={post.picName} alt={post.picTitle} className="modal-image" />
          <p>{post.picContent}</p>
          <p>업로드 날짜: {new Date(post.writeDate).toLocaleDateString()}</p>
          <p>작성자: {post.userName}</p>
          {auth.userNo == post.userNo && (
            <button className="edit-button-outside" onClick={handleEditClick}>
              수정하기
            </button>
          )}
        </div>
      </div>
      <EditModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        post={post}
        no={no}
      />
    </>
  );
};

export default BoardModal;
