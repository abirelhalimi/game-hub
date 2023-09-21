import React from "react";
import { Game } from "../Hooks/useGames";
import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const Score = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} fontSize={14} paddingX={2} borderRadius={4}>
      {score}
    </Badge>
  );
};

export default Score;
