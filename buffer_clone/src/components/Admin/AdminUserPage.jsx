// import { Box, Input } from "@chakra-ui/react";
import { Box, Button, Container, Heading, Input, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FcSearch } from "react-icons/fc";
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
  let [search, setSearch] = useState("");
  let [page, setPage] = useState(1);
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
    dispatch(getUser(page));
  }, [page]);

  let { avatar, name, id } = data;
  return (
    <div>
      <br />
      <br />
      <Container margin="auto">
        <Heading color={"teal"}>Add User</Heading>
        <br />
        <br />
        <Box
          w={["90vw", "90vw", "90vw", "90vw"]}
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
        <Box w={["90vw", "90vw", "90vw", "90vw"]}>
          <Flex gap={1}>
            <Box>
              {" "}
              <Heading as="h4" size="md">
                Search
              </Heading>
            </Box>

            <Box>
              <FcSearch />
            </Box>
          </Flex>

          <Input
            focusBorderColor="teal.400"
            width={["290px", "385px", "385px", "385px"]}
            type="text"
            placeholder="Search....."
            onChange={(e) => setSearch(e.target.value)}
            borderColor="teal"
            marginTop="20px"
            marginBottom="20px"
          ></Input>
        </Box>
        {users
          .filter((el) => {
            if (search === "") {
              return el;
            } else if (
              el.name.toLowerCase().includes(search.toLocaleLowerCase())
            ) {
              return el;
            }
          })
          .map((el) => (
            <Box
              w={["90vw", "90vw", "90vw", "90vw"]}
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

        <Box marginTop="20px" marginLeft="100px" marginBottom="40px">
          <Button
            size="sm"
            colorScheme="teal"
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </Button>
          <Button size="sm">{page}</Button>
          <Button
            size="sm"
            colorScheme="teal"
            disabled={page >= totalUsers}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default AdminUserPage;
