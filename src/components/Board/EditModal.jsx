import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./BoardModal.css";
import { AuthContext } from "../Context/AuthContext";

const EditModal = ({ isOpen, onClose, post, no }) => {
  const [picBoardNo, setPicBoardNo] = useState(no);
  const [title, setTitle] = useState(post.picTitle);
  const [content, setContent] = useState(post.picContent);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (isOpen) {
      setPicBoardNo(no);
      setTitle(post.picTitle);
      setContent(post.picContent);
    }
  }, [isOpen, no, post.picTitle, post.picContent]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(picBoardNo);
    formData.append("picBoardNo", picBoardNo);
    formData.append("picTitle", title);
    formData.append("picContent", content);

    try {
      await axios.put(`http://localhost/paint/${post.picBoardNo}`, formData, {
        headers: {
          Authorization: `Bearer ${auth.accessToken}`,
        },
      });
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>게시글 수정</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="picTitle">제목</label>
            <input
              type="text"
              id="picTitle"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="picContent">내용</label>
            <textarea
              id="picContent"
              value={content}
              onChange={handleContentChange}
              required
            />
          </div>
          <div>
            <img
              src={post.picName}
              alt={post.picTitle}
              className="modal-image"
            />
          </div>
          <button type="submit">수정하기</button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
