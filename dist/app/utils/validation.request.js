"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestValidation = void 0;
const requestValidation = (zodSchema) => async (req, res, next) => {
    try {
        req.body = await zodSchema.parseAsync(req.body);
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.requestValidation = requestValidation;
//# sourceMappingURL=validation.request.js.map