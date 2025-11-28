import { Router } from "express";
import { productController } from "./product.controller";
import { protect } from "../../middleware/protect";
import { Role } from "../user/user.interfaces";

const productRouter = Router();


productRouter.post("/create", protect(Role.ADMIN, Role.SUPERADMIN), productController.createProduct);
productRouter.delete("/delete/:id", protect(Role.ADMIN, Role.SUPERADMIN), productController.deleteProduct);


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



export default productRouter;