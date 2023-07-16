import express from "express";
import { createWishlist, getUserWishlist } from "./wishlist.controller";
const router = express.Router();
router.post("/wishlist", createWishlist);
router.get("/wishlist/:id", getUserWishlist);
export const WishlistRoutes = router;
