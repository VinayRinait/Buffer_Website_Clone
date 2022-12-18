import React from "react";
import AllRoute from "./components/AllRoutes/AllRoute"
import { Navbar } from "./components/Navbar";



import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <AllRoute />
      
      <Admin />
      {/* <Instagram /> */}
      {/* <AddPost /> */}
    </div>
  );
}

export default App;
