import { Heading } from "@chakra-ui/react";
import { Genre } from "../Hooks/useGenres";
import { Platform } from "../Hooks/UsePlatforms";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `
  ${gameQuery.platform?.name || ""}
    ${gameQuery.genre?.name || ""}
    Games`;
  return <Heading>{heading}</Heading>;
};

export default GameHeading;
