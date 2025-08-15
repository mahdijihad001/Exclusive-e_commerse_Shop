import express, { type Request, type Response } from "express";
export const app = express();
import cors from "cors";

// Middleware

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ success: true, message: "Exclusive E-commerce shop server runing successfully!" });
});