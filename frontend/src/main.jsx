import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DataProvider from "./context/DataContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetail from "./component/singleBookDetail/BookDetail.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/book/:id" element={<BookDetail/>}/>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  </React.StrictMode>
);
