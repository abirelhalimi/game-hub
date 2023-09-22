import { Text, SimpleGrid } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCard from "./GameCard";
import GameCardLoading from "./GameCardLoading";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../Hooks/useGenres";
import { Platform } from "../Hooks/UsePlatforms";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = Array.from(Array(30).keys());

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={5}
        padding={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardLoading />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
