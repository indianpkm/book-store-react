import express from "express";
import { getAllBook } from "../controller/getAllBook.js";
import { updateBook } from "../controller/updateBook.js";
import { deleteBook } from "../controller/deleteBook.js";
const router =express.Router()

router.get('/getbook',getAllBook)
router.put('/updatebook/:id',updateBook)
router.delete('/deletebook/:id',deleteBook)

export default router