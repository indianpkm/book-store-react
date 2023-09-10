import React, { useContext, useState } from "react";
import "./search.css";
import { DataContext } from "../../context/DataContext";

const SearchBook = () => {
  const { responseData, setSearchBook } = useContext(DataContext);

  const handleChange = (e) => {
    const value = e.target.value;
    const filterData = responseData.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(value.toLowerCase());
      const authorMatch = item.author
        .toLowerCase()
        .includes(value.toLowerCase());
      return titleMatch || authorMatch;
    });
    setSearchBook(filterData);
  };

  const handleSearch = () => {};

  return (
    <div className="search-box">
      <input type="text" placeholder="Search book" onChange={handleChange} />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBook;
