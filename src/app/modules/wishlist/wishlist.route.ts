import express from "express";
import { createWishlist } from "./wishlist.controller";
const router = express.Router();
router.post("/wishlist", createWishlist);

export const WishlistRoutes = router;
