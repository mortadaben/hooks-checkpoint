import React from "react";

export default function MovieCard() {
  return (
    <>
      <img src={movieImage} />
      <h2>{movieTitle}</h2>
      <p>{movieDesc}</p>
    </>
  );
}
