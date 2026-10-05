import React from "react";

export default function MovieItem({
  movie,
  isFavorite,
  onToggleFavorite,
  onViewDetails,
}) {
  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.genre}</td>
      <td>{movie.year}</td>
      <td>{movie.rating}</td>
      <td>
        <button
          onClick={() => onToggleFavorite(movie.id)}
          style={{ marginRight: "8px", cursor: "pointer" }}
        >
          {isFavorite ? "★ Unfavorite" : "☆ Favorite"}
        </button>
        <button
          onClick={() => onViewDetails(movie)}
          style={{ cursor: "pointer" }}
        >
          View Details
        </button>
      </td>
    </tr>
  );
}
