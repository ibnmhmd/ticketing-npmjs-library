import { Subjects } from "../enum/subjects.enum";
export interface ITicketUpdatedEvent {
    subject: Subjects.TicketUpdated;
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
        version: number;
        orderId?: string;
    };
}