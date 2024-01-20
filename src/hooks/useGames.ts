import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import UseData from "./UseData";
import { Genre } from "./UseGenres";
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

const useGames = (selectedGenre: Genre | null) =>
  UseData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
