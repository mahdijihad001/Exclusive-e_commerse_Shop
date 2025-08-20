import express, { type Request, type Response } from "express";
export const app = express();
import cors from "cors";
import cookiePerser from "cookie-parser";
import userRouter from "./app/modules/user/user.router";
import { globalErrorHanle } from "./app/middleware/gbalErrorHandle";
import { notFoundRoute } from "./app/middleware/notFoundRoute";
import categoryRouter from "./app/modules/category/category.router";

// Middleware

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(cookiePerser());

// Api Routes
app.use("/user" , userRouter);
app.use("/category" , categoryRouter);



app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ success: true, message: "Exclusive E-commerce shop server runing successfully!" });
});


app.use(globalErrorHanle);
app.use(notFoundRoute);