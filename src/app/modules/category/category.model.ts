import { model, Schema } from "mongoose";
import { ICategory } from "./category.interfaces";

const categorySchema = new Schema<ICategory>({
    name: {
        type: String,
        required: [true, "Category name must be required."],
        unique: true,
        trim: true
    },
    slug: {
        type: String,
        unique: true
    },
    image: {
        type: String,
        required: [true, "Category image must be required."]
    }
}, {
    timestamps: true,
    versionKey: false
});

categorySchema.pre("save", async function (next) {
    if (!this.isModified("name")) return next();

    const baseSlug = this.name.split(" ").join("-");

    this.slug = `${baseSlug}-category`;

    next();
});

categorySchema.pre("findOneAndUpdate", function (next) {
    const update: any = this.getUpdate();

    if (update.name) {
        const baseSlug = update.name.split(" ").join("-");
        update.slug = `${baseSlug}-category`
        this.setUpdate(update)
    }
    next();
});

const Category = model<ICategory>("category", categorySchema);

export default Category