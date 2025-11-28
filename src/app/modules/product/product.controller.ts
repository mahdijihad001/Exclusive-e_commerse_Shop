import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { productServices } from "./product.services";
import { AppError } from "../../utils/AppError";

const createProduct = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const result = await productServices.createProduct(data);

    sendResponse(res, {
        stautsCode: 201,
        success: true,
        message: "Product posted success",
        data: result
    })
});


const deleteProduct = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;

        const result = await productServices.deleteProduct(id as string);

        if (!result) throw new AppError(400, "Product not found")

        sendResponse(res, {
            stautsCode: 200,
            success: true,
            message: "Product deleted successfully",
            data: result,
        });
    }
);

const updateProduct = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const { id } = req.params;
        const payload = req.body;

        const result = await productServices.updateProduct(id as string, payload);

        if (!result) throw new AppError(200, "Product not found");

        sendResponse(res, {
            stautsCode: 200,
            success: true,
            message: "Product updated successfully",
            data: result,
        });
    }
);


export const productController = {
    createProduct,
    deleteProduct,
    updateProduct
}