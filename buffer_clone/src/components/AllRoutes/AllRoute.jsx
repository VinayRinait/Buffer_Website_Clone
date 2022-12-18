import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Login } from '../../pages/LoginPage';

import Admin from "../../components/Admin/Admin"
import { Signup } from '../../pages/SignupPage';
import  HomePage from "../../pages/HomePage";
const AllRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}> </Route>

      <Route path="/dash/Admin/*" element={<Admin />}></Route>
      <Route path="/login/SignupPage/*" element={<Signup />}></Route>
      <Route path="/homepage" element={<HomePage />}></Route>
    </Routes>
  )
}
