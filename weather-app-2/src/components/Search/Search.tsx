import { useState } from "react";

interface SearchProps {
  onSearch: (location: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [location, setLocation] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter location"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
