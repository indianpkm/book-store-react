import { Box, Button, Dialog, TextField, styled } from "@mui/material";
import React from "react";
import { updateBook } from "../../api/updateBook";

const EditButton = styled(Button)`
  font-weight: 600;
  align-self: center;
  margin: 1rem;
  color: blue;
  width: 40%;
  font-size: 1rem;
  color: #fff;
`;

const dialogstyle = {
  height: "auto",
  width: "90%",
  maxWidth: "500px",
  maxHeight: "100%",
  overFlow: "hidden",
  padding: "2rem",
};

const EditDialog = ({ open, setOpen, book, updatedData, setUpdatedData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedData({
      ...updatedData,
      [name]: value,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editSave = async () => {
    try {
      const response = await updateBook(book._id, updatedData);
      const localData = JSON.parse(localStorage.getItem("localStorageData"));
      const indexToUpdate = localData.findIndex(
        (item) => item._id === book._id
      );
      const updatedItem = {
        ...localData[indexToUpdate],
        ...updatedData,
        price: {
          value: updatedData.price,
        },
      };
      localData[indexToUpdate] = updatedItem;
      localStorage.setItem("localStorageData", JSON.stringify(localData));

      alert("Book Updated");
      setOpen(false);
    } catch (error) {
      console.log("Login failed", error.message);
    }
  };

  const handleCancel = () => {
    setOpen(false);
    setUpdatedData({ ...book, price: book.price.value });
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: dialogstyle }}
      hideBackdrop={true}
    >
      <TextField
        autoFocus
        margin="dense"
        value={updatedData.title}
        label="Title"
        name="title"
        type="text"
        fullWidth
        onChange={handleChange}
        variant="standard"
      />
      <TextField
        margin="dense"
        value={updatedData.author}
        label="Author"
        name="author"
        type="text"
        fullWidth
        onChange={handleChange}
        variant="standard"
      />
      <TextField
        margin="dense"
        value={updatedData.price}
        label="Price"
        name="price"
        type="Number"
        fullWidth
        onChange={handleChange}
        variant="standard"
      />
      <TextField
        margin="dense"
        value={updatedData.summary}
        label="Summary"
        name="summary"
        type="text"
        fullWidth
        onChange={handleChange}
        variant="standard"
      />
      <TextField
        margin="dense"
        value={updatedData.image}
        label="Image"
        name="image"
        type="text"
        fullWidth
        onChange={handleChange}
        variant="standard"
      />
      <Box>
        <EditButton onClick={handleCancel} variant="contained" color="primary">
          Cancel
        </EditButton>
        <EditButton
          onClick={() => editSave()}
          variant="contained"
          color="primary"
        >
          Save
        </EditButton>
      </Box>
    </Dialog>
  );
};

export default EditDialog;
