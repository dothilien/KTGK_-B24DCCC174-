import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => (
  <nav style={{ marginBottom: "20px" }}>
    <h2 style={{ display: "inline", marginRight: "20px" }}>📝 BlogApp</h2>
    <NavLink to="/" style={{ marginRight: "10px" }}>
      Trang chủ
    </NavLink>
    <NavLink to="/create">Viết bài</NavLink>
  </nav>
);

export default Navbar;
