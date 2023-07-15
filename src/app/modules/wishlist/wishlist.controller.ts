import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";

import sendResponse from "../../../shared/sendResponse";

import { IWishlist } from "./wishlist.interface";
import { createWishlistToDB } from "./wishlist.service";
export const createWishlist = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const result = await createWishlistToDB(data);
    sendResponse<IWishlist>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Wishlist CRETATED successfully !",
      data: result,
    });
  }
);
