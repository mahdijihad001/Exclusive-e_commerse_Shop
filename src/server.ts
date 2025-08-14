import express, { type Request, type Response } from "express";
const port = 3500;

const app = express();


app.get("/" , (req : Request , res : Response) =>{
    res.status(200).json({success : true , message : "Exclusive E-commerce shop server runing successfully!"});
})

app.listen(port , () =>{
    console.log("Exclusive E-commerce shop server runing successfully!");
})