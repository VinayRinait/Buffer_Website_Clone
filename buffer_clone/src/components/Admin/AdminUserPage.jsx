// import { Box, Input } from "@chakra-ui/react";
import { Box, Button, Container, Heading, Input } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addUser,
  getUser,
  removeUser,
} from "../../store/AllAdminRedux/UserDataRedux/UserData.action";

let initialUsers = {
  id: "",
  name: "",
  avatar: "",
};

const AdminUserPage = () => {
  let [data, setData] = useState(initialUsers);

  let { users } = useSelector((store) => store.userManager);
  let totalUsers = users.length;

  let dispatch = useDispatch();

  let handleDelete = (id) => {
    dispatch(removeUser(id));
  };

  let handleChange = (e) => {
    let { name, value, type } = e.target;
    value = type === "number" ? +value : value;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(data));
    setData({ id: "", name: "", avatar: "" });
  };

  useEffect(() => {
    dispatch(getUser());
  }, []);

  let { avatar, name, id } = data;
  return (
    <div>
      <br />
      <br />
      <Container>
        <Heading color={"teal"}>Add User</Heading>
        <br />
        <br />
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p="5"
          boxShadow="xl"
          borderColor={"teal"}
        >
          <form onSubmit={handleSubmit}>
            <Input
              focusBorderColor="teal.400"
              w={"400px"}
              type="url"
              placeholder="Url of user"
              name="avatar"
              value={avatar}
              onChange={handleChange}
            ></Input>
            <br />
            <br />
            <Input
              focusBorderColor="teal.400"
              w={"400px"}
              type="number"
              placeholder="Enter id"
              name="id"
              value={id}
              onChange={handleChange}
            ></Input>
            <br />
            <br />
            <Input
              focusBorderColor="teal.400"
              w={"400px"}
              type="text"
              placeholder="Enter user name"
              name="name"
              value={name}
              onChange={handleChange}
            ></Input>
            <br />
            <br />
            <Button w={"150px"} type="submit" value="Add Users">
              Add User
            </Button>
          </form>
        </Box>
      </Container>
      <br />
      <hr />
      <br />
      <Container>
        <Heading color={"teal"}>
          All Users :- <span> {totalUsers}</span>
        </Heading>
        <br />
        <br />
        {/* \\\\\\\\\\\\\\\\\---------------All Users----------------///////////////// */}
        {users.map((el) => (
          <Box
            key={el.id}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              justifyContent: "center",
              alignItems: "center",
            }}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="5"
            boxShadow="xl"
            borderColor={"teal"}
          >
            <Box>{el.id}</Box>
            <Box>
              <img
                src={el.avatar}
                alt={el.name}
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              />
            </Box>
            <Box>
              <h4>{el.name}</h4>
            </Box>
            <Box>
              <Button
                bgColor={"red.300"}
                size="xs"
                onClick={() => handleDelete(el.id)}
              >
                REMOVE USER
              </Button>
            </Box>
          </Box>
        ))}
      </Container>
    </div>
  );
};

export default AdminUserPage;
