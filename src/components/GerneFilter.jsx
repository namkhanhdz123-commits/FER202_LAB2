import React from "react";

export default function GenreFilter({ selectedGenre, onGenreChange }) {
  const genres = [
    "All Genres",
    "Action",
    "Animation",
    "Comedy",
    "Drama",
    "Romance",
    "Sci-Fi",
  ];

  return (
    <div style={{ margin: "15px 0" }}>
      <label>Genre: </label>
      <select
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
        style={{ padding: "6px" }}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
}
