import { Schema, model } from "mongoose";
import { IBooks } from "./books.interface";
const bookSchema = new Schema<IBooks>({
  Title: {
    type: String,
    required: true,
  },
  Author: {
    type: String,
    required: true,
  },
  Genre: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: String,
    required: true,
  },
});

export const Books = model<IBooks>("books", bookSchema);
