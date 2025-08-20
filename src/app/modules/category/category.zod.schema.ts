import z from "zod";

export const createCategoryZodSchema = z.object({
    name : z.string({required_error : "Category name must be required"}),
    image : z.string({required_error : "Category Image must be required"})
})
export const categoryUpdateSchema = z.object({
    name : z.string({required_error : "Category name must be required"}).optional(),
    image : z.string({required_error : "Category Image must be required"}).optional()
})