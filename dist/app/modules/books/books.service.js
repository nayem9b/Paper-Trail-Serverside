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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookCommentToDB = exports.deleteSpecificBookFromDB = exports.updateSpecificBookFromDB = exports.getSpecificBookFromDB = exports.createBookToDB = exports.getAllbooksFromDB = void 0;
const books_constant_1 = require("./books.constant");
const books_model_1 = require("./books.model");
const mongodb_1 = require("mongodb");
const getAllbooksFromDB = (filters) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    console.log(filters);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: books_constant_1.bookSearchableFields.map((field) => ({
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
    const whereCondition = andConditions.length > 0 ? { $and: andConditions } : {};
    const allBooks = yield books_model_1.Books.find(whereCondition);
    return allBooks;
});
exports.getAllbooksFromDB = getAllbooksFromDB;
const createBookToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const book = new books_model_1.Books(payload);
    yield book.save();
    console.log(book);
    return book;
});
exports.createBookToDB = createBookToDB;
const getSpecificBookFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const specificBook = yield books_model_1.Books.find({
        _id: new mongodb_1.ObjectId(payload),
    });
    return specificBook;
});
exports.getSpecificBookFromDB = getSpecificBookFromDB;
const updateSpecificBookFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = { _id: new mongodb_1.ObjectId(id) };
    const result = yield books_model_1.Books.findOneAndUpdate(filter, payload, { new: true });
    return result;
});
exports.updateSpecificBookFromDB = updateSpecificBookFromDB;
const deleteSpecificBookFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Books.findByIdAndDelete(id);
    return result;
});
exports.deleteSpecificBookFromDB = deleteSpecificBookFromDB;
const updateBookCommentToDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Books.findOneAndUpdate({ _id: new mongodb_1.ObjectId(id) }, payload, { new: true });
    return result;
});
exports.updateBookCommentToDB = updateBookCommentToDB;
