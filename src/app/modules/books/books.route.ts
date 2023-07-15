import express from "express";
import { createBook, getAllbooks, getSpecificBook } from "./books,controller";

const router = express.Router();

router.get("/books", getAllbooks);
router.post("/books", createBook);
router.get("/books/:id", getSpecificBook);
export const BookRoutes = router;
