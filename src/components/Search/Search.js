import React, { useEffect, useState } from "react";
import "./Search.css";

const Search = () => {
  const [searchText, setSearchText] = useState("");
  const [loadData, setLoadData] = useState([]);

  useEffect(() => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((status) => setLoadData(status.data));
  }, [searchText]);

  const searchProduct = (e) => {
    setSearchText(e.target.value);
    console.log(loadData);
  };

  return (
    <div className="search-bar text-center p-16">
      <h1 className="text-4xl text-center font-bold p-16">Buy Your Phone</h1>
      <input
        onChange={searchProduct}
        className="search-box"
        type="text"
        placeholder="Sreach..."
      />
      <div className="search p-20 font-medium">
        <h3>result found:{loadData.length}</h3>
      </div>
    </div>
  );
};

export default Search;
