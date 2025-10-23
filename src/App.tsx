import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import PostForm from "./components/PostForm";

export interface Post {
  id: number;
  title: string;
  author: string;
  thumbnail: string;
  content: string;
  category: string;
  date: string;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "5 mẹo học React hiệu quả cho sinh viên IT",
      author: "Ngọc Anh",
      thumbnail: "https://via.placeholder.com/150",
      content:
        "React là thư viện phổ biến giúp xây dựng giao diện người dùng nhanh và linh hoạt. Hãy bắt đầu từ các component nhỏ, luyện tập JSX, và sử dụng Hook để quản lý state.",
      category: "Công nghệ",
      date: "2025-10-10",
    },
    {
      id: 2,
      title: "Khám phá hương vị miền Trung",
      author: "Hà Vy",
      thumbnail: "https://via.placeholder.com/150",
      content:
        "Ẩm thực miền Trung Việt Nam nổi tiếng với vị cay nồng và đậm đà. Mỗi món ăn như mì Quảng, bún bò Huế đều mang dấu ấn văn hóa riêng.",
      category: "Ẩm thực",
      date: "2025-10-11",
    },
    {
      id: 3,
      title: "Check-in tại Ninh Bình – Hạ Long trên cạn",
      author: "Trung Kiên",
      thumbnail: "https://via.placeholder.com/150",
      content:
        "Ninh Bình thu hút du khách bởi cảnh sắc sông nước hữu tình và những dãy núi đá vôi hùng vĩ. Đây là địa điểm lý tưởng để du lịch cuối tuần.",
      category: "Du lịch",
      date: "2025-10-12",
    },
    {
      id: 4,
      title: "Giữ năng lượng tích cực trong công việc",
      author: "Thảo Linh",
      thumbnail: "https://via.placeholder.com/150",
      content:
        "Để duy trì năng lượng tích cực, hãy bắt đầu ngày mới bằng việc tập thể dục nhẹ, đặt mục tiêu nhỏ và khen thưởng bản thân khi hoàn thành công việc.",
      category: "Đời sống",
      date: "2025-10-13",
    },
    {
      id: 5,
      title: "Học TypeScript dễ hơn bạn nghĩ!",
      author: "Tuấn Minh",
      thumbnail: "https://via.placeholder.com/150",
      content:
        "TypeScript giúp bạn viết code rõ ràng và ít lỗi hơn. Bắt đầu với kiểu dữ liệu cơ bản, interface, và thực hành chuyển từ JavaScript sang TypeScript.",
      category: "Công nghệ",
      date: "2025-10-14",
    },
  ]);

  const navigate = useNavigate();

  const addPost = (post: Post) => {
    setPosts([
      ...posts,
      { ...post, id: Date.now(), date: new Date().toISOString().split("T")[0] },
    ]);
    alert("Đăng bài thành công!");
    navigate("/");
  };

  const updatePost = (id: number, updated: Post) => {
    setPosts(
      posts.map((p) => (p.id === id ? { ...updated, id, date: p.date } : p))
    );
    alert("Cập nhật thành công!");
    navigate(`/posts/${id}`);
  };

  const deletePost = (id: number) => {
    if (window.confirm("Bạn có chắc muốn xóa bài viết này?")) {
      setPosts(posts.filter((p) => p.id !== id));
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<PostList posts={posts} onDelete={deletePost} />}
        />
        <Route
          path="/posts/:id"
          element={<PostDetail posts={posts} onDelete={deletePost} />}
        />
        <Route path="/create" element={<PostForm onSubmit={addPost} />} />
        <Route
          path="/posts/edit/:id"
          element={<PostForm posts={posts} onUpdate={updatePost} />}
        />
      </Routes>
    </div>
  );
};

export default App;
