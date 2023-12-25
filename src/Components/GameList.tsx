import React from "react";
import UseGenres from "../hooks/UseGenres";

const GameList = () => {
  const { genres } = UseGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GameList;
