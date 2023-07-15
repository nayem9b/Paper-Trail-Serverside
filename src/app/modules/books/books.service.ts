import { IGenericresponse } from "../../../interface/common";
import { bookSearchableFields } from "./books.constant";
import { IBookFilters, IBooks } from "./books.interface";
import { Books } from "./books.model";
import { ObjectId } from "mongodb";

export const getAllbooksFromDB = async (
  filters: IBookFilters
): Promise<IBooks[]> => {
  const { searchTerm, ...filtersData } = filters;
  console.log(filters);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: bookSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }
  const whereCondition =
    andConditions.length > 0 ? { $and: andConditions } : {};
  const allBooks = await Books.find(whereCondition);
  return allBooks;
};

export const createBookToDB = async (payload: IBooks): Promise<IBooks> => {
  const book = new Books(payload);
  await book.save();
  console.log(book);
  return book;
};

export const getSpecificBookFromDB = async (payload: string) => {
  const specificBook = await Books.find({
    _id: new ObjectId(payload),
  });
  return specificBook;
};

export const updateSpecificBookFromDB = async (
  id: string,
  payload: Partial<IBooks>
) => {
  const filter = { _id: new ObjectId(id) };
  const result = await Books.findOneAndUpdate(filter, payload, { new: true });
  return result;
};

export const deleteSpecificBookFromDB = async (
  id: string
): Promise<IBooks | null> => {
  const result = await Books.findByIdAndDelete(id);
  return result;
};

export const updateBookCommentToDB = async (
  id: string,
  payload: Partial<IBooks[]>
) => {
  const result = await Books.findOneAndUpdate(
    { _id: new ObjectId(id) },
    payload,
    { new: true }
  );
  return result;
};
