import React from "react";
import MovieItem from "./MovieItem";

export default function MovieList({
  movies,
  favoriteIds,
  onToggleFavorite,
  onViewDetails,
}) {
  if (movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <table
      border="1"
      cellPadding="10"
      style={{ width: "100%", borderCollapse: "collapse" }}
    >
      <thead>
        <tr>
          <th>Title</th>
          <th>Genre</th>
          <th>Year</th>
          <th>Rating</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => {
          const isFavorite = favoriteIds.includes(movie.id);
          return (
            <MovieItem
              key={movie.id}
              movie={movie}
              isFavorite={isFavorite}
              onToggleFavorite={onToggleFavorite}
              onViewDetails={onViewDetails}
            />
          );
        })}
      </tbody>
    </table>
  );
}
