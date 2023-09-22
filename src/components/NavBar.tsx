import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";

interface Props {
  onSearch: (text: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack paddingX={2} paddingY={5}>
      <Image
        src="https://raw.githubusercontent.com/GameHub88/.github/main/profile/logo.png"
        boxSize="60px"
      ></Image>
      <Search onSearch={onSearch} />
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
