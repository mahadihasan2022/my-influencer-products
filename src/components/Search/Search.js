import React, { useMemo, useState } from "react";
import "./Search.css";

const Search = (props) => {
//   console.log(props.cart);
  const [search, setSearch] = useState("");
  console.log(search);
  
  return (
    <div>
      <h1 className="container">Buy Your Phone</h1>
      <div className="search-container">
        <input
          className="search-box"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Sour Phone"
        />
        <button className="btn">Search</button>
      </div>
    </div>
  );
};

export default Search;
