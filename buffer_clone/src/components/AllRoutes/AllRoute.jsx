import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../../pages/LoginPage";

import Admin from "../../components/Admin/Admin";
import { Signup } from "../../pages/SignupPage";
import HomePage from "../../pages/HomePage";
import AdminLogin from "../Admin/AdminLogin";
import Publishing from "../../pages/Publishing";
import Analytic from "../../pages/Analytic";
// import { Instagram } from "@material-ui/icons";
import Instagram from "../../pages/Instagram";
import RequiredAuth from "../Admin/RequiredAuth";
import AdminChannelPage from "../Admin/AdminChannelPage";
import AdminUserPage from "../Admin/AdminUserPage";
import AdminNavbar from "../Admin/AdminNavbar";

const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}>
        {" "}
      </Route>

      <Route path="/admin/login/*" element={<Admin />}></Route>
      <Route path="/login/SignupPage/*" element={<Signup />}></Route>
      <Route path="/homepage" element={<HomePage />}></Route>
      <Route path="/login/publish" element={<Publishing />}></Route>
      <Route path="/analytics" element={<Analytic />}></Route>
      <Route path="/instagram" element={<Instagram />}></Route>
      <Route path="/admin/*" element={<Admin />}></Route>
      <Route path="/admin/navbar/*" element={<AdminNavbar />}></Route>
      <Route
        path="/adminchannel"
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
  );
};
export default AllRoute;
