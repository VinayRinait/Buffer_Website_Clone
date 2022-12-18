import React from "react";
import { Flex } from "@chakra-ui/react";
// import { Link } from 'react-router-dom'
import SideBar from "./sidebar";
import { Calender } from "../components/Calender/Calender";
import Navbar2 from "../components/Navbar2";
import Content from "../components/content/content";
const Publishing = () => {
  return (
    <div>
      <div>
        <Navbar2 />
      </div>
      <div>
        <Flex display="flex">
          <SideBar />
          {/* <Content /> */}
          <div style={{ marginLeft: "20px" }}>
            <Calender />
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default Publishing;
