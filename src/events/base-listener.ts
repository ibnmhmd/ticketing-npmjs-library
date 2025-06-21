import { Message, Stan, SubscriptionOptions } from "node-nats-streaming";
import { IListenerEvent } from "../interface/listener-event.interface";
export abstract class Listener<T extends IListenerEvent> {
    abstract readonly subject: T['subject'];
    abstract queueGroupName: string;
    abstract onMessage(data: T['data'], msg: Message): void;
    protected client: Stan;
    protected ackWait: number;

    constructor(client: Stan) {
        this.client = client;
        this.ackWait = 5 * 1000; // default ack wait time, adjust as needed
    }

    private subscriptionOptions(): SubscriptionOptions {
        return this.client
            .subscriptionOptions()
            .setDeliverAllAvailable()
            .setManualAckMode(true)
            .setAckWait(this.ackWait)
            .setDurableName(this.queueGroupName);
}

    listen(): void {
        const subscription = this.client.subscribe(
            this.subject,
            this.queueGroupName,
            this.subscriptionOptions()
        );

        subscription.on("message", (msg: Message) => {
            const parsedData = this.parseMessage(msg);
            console.log(`received a message on channel ${this.subject} with the below data :`);
            console.log(parsedData);
            this.onMessage(parsedData, msg);
        });
    }

    parseMessage(msg: Message): any {
        const data = msg.getData();
        if (typeof data === 'string') {
            return JSON.parse(data);
        }
        return JSON.parse(data.toString('utf8'));
    }
}
