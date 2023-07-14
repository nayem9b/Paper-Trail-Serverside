import { Schema, model } from "mongoose";
import { IBooks } from "./books.interface";
const bookSchema = new Schema<IBooks>({
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
  postedBy: {
    type: String,
  },
});

export const Books = model<IBooks>("books", bookSchema);
