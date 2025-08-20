import { Router } from "express";
import { categoryController } from "./category.controller";
import { protect } from "../../middleware/protect";
import { Role } from "../user/user.interfaces";
import { requestValidation } from "../../utils/validation.request";
import { createCategoryZodSchema } from "./category.zod.schema";

const categoryRouter = Router();

categoryRouter.post("/create" , requestValidation(createCategoryZodSchema) , protect(Role.ADMIN , Role.SUPERADMIN) ,categoryController.createCategory);
categoryRouter.get("/" , protect(Role.ADMIN , Role.SUPERADMIN) ,categoryController.getAllCategory);





export default categoryRouter;