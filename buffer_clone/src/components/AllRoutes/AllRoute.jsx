import React from "react";
import { Routes, Route } from "react-router-dom";
// import { Login } from "../../pages/LoginPage";

// import { Signup } from "../../pages/SignupPage";
// import HomePage from "../../pages/HomePage";
import  Navbar3  from "../../components/Navbar3";
import AdminLogin from "../Admin/AdminLogin";
const AllRoute = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}>
        {" "}
      </Route> */}
      <Navbar3 />
      <Route path="/admin/login/*" element={<AdminLogin />}></Route>
      {/* <Route path="/login/SignupPage/*" element={<Signup />}></Route>
      <Route path="/homepage" element={<HomePage />}></Route> */}
    </Routes>
  );
};

export default AllRoute;
