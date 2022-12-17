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
} from "@chakra-ui/react";
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

  let { channels } = useSelector((store) => store.channelManager);
  let totalChannels = channels.length;

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChannel());
  }, [dispatch]);

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
      <br />
      <br />
      <Container>
        <Heading color={"teal"}>Add Channel</Heading>
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
        {channels.map((el) => (
          <Box
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
                src={el.logo}
                alt={el.name}
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
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

        {/* //////////////////////////////////////////////////////////////////////////// */}

        {/* <Button onClick={onOpen}>Add Channel</Button> */}
        {/* <Button ml={4} ref={finalRef}>
          I'll receive focus on close
        </Button> */}

        {/* <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <form>
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>First name</FormLabel>
                  <Input ref={initialRef} placeholder="First name" />
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Last name</FormLabel>
                  <Input placeholder="Last name" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Last name</FormLabel>
                  <Input placeholder="Last name" />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Add Channel
                </Button>

                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal> */}
      </Container>
    </div>
  );
};

export default AdminChannelPage;
