import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
    id: string;
    email: string;
}

// Augment the Express Request interface to include currentUser
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}

export const currentUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.session?.jwt) {
        return next();
    }

    try {
        const payload = jwt.verify(
            req.session.jwt,
            process.env.JWT_KEY!
        ) as UserPayload;
        req.currentUser = payload;
    } catch (err) {
        // If verification fails, just proceed without setting currentUser
    }

    next();
};