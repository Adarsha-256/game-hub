import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useHooks, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/UseGenres";

import useGames from "../hooks/useGames";
import { GameQuery } from "../App";
interface Props {
  gamequery: GameQuery;
}

const GameGrid = ({ gamequery }: Props) => {
  const { data, error, isLoading } = useGames(gamequery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map((Skeleton) => (
          <GameCardContainer key={Skeleton}>
            {" "}
            <GameCardSkeleton></GameCardSkeleton>
          </GameCardContainer>
        ))}
      {data.map((game) => (
        <GameCardContainer key={game.id}>
          <GameCard game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
