"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listener = void 0;
class Listener {
    constructor(client) {
        this.client = client;
        this.ackWait = 5 * 1000; // default ack wait time, adjust as needed
    }
    subscriptionOptions() {
        return this.client
            .subscriptionOptions()
            .setDeliverAllAvailable()
            .setManualAckMode(true)
            .setAckWait(this.ackWait)
            .setDurableName(this.queueGroupName);
    }
    listen() {
        const subscription = this.client.subscribe(this.subject, this.queueGroupName, this.subscriptionOptions());
        subscription.on("message", (msg) => {
            const parsedData = this.parseMessage(msg);
            console.log(`received a message on channel ${this.subject} with the below data :`);
            console.log(parsedData);
            this.onMessage(parsedData, msg);
        });
    }
    parseMessage(msg) {
        const data = msg.getData();
        if (typeof data === 'string') {
            return JSON.parse(data);
        }
        return JSON.parse(data.toString('utf8'));
    }
}
exports.Listener = Listener;
