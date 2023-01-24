import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import MovieList from "./component/MovieList";

function App() {
  const [movie, setDetails] = useState([
    {
      movieTitle: "desperados ",
      movieDesc: "film ta3 les cowboy",
    },
  ]);

  const [input, setInput] = useState({
    movieTitle: "",
    movieDesc: "",
  });

  const handleInput = (input) => {
    const { name, value } = input.target;
    setInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newMovie = Object.fromEntries(formData);
    setDetails([newMovie, ...movie]);
  };

  return (
    <>
      <div>
        <form
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <label>title</label>
          <input
            name="movieTitle"
            type="text"
            placeholder="Enter the movie title"
            onChange={handleInput}
          />
          <label>Description</label>
          <input
            onChange={handleInput}
            name="movieDesc"
            type="text"
            placeholder="Enter the movie description"
          />
          <input type="file" />
          <button type="submit">Add movie</button>
        </form>
        <div>
          {movie.map((el, i) => (
            <MovieList key={i} {...el} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
