import { Schema, model } from "mongoose";

import { IWishlist } from "./wishlist.interface";
import { IBooks } from "../books/books.interface";
const wishListSchema = new Schema<IWishlist>({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "will read",
  },
});

export const Wishlist = model<IWishlist>("wishlist", wishListSchema);
