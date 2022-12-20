import React from "react";
import { Link } from "react-router-dom";

const Navbar3 = () => {
  return (
    <div>
      <h1>NavBar</h1>
      <Link to="/adminnavbar">Admin Navbar</Link>
      {/* <Link to="/adminpage/*">Admin</Link> */}
    </div>
  );
};

export default Navbar3;
