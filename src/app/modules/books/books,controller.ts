import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import { getAllbooksFromDB } from "./books.service";
import sendResponse from "../../../shared/sendResponse";
import { IBooks } from "./books.interface";

export const getAllbooks = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const allBooks = await getAllbooksFromDB();
    sendResponse<IBooks[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Books retrived",
      data: allBooks,
    });
  }
);
