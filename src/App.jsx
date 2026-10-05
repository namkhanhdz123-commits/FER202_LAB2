import React, { useState, useEffect, useRef, useMemo } from "react";
import { movies } from "./datas/movies"; // Import đúng tên 'movies'
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import GenreFilter from "./components/GerneFilter.jsx";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

function MainApp() {
  const { theme } = useTheme();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All Genres");
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Lưu danh sách id phim yêu thích vào localStorage với key 'movie_favorites'
  const [favoriteIds, setFavoriteIds] = useLocalStorage("movie_favorites", []);

  const searchInputRef = useRef(null);

  // Tự động focus vào ô input tìm kiếm khi tải trang
  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  const handleToggleFavorite = (id) => {
    setFavoriteIds((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id],
    );
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Sử dụng useMemo lọc theo từ khóa tìm kiếm và thể loại, đồng thời đếm tổng số phim hiển thị
  const filteredMovies = useMemo(() => {
    let result = [...movies];

    if (searchQuery.trim() !== "") {
      result = result.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (selectedGenre !== "All Genres") {
      result = result.filter((movie) => movie.genre === selectedGenre);
    }

    return result;
  }, [searchQuery, selectedGenre]);

  const appStyle = {
    backgroundColor: theme === "light" ? "#ffffff" : "#1a1a1a",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={appStyle}>
      <Header />

      <SearchBar
        searchInputRef={searchInputRef}
        onSearchChange={handleSearchChange}
      />
      <GenreFilter
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
      />

      <p>
        <strong>Total Movies:</strong> {filteredMovies.length}
      </p>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ flex: 2 }}>
          <MovieList
            movies={filteredMovies}
            favoriteIds={favoriteIds}
            onToggleFavorite={handleToggleFavorite}
            onViewDetails={setSelectedMovie}
          />
        </div>
        <div style={{ flex: 1 }}>
          <MovieDetail
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
}
