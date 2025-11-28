"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("./product.controller");
const protect_1 = require("../../middleware/protect");
const user_interfaces_1 = require("../user/user.interfaces");
const productRouter = (0, express_1.Router)();
productRouter.post("/create", (0, protect_1.protect)(user_interfaces_1.Role.ADMIN, user_interfaces_1.Role.SUPERADMIN), product_controller_1.productController.createProduct);
productRouter.delete("/delete/:id", (0, protect_1.protect)(user_interfaces_1.Role.ADMIN, user_interfaces_1.Role.SUPERADMIN), product_controller_1.productController.deleteProduct);
// {
//   "name": "Baby Cotton Romper",
//   "description": "Soft and comfortable cotton romper for babies.",
//   "price": 15.99,
//   "category": "6512a9b0f1a4e2b5c0d12345", 
//   "images": "https://example.com/images/romper1.jpg",
//   "status": "active",
//   "variants": [
//     {
//       "color": "Blue",
//       "size": "0-3 months",
//       "stock": 20
//     },
//     {
//       "color": "Pink",
//       "size": "3-6 months",
//       "stock": 15
//     }
//   ],
//   "ageGroup": "0-3 months"
// }
exports.default = productRouter;
//# sourceMappingURL=product.router.js.map