import React from "react";
import Instagram from "./pages/Instagram";
import Userprofile from "./pages/Userprofile";
import { Navbar } from "./components/Navbar";

// import "./App.css";

import "./App.css";
import { HomePage } from "./pages/HomePage";
function App() {
  return (
    <div>
      <Navbar />
      {/* <Instagram /> */}
      <Userprofile />
      
    </div>
  );
}

export default App;
