// import { Box, Input } from "@chakra-ui/react";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Flex,
} from "@chakra-ui/react";
import { FcSearch } from "react-icons/fc";
import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  addChannel,
  removeChannel,
  getChannel,
} from "../../store/AllAdminRedux/ChannelDataRedux/ChannelData.action";

let initialChannel = {
  id: "",
  name: "",
  logo: "",
};

const AdminChannelPage = () => {
  let [data, setData] = useState(initialChannel);
  let [search, setSearch] = useState("");
  let [page, setPage] = useState(1);
  let { channels } = useSelector((store) => store.channelManager);
  let totalChannels = channels.length;

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChannel(page));
  }, [page]);

  let handleDelete = (id) => {
    dispatch(removeChannel(id));
  };

  let handleChange = (e) => {
    let { name, value, type } = e.target;
    value = type === "number" ? +value : value;
    setData({ ...data, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addChannel(data));
    setData({ id: "", name: "", logo: "" });
  };

  let { logo, name, id } = data;

  // const { isOpen, onOpen, onClose } = useDisclosure();

  // const initialRef = React.useRef(null);
  // const finalRef = React.useRef(null);

  return (
    <div>
      <Container margin="auto">
        <Heading color={"teal"}>Add Channel</Heading>
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
              placeholder="Url of Channel"
              name="logo"
              value={logo}
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
              placeholder="Enter channel name"
              name="name"
              value={name}
              onChange={handleChange}
            ></Input>
            <br />
            <br />
            <Button w={"150px"} type="submit" value="Add Channel">
              Add Channel
            </Button>
          </form>
        </Box>
      </Container>
      <br />
      <hr />
      <br />
      <Container>
        <Heading color={"teal"}>
          All Channels :-<span> {totalChannels}</span>
        </Heading>
        <br />
        <br />
        {/* \\\\\\\\\\\\\\\\\---------------All Channels----------------///////////////// */}
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
        {channels
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
                gap: "20px",
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
                  width={{ sm: "30px", md: "30px", lg: "40px" }}
                  height={{ sm: "40px", md: "60px", lg: "80px" }}
                  src={el.logo}
                  alt={el.name}
                  style={{ borderRadius: "50%" }}
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
                  REMOVE CHANNEL
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
            disabled={page >= totalChannels}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default AdminChannelPage;
