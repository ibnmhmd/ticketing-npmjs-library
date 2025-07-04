"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
const custom_error_1 = require("../abstract/custom-error");
class RequestValidationError extends custom_error_1.CustomError {
    constructor(errors) {
        super('Invalid request parameters');
        this.statusCode = 400;
        this.errors = errors;
        // Only because we are extending a built-in class
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    serializeErrors() {
        return this.errors.map((error) => {
            if (error.type === 'field') {
                return { message: error.msg, field: error.path };
            }
            return { message: error.msg };
        });
    }
}
exports.RequestValidationError = RequestValidationError;
