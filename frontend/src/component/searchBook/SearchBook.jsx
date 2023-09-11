import React, { useContext, useState } from "react";
import "./search.css";
import { DataContext } from "../../context/DataContext";
import SearchIcon from "@mui/icons-material/Search";
import bookIcon from '../../assets/open-book-icon.svg'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
    <div className="search-component">
      <div className="logo-box">
        <img src={bookIcon} alt="book icon for book store"/>
        <p>Books</p>
      </div>
      <div className="search-box">
        <SearchIcon />
        <input type="text" placeholder="Search book" onChange={handleChange} />
      </div>
      <div>
      <button className="basket-button" onClick={handleSearch}>
        My Basket 
        <ShoppingCartIcon fontSize="small"/>
      </button>
      </div>
    </div>
  );
};

export default SearchBook;
