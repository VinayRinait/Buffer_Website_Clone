import logo from "./logo.svg";
import "./App.css";
import Admin from "./components/Admin/Admin";
// import Analytic from "./pages/Analytic";
import AdminLogin from "./components/Admin/AdminLogin";
import { Route, Routes } from "react-router-dom";
import AdminUserData from "./components/Admin/AdminUserData";

function App() {
  return (
    <div>
       {/* <Routes>
        <Route path="" element={<AdminUserData />} />
        <Route path="login" element={<Admin />} />
      </Routes> */}
      <Admin />

      <AdminLogin />
    </div>
  );
}

export default App;
