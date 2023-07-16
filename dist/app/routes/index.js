"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_route_1 = require("../modules/books/books.route");
const wishlist_route_1 = require("../modules/wishlist/wishlist.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: "/",
        route: books_route_1.BookRoutes,
    },
    {
        path: "/",
        route: wishlist_route_1.WishlistRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
