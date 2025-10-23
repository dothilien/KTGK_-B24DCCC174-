import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Post } from "../App";

interface Props {
  posts: Post[];
  onDelete: (id: number) => void;
}

const PostDetail: React.FC<Props> = ({ posts, onDelete }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) return <p>Bài viết không tồn tại.</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <img src={post.thumbnail} alt={post.title} width="400" />
      <p>
        <b>Tác giả:</b> {post.author}
      </p>
      <p>
        <i>{post.date}</i>
      </p>
      <p>
        <b>Thể loại:</b> {post.category}
      </p>
      <p>{post.content}</p>
      <button onClick={() => navigate("/")}>Quay lại</button>{" "}
      <Link to={`/posts/edit/${post.id}`}>Chỉnh sửa</Link>{" "}
      <button onClick={() => onDelete(post.id)}>Xóa bài viết</button>
    </div>
  );
};

export default PostDetail;
