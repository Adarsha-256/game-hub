import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import Genres from "../data/Genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const UseGenres = () => ({ data: Genres, isLoading: false, error: null });

export default UseGenres;
