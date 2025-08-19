import { Router } from "express";
import { requestValidation } from "../../utils/validation.request";
import { createUserZodSchema } from "./user.request.validation";
import { userController } from "./user.controller";
import { protect } from "../../middleware/protect";
import { Role } from "./user.interfaces";

const userRouter = Router();

// Auth
userRouter.post("/login" , userController.loginUser);
userRouter.post("/refreshToken" , userController.createAccessTokenUseRefreshToken);

// User
userRouter.post("/create" , requestValidation(createUserZodSchema) , userController.createUser);
userRouter.get("/" , protect(Role.ADMIN , Role.SUPERADMIN) , userController.getallUser);
userRouter.get("/:id" , protect(...Object.values(Role)) , userController.getSingleUser);
 
export default userRouter;