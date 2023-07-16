"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoutes = void 0;
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./books,controller");
const router = express_1.default.Router();
router.get("/books", books_controller_1.getAllbooks);
router.post("/books", books_controller_1.createBook);
router.get("/books/:id", books_controller_1.getSpecificBook);
router.patch("/books/:id", books_controller_1.updateSpecificBook);
router.delete("/books/:id", books_controller_1.deleteSpecificBook);
router.patch("/comment/:id", books_controller_1.updateComment);
exports.BookRoutes = router;
