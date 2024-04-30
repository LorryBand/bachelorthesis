import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import { useDispatch } from "react-redux";
import { fetchAuthMe } from "./redux/slices/auth";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <Routes>
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="auth/*" element={<AuthLayout />} />
    </Routes>
  );
};

export default App;
