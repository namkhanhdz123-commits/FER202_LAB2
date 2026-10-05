import React from "react";

export default function MovieDetail({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        marginTop: "20px",
        borderRadius: "5px",
      }}
    >
      <h3>Movie Details</h3>
      <button onClick={onClose} style={{ float: "right", cursor: "pointer" }}>
        Close
      </button>
      <p>
        <strong>Title:</strong> {movie.title}
      </p>
      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>
      <p>
        <strong>Year:</strong> {movie.year}
      </p>
      <p>
        <strong>Rating:</strong> {movie.rating}
      </p>
      <p>
        <strong>Director:</strong> {movie.director}
      </p>
      <p>
        <strong>Duration:</strong> {movie.duration} minutes
      </p>
      <p>
        <strong>Description:</strong> {movie.description}
      </p>
    </div>
  );
}
