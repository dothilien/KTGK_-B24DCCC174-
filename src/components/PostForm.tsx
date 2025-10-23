import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Post } from "../App";

interface Props {
  onSubmit?: (p: Post) => void;
  onUpdate?: (id: number, p: Post) => void;
  posts?: Post[];
}

const PostForm: React.FC<Props> = ({ onSubmit, onUpdate, posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const editing = id && posts;
  const [form, setForm] = useState<Post>({
    id: 0,
    title: "",
    author: "",
    thumbnail: "",
    content: "",
    category: "Khác",
    date: "",
  });

  useEffect(() => {
    if (editing) {
      const found = posts!.find((p) => p.id === Number(id));
      if (found) setForm(found);
    }
  }, [id, posts]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (form.title.length < 10) return "Tiêu đề ít nhất 10 ký tự";
    if (form.author.length < 3) return "Tác giả ít nhất 3 ký tự";
    if (form.content.length < 50) return "Nội dung ít nhất 50 ký tự";
    return "";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = validate();
    if (msg) return alert(msg);
    editing && onUpdate ? onUpdate(Number(id), form) : onSubmit?.(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editing ? "Chỉnh sửa bài viết" : "Tạo bài viết mới"}</h2>
      <input
        name="title"
        placeholder="Tiêu đề"
        value={form.title}
        onChange={handleChange}
      />
      <br />
      <input
        name="author"
        placeholder="Tác giả"
        value={form.author}
        onChange={handleChange}
      />
      <br />
      <input
        name="thumbnail"
        placeholder="URL ảnh thumbnail"
        value={form.thumbnail}
        onChange={handleChange}
      />
      <br />
      <textarea
        name="content"
        placeholder="Nội dung..."
        rows={10}
        value={form.content}
        onChange={handleChange}
      ></textarea>
      <br />
      <select name="category" value={form.category} onChange={handleChange}>
        <option>Công nghệ</option>
        <option>Du lịch</option>
        <option>Ẩm thực</option>
        <option>Đời sống</option>
        <option>Khác</option>
      </select>
      <br />
      <button type="submit">{editing ? "Cập nhật" : "Đăng bài"}</button>{" "}
      <button
        type="button"
        onClick={() => navigate(editing ? `/posts/${id}` : "/")}
      >
        Hủy
      </button>
    </form>
  );
};

export default PostForm;
