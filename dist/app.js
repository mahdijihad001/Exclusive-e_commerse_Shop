"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const user_router_1 = __importDefault(require("./app/modules/user/user.router"));
const gbalErrorHandle_1 = require("./app/middleware/gbalErrorHandle");
const notFoundRoute_1 = require("./app/middleware/notFoundRoute");
const category_router_1 = __importDefault(require("./app/modules/category/category.router"));
// Middleware
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
exports.app.use((0, cors_1.default)());
exports.app.use((0, cookie_parser_1.default)());
// Api Routes
exports.app.use("/user", user_router_1.default);
exports.app.use("/category", category_router_1.default);
exports.app.get("/", (req, res) => {
    res.status(200).json({ success: true, message: "Exclusive E-commerce shop server runing successfully!" });
});
exports.app.use(gbalErrorHandle_1.globalErrorHanle);
exports.app.use(notFoundRoute_1.notFoundRoute);
//# sourceMappingURL=app.js.map