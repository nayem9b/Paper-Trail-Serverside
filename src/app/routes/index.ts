import express from "express";
import { BookRoutes } from "../modules/books/books.route";

const router = express.Router();
const moduleRoutes = [
  {
    path: "/",
    route: BookRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
