import React from "react";
import "./BoardModal.css";

const BoardModal = ({ isOpen, onClose, post }) => {
  if (!isOpen) return null;

  return (
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
      </div>
    </div>
  );
};

export default BoardModal;
