import React from "react";
import { YOUTUBE_SEARCH_URL } from "../utils/constants";

const SearchCard = () => {
    const [searchQuery, setSearchQuery] = React.useState("");  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const searchVideos = async () => {
    if (searchQuery.trim() !== "") {
      const searchResults = await fetch(
        YOUTUBE_SEARCH_URL + "&q=" + searchQuery
      );
      const json = await searchResults.json();
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        className="border p-2 w-full rounded-l-full"
        onChange={handleSearchChange}
      />
      <button
        className="border p-2 rounded-r-full bg-gray-200 hover:bg-gray-300"
        onClick={() => searchVideos()}
      >
        🔍
      </button>
    </div>
  );
};

export default SearchCard;
