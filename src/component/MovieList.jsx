import React from "react";

export default function MovieList({ movieTitle, movieDesc }) {
  console.log(movieTitle);
  return (
    <>
      <div>
        <h3>{movieTitle}</h3>
        <p>{movieDesc}</p>
      </div>
    </>
  );
}
