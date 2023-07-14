import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { getAllbooksFromDB } from "./books.service";
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
