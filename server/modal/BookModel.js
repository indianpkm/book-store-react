import mongoose from "mongoose";

// Define the book schema
const bookSchema = new mongoose.Schema({
  ISBN: {
    type: Number,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    currency: {
      type: String,
    },
    value: {
      type: Number,
      required: true,
    },
    displayValue: {
      type: String,
    },
  },
});

// Create a Mongoose model for the book
const BookModel = mongoose.model('Book', bookSchema);

export default BookModel
