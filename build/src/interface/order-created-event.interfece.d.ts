import { Subjects } from "../enum/subjects.enum";
export interface OrderCreatedEvent {
    subject: Subjects.OrderCreated;
    data: {
        id: string;
        userId: string;
        expiresAt: string;
        status: string;
        version: number;
        ticket: {
            id: string;
            price: number;
        };
    };
}
//# sourceMappingURL=order-created-event.interfece.d.ts.map