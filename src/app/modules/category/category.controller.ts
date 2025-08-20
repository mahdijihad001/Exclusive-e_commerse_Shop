import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { categorySecvices } from "./category.services";
import { sendResponse } from "../../utils/sendResponse";

const createCategory = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await categorySecvices.createCategory(req.body);

    sendResponse(res, {
        stautsCode: 201,
        success: true,
        message: "Category created success.",
        data: result
    })

});

const getAllCategory = catchAsync(async(req : Request , res : Response , next : NextFunction) =>{
    const query = req.query
    const result = await categorySecvices.getAllCategory(query as Record<string , string>);

    sendResponse(res , {
        stautsCode : 200,
        success : true,
        message : "All Category Retrived successfully.",
        data : result.data,
        meta : result.meta
    })

})

export const categoryController = {
    createCategory,
    getAllCategory
}