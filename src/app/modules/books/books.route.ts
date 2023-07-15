import express from "express";
import {
  createBook,
  deleteSpecificBook,
  getAllbooks,
  getSpecificBook,
  updateComment,
  updateSpecificBook,
} from "./books,controller";

const router = express.Router();

router.get("/books", getAllbooks);
router.post("/books", createBook);
router.get("/books/:id", getSpecificBook);
router.patch("/books/:id", updateSpecificBook);
router.delete("/books/:id", deleteSpecificBook);
router.patch("/comment/:id", updateComment);
export const BookRoutes = router;
