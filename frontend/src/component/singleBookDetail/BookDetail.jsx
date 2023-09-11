import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import "./bookDetail.css";
import EditDialog from "../editDialog/EditDialog";
import { deleteBook } from "../../api/deleteBook";

const BookDetail = () => {
  const { responseData } = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const [book, setBook] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const [updatedData, setUpdatedData] = useState({
    title: "",
    author: "",
    price: "",
    summary: "",
    image: "",
  });

  useEffect(() => {
    if (responseData) {
      const singleBook = responseData.filter((item) => item._id === id);
      if (singleBook) {
        setBook(singleBook[0]);
        setUpdatedData({
          title: singleBook[0].title,
          author: singleBook[0].author,
          price: singleBook[0].price.value,
          summary: singleBook[0].summary,
          image: singleBook[0].image,
        });
      }
    }
  }, [responseData, id]);

  const handleDelete = async () => {
    console.log("deleting start");
    try {
      const response = await deleteBook(id);
      const updatedResponseData = responseData.filter(
        (item) => item._id !== id
      );
      localStorage.setItem(
        "localStorageData",
        JSON.stringify(updatedResponseData)
      );
      alert("Book deleted successfully");
      navigate("/");
    } catch (error) {
      console.log("Deleting fail", error.message);
    }
  };

  return (
    <div>
      {book && (
        <div className="container">
          <div className="left">
            <img
              src={updatedData.image}
              style={{ maxHeight: "80vh" }}
              alt="detail book image"
            />
          </div>
          <div className="right">
            <p>
              <b>Title : </b>
              {updatedData.title}
            </p>
            <p>
              <b>Author : </b>
              {updatedData.author}
            </p>
            <p>
              <b>Price : </b>€ {updatedData.price}
            </p>
            <p>
              <b>Summary : </b>
              <br />
              {updatedData.summary}
            </p>
            <button className="update-button" onClick={() => setOpen(true)}>
              Edit
            </button>
            <button className="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}
      {book && (
        <EditDialog
          book={book}
          open={open}
          setOpen={setOpen}
          updatedData={updatedData}
          setUpdatedData={setUpdatedData}
        />
      )}
    </div>
  );
};

export default BookDetail;
