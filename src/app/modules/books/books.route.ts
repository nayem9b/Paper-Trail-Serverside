import express from "express";
import { createBook, getAllbooks } from "./books,controller";

const router = express.Router();

router.get("/books", getAllbooks);
router.post("/books", createBook);
export const BookRoutes = router;
