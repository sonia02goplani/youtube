import React from "react";
import { useState, useEffect } from "react";
import { SEARCH_SUGGESTIONS, YOUTUBE_SEARCH_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlice";
import { addSearchQuery } from "../utils/searchSlice";
import { useNavigate } from "react-router-dom";

const SearchCard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    //Make an API call after evry key press
    //but if the diffrrence between 2 api iss less
    // than 200 decline the API call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();

        dispatch(cacheResults({
            [searchQuery]: searchSuggestions
        }));
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * Key - i
   * -render the component
   * useEffect()
   * start timer => make api call
   *
   * Key - ip
   * -destroy the component and call useEffect return method
   * -render the component
   * useEffect()
   * start timer => make api call
   *
   *
   * setTimeout()200ms-> make a api call
   *
   */

  const getSearchSuggestions = async () => {
    if (searchQuery.trim() !== "") {
      const searchResults = await fetch(
        SEARCH_SUGGESTIONS + "&q=" + searchQuery
      );
      const json = await searchResults.json();
      setSearchSuggestions(json[1]);
    }
  };

  return (
    <>
      <div className="flex col-span-10 my-2 relative">
        <input
          type="text"
          value={searchQuery}
          placeholder="Search"
          className="border p-2 w-full rounded-l-full"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
        />
        <button
          className="border p-2 rounded-r-full bg-gray-200 hover:bg-gray-300"
          onClick={() => {
            if (searchQuery.trim()) {
              dispatch(addSearchQuery(searchQuery.trim()));
              setShowSuggestions(false);
              navigate('/')
            }
          }}        >
          🔍
        </button>
      </div>
      {showSuggestions && searchSuggestions.length > 0 && (
        <div className="flex flex-col justify-center absolute z-10  top-20  left-[16%] w-[75%]">
            {searchSuggestions && searchSuggestions.length > 0 && (
              <div className="border p-2 rounded-lg bg-white shadow-md">
                <h3 className="font-bold mb-2">Search Suggestions:</h3>
                <ul>
                  {searchSuggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="mb-1 cursor-pointer hover:bg-gray-200 p-1 rounded"
                      onMouseDown={() => {
                        setSearchQuery(prevv => suggestion)
                        setShowSuggestions(false);

                      } }
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>
      )}
    </>
  );
};

export default SearchCard;
