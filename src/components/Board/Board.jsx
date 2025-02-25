import React, { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import "./Board.css";

const Board = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/paint")
      .then((response) => {
        console.log("API 응답 데이터:", response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="board">
      <h1>그림 게시판</h1>
      <div className="post-list">
        {posts.map((post) => (
          <PostItem key={post.picBoardNo} post={post} no={post.picBoardNo} />
        ))}
      </div>
    </div>
  );
};

export default Board;
