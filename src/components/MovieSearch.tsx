import React from "react";

interface MovieSearchProps {
  onSearch: (term: string) => void;
}

const MovieSearch: React.FC<MovieSearchProps> = ({ onSearch }) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value); // Llama a la función de búsqueda con el valor del input
  };

  return (
    <input
      type="text"
      placeholder="Buscar película..."
      onChange={handleSearch}
      style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
    />
  );
};

export default MovieSearch;
