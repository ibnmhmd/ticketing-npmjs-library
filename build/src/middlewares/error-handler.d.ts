import { Request, Response, NextFunction } from 'express';
declare const errorHandler: (err: Error, req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>>;
export { errorHandler };
//# sourceMappingURL=error-handler.d.ts.map