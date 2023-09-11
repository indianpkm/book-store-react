import React, { useContext, useEffect } from "react";
import axios from "axios";
import "./bookStore.css";
import { DataContext } from "../../../context/DataContext";
import { useNavigate } from "react-router-dom";

const BookStoreStructure = () => {
  const { searchBook, setResponseData, setSearchBook} =
    useContext(DataContext);
    const navigate=useNavigate()

  const fetchData = async () => {
    try {
      const localStorageData = localStorage.getItem("localStorageData");
      if (localStorageData) {
        setResponseData(JSON.parse(localStorageData));
        setSearchBook(JSON.parse(localStorageData));
      }
      if (!localStorageData) {
        const response = await axios.get("http://localhost:8000/getbook");
        const data = response.data;
        localStorage.setItem("localStorageData", JSON.stringify(data));
        setResponseData(data);
        setSearchBook(data);
      }
    } catch (err) {
      console.error("Failed to fetch data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="allBookContainer">
      {searchBook &&
        searchBook.map((item, index) => {
          return (
            <div className="Book-Container" key={index}>
              <img
                className="bookImage"
                src={item.image}
                alt="Book Store Image"
              />
              <span>
              <p>{item.title}</p>
              <p>€{item.price.value}</p>
              </span>
              <button className="search-button" onClick={()=>navigate(`/book/${item._id}`)}>View Detail</button>
            </div>
          );
        })}
    </div>
  );
};

export default BookStoreStructure;
