"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Books = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
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
    image: {
        type: String,
        required: true,
    },
    reviews: {
        type: [String],
        required: true,
        default: [],
    },
    postedBy: {
        type: String,
    },
});
exports.Books = (0, mongoose_1.model)("books", bookSchema);
