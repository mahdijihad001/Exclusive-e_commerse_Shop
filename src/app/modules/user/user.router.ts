import { Router } from "express";
import { requestValidation } from "../../utils/validation.request";
import { createUserZodSchema } from "./user.request.validation";
import { userController } from "./user.controller";
import { protect } from "../../middleware/protect";

const userRouter = Router();

userRouter.post("/create" , requestValidation(createUserZodSchema) , userController.createUser);
userRouter.post("/login" , userController.loginUser);
userRouter.post("/refreshToken" , protect() , userController.createAccessTokenUseRefreshToken);
 
export default userRouter;