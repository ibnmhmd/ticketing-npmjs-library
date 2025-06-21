import { CustomError } from "../abstract/custom-error";
export declare class DatabaseConnectionError extends CustomError {
    reason: string;
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
//# sourceMappingURL=database-connection-error.d.ts.map