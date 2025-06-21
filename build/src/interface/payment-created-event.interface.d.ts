import { Subjects } from "../enum/subjects.enum";
export interface PaymentCreatedEvent {
    subject: Subjects.PaymentCreated;
    data: {
        id: string;
        orderId: string;
        stripeId: string;
    };
}
//# sourceMappingURL=payment-created-event.interface.d.ts.map