import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import { useSelector } from "react-redux";
import { selectIsAuth } from "./redux/slices/auth";
const App = () => {
  const isAuth = useSelector(selectIsAuth);

  return (
    <Routes>
          <Route path="admin/*" element={<AdminLayout />} />
          <Route path="rtl/*" element={<RtlLayout />} />
          <Route path="/" element={<Navigate to="/admin" replace />} />
          <Route path="auth/*" element={<AuthLayout />} />
    </Routes>
  );
};

export default App;
