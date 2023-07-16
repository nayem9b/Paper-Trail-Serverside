"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateComment = exports.deleteSpecificBook = exports.updateSpecificBook = exports.getSpecificBook = exports.createBook = exports.getAllbooks = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const books_service_1 = require("./books.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const pick_1 = __importDefault(require("../../../shared/pick"));
const books_constant_1 = require("./books.constant");
exports.getAllbooks = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, books_constant_1.bookFilterableFields);
    const allBooks = yield (0, books_service_1.getAllbooksFromDB)(filters);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Books retrived",
        data: allBooks,
    });
}));
exports.createBook = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const result = yield (0, books_service_1.createBookToDB)(data);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Book CRETATED successfully !",
        data: result,
    });
}));
exports.getSpecificBook = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield (0, books_service_1.getSpecificBookFromDB)(id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Books retrieved successfully !",
        data: result,
    });
}));
exports.updateSpecificBook = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updateData = req.body;
    const result = yield (0, books_service_1.updateSpecificBookFromDB)(id, updateData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Book UPDATED successfully !",
        data: result,
    });
}));
exports.deleteSpecificBook = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(id, result);
    const id = req.params.id;
    const result = yield (0, books_service_1.deleteSpecificBookFromDB)(id);
    // console.log(JSON.stringify(id));
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Book DELETED successfully !",
        data: result,
    });
}));
exports.updateComment = (0, catchAsync_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updateData = req.body;
    console.log(id, updateData);
    const result = yield (0, books_service_1.updateBookCommentToDB)(id, updateData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Book UPDATED successfully !",
        data: result,
    });
}));
