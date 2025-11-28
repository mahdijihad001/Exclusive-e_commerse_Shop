import { ICategory } from "./category.interfaces";
export declare const categorySecvices: {
    createCategory: (payload: Partial<ICategory>) => Promise<import("mongoose").Document<unknown, {}, ICategory, {}, {}> & ICategory & Required<{
        _id: string;
    }> & {
        __v: number;
    }>;
    getAllCategory: (query: Record<string, string>) => Promise<{
        data: (import("mongoose").Document<unknown, {}, ICategory, {}, {}> & ICategory & Required<{
            _id: string;
        }> & {
            __v: number;
        })[];
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPage: number;
        };
    }>;
};
//# sourceMappingURL=category.services.d.ts.map