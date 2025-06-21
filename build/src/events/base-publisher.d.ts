import { Stan } from 'node-nats-streaming';
import { IPublisherEvent } from '../interface/publisher-event.interface';
export declare abstract class Publisher<T extends IPublisherEvent> {
    abstract subject: T['subject'];
    protected client: Stan;
    constructor(client: Stan);
    publish(data: T['data']): Promise<void>;
}
//# sourceMappingURL=base-publisher.d.ts.map