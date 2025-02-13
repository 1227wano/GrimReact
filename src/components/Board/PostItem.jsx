import React from "react";
import Thumbnail from "./Thumbnail";
import "./PostItem.css";

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <Thumbnail imageUrl={`/images/${post.picName}`} alt={post.picTitle} />
      <div className="post-info">
        <h2>{post.picTitle}</h2>
        <p>{post.picContent}</p>
        <p className="post-date">
          업로드 날짜: {new Date(post.writeDate).toLocaleDateString()}
        </p>
        <p className="post-author">작성자: {post.userName}</p>
      </div>
    </div>
  );
};

export default PostItem;
