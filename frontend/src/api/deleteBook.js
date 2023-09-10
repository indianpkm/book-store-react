import axios from "axios";

const URL = "http://localhost:5000";

export const deleteBook = async (id) => {
  try {
    return await axios.delete(`${URL}/deletebook/${id}`);
  } catch (err) {
    console.log("Error while deleting", err.message);
  }
};
