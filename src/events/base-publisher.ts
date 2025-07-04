import { Stan } from 'node-nats-streaming';
import { IPublisherEvent } from '../interface/publisher-event.interface';
export abstract class Publisher<T extends IPublisherEvent> {
    abstract subject: T['subject'];
    protected client: Stan;
    constructor(client: Stan) {
        this.client = client;
    }
    publish(data: T['data']): Promise<void> {
        console.log(`publishing a message to ${this.subject}`);
        console.log(data);
        return new Promise((resolve, reject) => {
            this.client.publish(this.subject, JSON.stringify(data), (err) => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }
}
