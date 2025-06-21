"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const custom_error_1 = require("../abstract/custom-error");
class UnauthorizedError extends custom_error_1.CustomError {
    constructor() {
        super('Not authorized');
        this.statusCode = 401;
        // Only because we are extending a built-in class
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
    serializeErrors() {
        return [{ message: 'Not authorized' }];
    }
}
exports.UnauthorizedError = UnauthorizedError;
