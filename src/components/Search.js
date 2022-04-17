import {React, useState} from "react";

function Search({setSearch}) {
  
  function handleSearchInput(value){
    setSearch(value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => handleSearchInput(e.target.value)}
      />
    </div>
  );
}

export default Search;
