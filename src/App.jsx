import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import Home from "views/landing-page/home";
import Schools from "views/landing-page/schools";
import School from "views/landing-page/school";
import Blog from "views/landing-page/blog";
import Blogs from "views/landing-page/blogs";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Home />} />
      <Route path="/schools" element={<Schools />} />
      <Route path="/school" element={<School />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="/blog/:id" element={<Blog />} />
    </Routes>
  );
};

export default App;
