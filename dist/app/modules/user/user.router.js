"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validation_request_1 = require("../../utils/validation.request");
const user_request_validation_1 = require("./user.request.validation");
const user_controller_1 = require("./user.controller");
const protect_1 = require("../../middleware/protect");
const user_interfaces_1 = require("./user.interfaces");
const userRouter = (0, express_1.Router)();
// Auth
userRouter.post("/login", user_controller_1.userController.loginUser);
userRouter.post("/refreshToken", user_controller_1.userController.createAccessTokenUseRefreshToken);
// User
userRouter.post("/create", (0, validation_request_1.requestValidation)(user_request_validation_1.createUserZodSchema), user_controller_1.userController.createUser);
userRouter.get("/", (0, protect_1.protect)(user_interfaces_1.Role.ADMIN, user_interfaces_1.Role.SUPERADMIN), user_controller_1.userController.getallUser);
userRouter.get("/:id", (0, protect_1.protect)(...Object.values(user_interfaces_1.Role)), user_controller_1.userController.getSingleUser);
userRouter.delete("/:id", (0, protect_1.protect)(user_interfaces_1.Role.ADMIN, user_interfaces_1.Role.SUPERADMIN), user_controller_1.userController.deleteSingleUser);
userRouter.patch("/:id", (0, protect_1.protect)(...Object.values(user_interfaces_1.Role)), user_controller_1.userController.updateUser);
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map