import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import {
  createBookToDB,
  deleteSpecificBookFromDB,
  getAllbooksFromDB,
  getSpecificBookFromDB,
  updateSpecificBookFromDB,
  updateBookCommentToDB,
} from "./books.service";
import sendResponse from "../../../shared/sendResponse";
import { IBooks } from "./books.interface";
import pick from "../../../shared/pick";
import { bookFilterableFields } from "./books.constant";

export const getAllbooks = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const filters = pick(req.query, bookFilterableFields);
    const allBooks = await getAllbooksFromDB(filters);
    sendResponse<IBooks[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Books retrived",
      data: allBooks,
    });
  }
);

export const createBook = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const result = await createBookToDB(data);
    sendResponse<IBooks>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book CRETATED successfully !",
      data: result,
    });
  }
);

export const getSpecificBook = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const result = await getSpecificBookFromDB(id);
    sendResponse<IBooks[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Books retrieved successfully !",
      data: result,
    });
  }
);

export const updateSpecificBook = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const updateData = req.body;
    const result = await updateSpecificBookFromDB(id, updateData);

    sendResponse<IBooks>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book UPDATED successfully !",
      data: result,
    });
  }
);

export const deleteSpecificBook = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    // console.log(id, result);
    const id = req.params.id;
    const result = await deleteSpecificBookFromDB(id);
    // console.log(JSON.stringify(id));
    sendResponse<IBooks>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book DELETED successfully !",
      data: result,
    });
  }
);

export const updateComment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const updateData = req.body;
    console.log(id, updateData);

    const result = await updateBookCommentToDB(id, updateData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Book UPDATED successfully !",
      data: result,
    });
  }
);
