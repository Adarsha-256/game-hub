import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./UseData";
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

const useHooks = () => useData<Game>("/games");

export default useHooks;
