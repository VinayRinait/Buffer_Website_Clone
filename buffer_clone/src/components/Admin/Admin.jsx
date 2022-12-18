import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminChannelPage from "./AdminChannelPage";
import AdminLogin from "./AdminLogin";
import AdminNavbar from "./AdminNavbar";
import AdminUserPage from "./AdminUserPage";
import RequiredAuth from "./RequiredAuth";

const Admin = () => {
  return (
    <div>
      <AdminNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <AdminChannelPage />
            </RequiredAuth>
          }
        />
        <Route
          path="/adminuserpage"
          element={
            <RequiredAuth>
              <AdminUserPage />
            </RequiredAuth>
          }
        />
        <Route path="/admin/login/*" element={<AdminLogin />} />
      </Routes>
    </div>
  );
};

export default Admin;
