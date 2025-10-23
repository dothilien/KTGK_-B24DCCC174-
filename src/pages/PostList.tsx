import React, { useState } from "react";
import { Post } from "../App";
import PostCard from "../components/PostCard";
import { useNavigate } from "react-router-dom";

interface Props {
  posts: Post[];
  onDelete: (id: number) => void;
}

const PostList: React.FC<Props> = ({ posts, onDelete }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Tổng số bài viết: {filtered.length}</h2>
      <input
        placeholder="Tìm theo tiêu đề..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => navigate("/create")}>Viết bài mới</button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {filtered.map((p) => (
          <PostCard key={p.id} post={p} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
