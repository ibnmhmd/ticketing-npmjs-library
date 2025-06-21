import { CustomError } from '../abstract/custom-error';
export declare class UnauthorizedError extends CustomError {
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
//# sourceMappingURL=unauthorized-error.d.ts.map