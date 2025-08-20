import { categorySearchAbleFild } from "../../constrain/constrain";
import { AppError } from "../../utils/AppError";
import { QueryBuilder } from "../../utils/QueryBuilder";
import { ICategory } from "./category.interfaces";
import Category from "./category.model";

const createCategory = async (payload: Partial<ICategory>) => {
    const existCategory = await Category.findOne({ name: payload.name });

    if (existCategory) {
        throw new AppError(400, "This category already hare.");
    };

    const result = await Category.create(payload);

    return result

};

const getAllCategory = async (query: Record<string, string>) => {

    const baseQuery = new QueryBuilder(Category.find(), query);

    const data = await baseQuery.filter().search(categorySearchAbleFild).paginate().sort().build();
    const meta = await baseQuery.getMeta();

    return { data, meta };

}

export const categorySecvices = {
    createCategory,
    getAllCategory
}