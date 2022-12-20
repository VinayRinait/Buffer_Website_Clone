import React from "react";

import Admin from "./components/Admin/Admin";
import "./App.css";
import AllRoute from "./components/AllRoutes/AllRoute";
import Navbar3 from "./components/Navbar3";
import { Route, Routes } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminNavbar from "./components/Admin/AdminNavbar";
import AdminUserPage from "./components/Admin/AdminUserPage";
import AdminChannelPage from "./components/Admin/AdminChannelPage";
import RequiredAuth from "./components/Admin/RequiredAuth";

function App() {
  return (
    <div>
      {/* <Admin /> */}
      {/* <Navbar3 />
      <Routes>
        <Route path="/" element={<></>}></Route>
        <Route path="/adminnavbar" element={<AdminNavbar />}></Route>
        <Route path="/adminpage/*" element={<Admin />}></Route>
        <Route
          path="/adminuserpage"
          element={
            <RequiredAuth>
              <AdminUserPage />
            </RequiredAuth>
          }
        />
        <Route path="/admin/login/*" element={<AdminLogin />} />
        <Route
          path="/adminchannelpage"
          element={
            <RequiredAuth>
              <AdminChannelPage />
            </RequiredAuth>
          }
        />
      </Routes> */}
      <Admin />
    </div>
  );
}

export default App;
