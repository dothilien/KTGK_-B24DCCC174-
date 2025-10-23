import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../App";

interface Props {
  post: Post;
  onDelete: (id: number) => void;
}

const PostCard: React.FC<Props> = ({ post, onDelete }) => (
  <div
    style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}
  >
    <img src={post.thumbnail} alt={post.title} width="100%" />
    <h3>{post.title}</h3>
    <p>
      <b>Tác giả:</b> {post.author}
    </p>
    <p>
      <i>{post.date}</i>
    </p>
    <p>{post.content.slice(0, 100)}...</p>
    <Link to={`/posts/${post.id}`}>Đọc thêm</Link> |{" "}
    <button onClick={() => onDelete(post.id)}>Xóa</button>
  </div>
);

export default PostCard;
