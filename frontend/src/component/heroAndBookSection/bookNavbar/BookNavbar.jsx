import React from "react";
import "./bookNavbar.css";

const BookNavbar = ({ open }) => {
  return (
    <div
      className="book-navbar-container"
      style={{
        display:open?'grid':"flex",
        gridTemplateColumns: open ? "1fr 1fr 1fr 1fr" : "none",
        gridGap: open ? "0" : "initial",
      }}
    >
      <p>New arrivals</p>
      <p>Popular</p>
      <p>Top deals</p>
      <p>Coding</p>
      <p>Comics</p>
      <p>Poem</p>
      <p>Education</p>
    </div>
  );
};

export default BookNavbar;
