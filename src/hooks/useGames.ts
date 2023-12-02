import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  image_background: string;
}

interface Gamegetresponse {
  count: number;
  results: Game[];
}

const useHooks = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<Gamegetresponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);
  return { games, error };
};
export default useHooks;
