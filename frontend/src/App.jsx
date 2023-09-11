import React from "react";
import BookSection from "./component/heroAndBookSection/bookSection/BookSection";
import HeroSection from "./component/heroAndBookSection/heroSection/HeroSection";
import BookNavbar from "./component/heroAndBookSection/bookNavbar/BookNavbar";
import './app.css'

const App = () => {
  return (
    <div className="app"  >
      <HeroSection/>
      <div className="book-navbar">
      <BookNavbar/>
      </div>
      <BookSection/>
    </div>
  );
};

export default App;
