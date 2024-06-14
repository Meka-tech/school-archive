import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import Home from "views/landing-page/home";
import Schools from "views/landing-page/schools";
import School from "views/landing-page/school";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Home />} />
      <Route path="/schools" element={<Schools />} />
      <Route path="/school" element={<School />} />
    </Routes>
  );
};

export default App;
