import axios from "axios";

const URL = "http://localhost:8000";

export const updateBook = async (id, data) => {
  try {
    return await axios.put(`${URL}/updatebook/${id}`, data);
  } catch (err) {
    console.log("Error while signup", err.message);
  }
};
