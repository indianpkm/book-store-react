import React from "react";
import "./heroSection.css";
import kidsImage from "../../../assets/kids-book.png";
import SearchBook from "../../searchBook/SearchBook";
import HamburgerBox from "../../hamburgerBox/HamburgerBox";

const HeroSection = () => {
  return (
    <div className="hero_section_container">
      <HamburgerBox/>
      <SearchBook />
      <div className="hero-bottom">
        <div className="book-showroom-description">
          <span>Book Showroom</span>
          <br />
          <i>by Pramod Kumar Maurya</i>
          <br />
          <p>
            Explore our online bookshop! Find all kinds of books, no matter what
            you love to read. It's your one-stop place for all things books.
            Start your reading adventure now!
          </p>
        </div>
        <div className="kid-books-box">
          <img className="kids-book" src={kidsImage} alt="best kids book" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
