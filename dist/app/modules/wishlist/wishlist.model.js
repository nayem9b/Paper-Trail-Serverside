"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wishlist = void 0;
const mongoose_1 = require("mongoose");
const wishListSchema = new mongoose_1.Schema({
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
    user: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "will read",
    },
});
exports.Wishlist = (0, mongoose_1.model)("wishlist", wishListSchema);
