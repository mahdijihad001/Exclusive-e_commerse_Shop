"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const category_controller_1 = require("./category.controller");
const protect_1 = require("../../middleware/protect");
const user_interfaces_1 = require("../user/user.interfaces");
const validation_request_1 = require("../../utils/validation.request");
const category_zod_schema_1 = require("./category.zod.schema");
const categoryRouter = (0, express_1.Router)();
categoryRouter.post("/create", (0, validation_request_1.requestValidation)(category_zod_schema_1.createCategoryZodSchema), (0, protect_1.protect)(user_interfaces_1.Role.ADMIN, user_interfaces_1.Role.SUPERADMIN), category_controller_1.categoryController.createCategory);
categoryRouter.get("/", (0, protect_1.protect)(user_interfaces_1.Role.ADMIN, user_interfaces_1.Role.SUPERADMIN), category_controller_1.categoryController.getAllCategory);
exports.default = categoryRouter;
//# sourceMappingURL=category.router.js.map