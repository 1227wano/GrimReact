import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import "./Modal.css";
import { AuthContext } from "../Context/AuthContext";

const Modal = ({ isOpen, onClose, imageSrc }) => {
  const [picTitle, setPicTitle] = useState("");
  const [picContent, setPicContent] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    if (imageSrc) {
      const file = dataURLtoFile(imageSrc, "drawing.png");
      setSelectedFile(file);
    }
  }, [imageSrc]);

  const dataURLtoFile = (dataurl, fileName) => {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], fileName, { type: mime });
  };

  if (!isOpen) return null;

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("picTitle", picTitle);
    formData.append("picContent", picContent);
    formData.append("file", selectedFile);

    axios
      .post("http://localhost/paint", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${auth.accessToken}`,
        },
      })
      .then((response) => {
        console.log("게시글 등록 성공:", response.data);
        setPicContent("");
        setPicTitle("");
        setSelectedFile(null);
        onClose();
      })
      .catch((error) => {
        console.error("게시글 등록 실패:", error);
      });
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
            value={picTitle}
            onChange={(e) => setPicTitle(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="image">그림:</label>
          <br />
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          {selectedFile && (
            <div>
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="그림"
                style={{ maxWidth: "100%" }}
              />
            </div>
          )}
          <br />
          <br />
          <label htmlFor="content">내용:</label>
          <br />
          <textarea
            id="content"
            name="content"
            value={picContent}
            onChange={(e) => setPicContent(e.target.value)}
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
