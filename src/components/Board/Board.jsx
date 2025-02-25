import React, { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import "./Board.css";

const Board = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const fetchPosts = (page) => {
    axios
      .get(`http://localhost/paint?page=${page}`)
      .then((response) => {
        console.log("API 응답 데이터:", response.data);
        setPosts(response.data.list);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  };

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  return (
    <div className="board">
      <h1>그림 게시판</h1>
      <div className="post-list">
        {posts.map((post) => (
          <PostItem key={post.picBoardNo} post={post} no={post.picBoardNo} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={page === 0}>
          이전 페이지
        </button>
        <button onClick={handleNextPage} disabled={page === totalPages - 1}>
          다음 페이지
        </button>
      </div>
    </div>
  );
};

export default Board;
