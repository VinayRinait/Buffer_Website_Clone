import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  useDisclosure,
} from "@chakra-ui/react";

import axios from "axios";

const AddPost = () => {
  // TODO: Remove below const and instead import them from chakra
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState(0);
  const [src, setSrc] = useState("");

  const handleClick = () => {
    axios
      .post(`https://social-hub-orcin.vercel.app/intagram`, {
        title: input,
        category: type,
        gender: gender,
        price: price,
        url: src,
      })
      .then((res) => {
        console.log(res);
        alert("POST SUCCESSFULLY");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Button my={4} bg={"blue"} color={"white"} onClick={onOpen}>
        Create Post
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} variant={Modal}>
        <ModalOverlay />
        <ModalContent bg={"white"}>
          <ModalHeader>Create New Post</ModalHeader>
          <ModalBody pb={6}>
            <label>UserName</label>
            <Input
              placeholder="UserName"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <label>Comment</label>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <option
                data-cy="add-product-category-shirt"
                value={"Impressive pic"}
              >
                Impressive pic
              </option>
              <option
                data-cy="add-product-category-pant"
                value={"Vibes everywhere!"}
              >
                Vibes everywhere!
              </option>
              <option
                data-cy="add-product-category-jeans"
                value={" Beauty Queen"}
              >
                Beauty Queen
              </option>
            </Select>
            <label>Like</label>
            <RadioGroup
              data-cy="add-product-gender"
              value={gender}
              onChange={setGender}
            >
              <Radio data-cy="add-product-gender-male" value={"❤️"}>
                ❤️
              </Radio>
              <Radio data-cy="add-product-gender-female" value={"😍"}>
                😍
              </Radio>
              <Radio data-cy="add-product-gender-unisex" value={"👌"}>
                👌
              </Radio>
            </RadioGroup>
            <label> Add Caption</label>
            <Input
              placeholder="Caption"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <label>Image_url</label>
            <Input
              data-cy="Image_url"
              placeholder="Image_url"
              onChange={(e) => setSrc(e.target.value)}
              value={src}
            />

            <Button colorScheme="blue" mr={3} onClick={handleClick}>
              Create
            </Button>
            {/* <Select  my={4}  bg={"blue"} color={"white"} width="160px" onClick={onOpen} >
              <option  color={"white"} onClick={handleClick} bg={"blue"}  value='Instagram Post'>Instagram Post</option>
              <option  bg={"blue"} color={"white"} onClick={handleClick}  value='Facebook Post'>Facebook Post </option>
              <option  bg={"blue"} color={"white"} onClick={handleClick}   value='Twitter Post'>Twitter Post</option>
            </Select>  */}
            <Button onClick={onClose}>close</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddPost;
