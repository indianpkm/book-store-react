import React from "react";
import BookSection from "./component/BookSection";
import SearchBook from "./component/searchBook/SearchBook";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <SearchBook/>
      <BookSection />
    </div>
  );
};

export default App;
