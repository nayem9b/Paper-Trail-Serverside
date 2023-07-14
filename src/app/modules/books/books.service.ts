import { Books } from "./books.model";

export const getAllbooksFromDB = async () => {
  const allBooks = await Books.find({});
  return allBooks;
};
