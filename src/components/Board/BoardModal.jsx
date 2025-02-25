import React from "react";
import "./BoardModal.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BoardModal = ({ isOpen, onClose, post }) => {
  const navi = useNavigate();

  if (!isOpen) return null;

  const like = (post) => {
    console.log(post);
    axios
      .post("http://localhost/paint/like", {
        post,
      })
      .then((response) => {
        if (response.status === 201) {
          alert(".");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <button className="like-button" onClick={like(post)}>
          좋아요
        </button>
      </div>
    </div>
  );
};

export default BoardModal;
