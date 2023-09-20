import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding="0 20px">
      <Image
        src="https://raw.githubusercontent.com/GameHub88/.github/main/profile/logo.png"
        boxSize="60px"
      ></Image>
      <Text>Game Hub</Text>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;