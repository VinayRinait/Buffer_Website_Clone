import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../Admin/Admin";

const AllRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Admin />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoute;
