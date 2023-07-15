import express from "express";
import {
  createBook,
  getAllbooks,
  getSpecificBook,
  updateSpecificBook,
} from "./books,controller";

const router = express.Router();

router.get("/books", getAllbooks);
router.post("/books", createBook);
router.get("/books/:id", getSpecificBook);
router.patch("/books/:id", updateSpecificBook);
export const BookRoutes = router;
