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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWishlistFromDB = exports.getUserWishlistFromDB = exports.createWishlistToDB = void 0;
const wishlist_model_1 = require("./wishlist.model");
const mongodb_1 = require("mongodb");
const createWishlistToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const wishlist = new wishlist_model_1.Wishlist(payload);
    yield wishlist.save();
    console.log(wishlist);
    return wishlist;
});
exports.createWishlistToDB = createWishlistToDB;
const getUserWishlistFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const wishlist = yield wishlist_model_1.Wishlist.find({ user: payload });
    return wishlist;
});
exports.getUserWishlistFromDB = getUserWishlistFromDB;
const updateWishlistFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = { _id: new mongodb_1.ObjectId(id) };
    const result = yield wishlist_model_1.Wishlist.findOneAndUpdate(filter, payload, {
        new: true,
    });
    return result;
});
exports.updateWishlistFromDB = updateWishlistFromDB;
