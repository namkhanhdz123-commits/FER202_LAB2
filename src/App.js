import React, { useState } from "react";
import ToggleButton from "./context/ThemeContext";
import SearchBar from "./SearchBar";

const App = () => {
  const [movies, setMovies] = useState([
    { title: "Movie 1" },
    { title: "Movie 2" },
    { title: "Movie 3" },
  ]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearch = (searchTerm) => {
    const filtered = movies.filter((movie) =>
      movie.title
        .toLowerCase()
        .includes(
          searcmovie.title.toLowerCase().includessearchTerm.toLowerCase(),
        ),
    );
    setFilteredMovies(filtered);
  };

  const handleToggle = (darkMode) => {
    setIsDarkMode(darkMode);
  };

  const appClass = isDarkMode ? "bg-dark text-light" : "bg-lighttext-dark";

  return (
    <div className={`App ${appClass}`}>
      <h1>Mini Movie Manager</h1>
      <div
        className="d-flex
justify-content-between
align-items-center"
      >
        <ToggleButton onToggle={handleToggle} />
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="mt-4">
        {filteredMovies.map((movie) => (
          <div key={movie.title}>{movie.title}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
