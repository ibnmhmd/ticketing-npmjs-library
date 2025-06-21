import { Message, Stan } from "node-nats-streaming";
import { IListenerEvent } from "../interface/listener-event.interface";
export declare abstract class Listener<T extends IListenerEvent> {
    abstract readonly subject: T['subject'];
    abstract queueGroupName: string;
    abstract onMessage(data: T['data'], msg: Message): void;
    protected client: Stan;
    protected ackWait: number;
    constructor(client: Stan);
    private subscriptionOptions;
    listen(): void;
    parseMessage(msg: Message): any;
}
//# sourceMappingURL=base-listener.d.ts.map