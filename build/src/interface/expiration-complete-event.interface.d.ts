import { Subjects } from "../enum/subjects.enum";
export interface ExpirationCompleteEvent {
    subject: Subjects.ExpirationComplete;
    data: {
        orderId: string;
    };
}
//# sourceMappingURL=expiration-complete-event.interface.d.ts.map