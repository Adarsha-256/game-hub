import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import UseGenres from "../hooks/UseGenres";

const GameList = () => {
  const { data, isLoading, error } = UseGenres();
  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
            ></Image>
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GameList;
