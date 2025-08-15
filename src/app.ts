import express, { type Request, type Response } from "express";
export const app = express();


app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ success: true, message: "Exclusive E-commerce shop server runing successfully!" });
});