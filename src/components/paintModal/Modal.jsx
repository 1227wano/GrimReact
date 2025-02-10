import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, onSubmit, imageSrc }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit({ title, content });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>게시물 올리기</h2>
        <form>
          <label htmlFor="title">제목:</label>
          <br />
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="image">그림:</label>
          <br />
          {imageSrc && <img id="drawing" src={imageSrc} alt="그림" />}
          <br />
          <br />
          <label htmlFor="content">내용:</label>
          <br />
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <br />
          <br />
          <button type="button" onClick={handleSubmit}>
            올리기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
