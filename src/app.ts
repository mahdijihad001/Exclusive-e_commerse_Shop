import express, { type Request, type Response } from "express";
export const app = express();
import cors from "cors";
import userRouter from "./app/modules/user/user.router";
import { globalErrorHanle } from "./app/middleware/gbalErrorHandle";
import { notFoundRoute } from "./app/middleware/notFoundRoute";

// Middleware

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());


app.use("/user" , userRouter);

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ success: true, message: "Exclusive E-commerce shop server runing successfully!" });
});


app.use(globalErrorHanle);
app.use(notFoundRoute);