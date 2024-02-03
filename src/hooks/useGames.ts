import apiClient from "../services/api-client";
import useData from "./useData";
import { Genre } from "./UseGenres";
import { GameQuery } from "../App";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  image_background: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface Gamegetresponse {
  count: number;
  results: Game[];
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: { genres: gameQuery.genre?.id, platform: gameQuery.platform?.id },
    },
    [gameQuery]
  );

export default useGames;
