"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const custom_error_1 = require("../abstract/custom-error");
const errorHandler = (err, req, res, next) => {
    if (err instanceof custom_error_1.CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    return res.status(400).send({ errors: [{ message: err.message }] });
};
exports.errorHandler = errorHandler;
