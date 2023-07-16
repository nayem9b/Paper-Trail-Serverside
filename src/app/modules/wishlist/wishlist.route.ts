import express from "express";
import {
  createWishlist,
  getUserWishlist,
  updateWishlist,
} from "./wishlist.controller";
const router = express.Router();
router.post("/wishlist", createWishlist);
router.get("/wishlist/:id", getUserWishlist);
router.patch("/wishlist/:id", updateWishlist);
export const WishlistRoutes = router;
