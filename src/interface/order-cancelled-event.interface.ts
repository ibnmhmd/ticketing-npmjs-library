import { Subjects } from "../enum/subjects.enum";
export interface OrderCancelledEvent {
    subject: Subjects.OrderCancelled;
    data: {
        id: string;
        userId: string;
        version: number;
        ticket: {
            id: string;
            price: number;
        };
    };
}