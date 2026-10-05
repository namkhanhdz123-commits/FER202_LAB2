import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <h2>Movie Management System</h2>
      <button
        onClick={toggleTheme}
        style={{ padding: "8px 12px", cursor: "pointer" }}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
}
