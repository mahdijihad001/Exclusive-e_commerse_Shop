import z from "zod";
export declare const createCategoryZodSchema: z.ZodObject<{
    name: z.ZodString;
    image: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    image: string;
}, {
    name: string;
    image: string;
}>;
export declare const categoryUpdateSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    image?: string | undefined;
}, {
    name?: string | undefined;
    image?: string | undefined;
}>;
//# sourceMappingURL=category.zod.schema.d.ts.map