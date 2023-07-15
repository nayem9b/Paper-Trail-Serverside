import express from "express";
import { BookRoutes } from "../modules/books/books.route";
import { WishlistRoutes } from "../modules/wishlist/wishlist.route";

const router = express.Router();
const moduleRoutes = [
  {
    path: "/",
    route: BookRoutes,
  },
  {
    path: "/",
    route: WishlistRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
