import express from "express";
import { getAllbooks } from "./books,controller";

const router = express.Router();

router.get("/books", getAllbooks);

export const BookRoutes = router;
