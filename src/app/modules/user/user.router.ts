import { Router } from "express";
import { requestValidation } from "../../utils/validation.request";
import { createUserZodSchema } from "./user.request.validation";
import { userController } from "./user.controller";

const userRouter = Router();

userRouter.post("/create" , requestValidation(createUserZodSchema) , userController.createUser);

export default userRouter;