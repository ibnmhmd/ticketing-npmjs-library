import { Subjects } from "../enum/subjects.enum";
export interface ITicketCreatedEvent {
    subject: Subjects.TicketCreated;
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
        version: number;
    };
}
//# sourceMappingURL=ticket-created-event.interface.d.ts.map