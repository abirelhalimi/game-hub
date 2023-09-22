import React from "react";
import useGenres, { Genre } from "../Hooks/useGenres";
import useData from "../Hooks/useData";
import {
  List,
  ListItem,
  HStack,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImgUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  {
    isLoading && <Spinner />;
  }
  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data.map((g) => (
          <ListItem key={g.id}>
            <HStack padding={2}>
              <Image
                objectFit="cover"
                boxSize="40px"
                borderRadius={8}
                src={getCroppedImgUrl(g.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                onClick={() => onSelectGenre(g)}
                variant={"link"}
                fontSize="large"
                fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {g.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
