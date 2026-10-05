import React from "react";

export default function SearchBar({ searchInputRef, onSearchChange }) {
  return (
    <div style={{ margin: "15px 0" }}>
      <label>Search Movie: </label>
      <input
        type="text"
        ref={searchInputRef}
        onChange={onSearchChange}
        placeholder="Search by title..."
        style={{ padding: "6px", width: "250px" }}
      />
    </div>
  );
}
