import React, { useState, useContext, useEffect } from "react";
import Thumbnail from "./Thumbnail";
import BoardModal from "./BoardModal";
import EditModal from "./EditModal";
import { AuthContext } from "../Context/AuthContext";
import "./PostItem.css";

const PostItem = ({ post, no }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleItemClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsEditModalOpen(false);
  };

  return (
    <div>
      <div className="post-item" onClick={handleItemClick}>
        <Thumbnail imageUrl={post.picName} alt={post.picTitle} />
        <div className="post-info">
          <h2>{post.picTitle}</h2>
          <p>{post.picContent}</p>
          <p className="post-date">
            업로드 날짜: {new Date(post.writeDate).toLocaleDateString()}
          </p>
          <p className="post-author">작성자: {post.userName}</p>
        </div>
      </div>
      <BoardModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        post={post}
        no={no}
      />
      <EditModal
        isOpen={isEditModalOpen}
        onClose={handleCloseModal}
        post={post}
        no={no}
      />
    </div>
  );
};

export default PostItem;
