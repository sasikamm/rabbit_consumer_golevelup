import { RabbitRPC, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { ConsumeMessage } from 'amqplib';

@Injectable()
export class MessagingService {
  @RabbitRPC({
    exchange: 'exchange1',
    routingKey: 'rpc-route',
    queue: 'rpc-queue',
  })
  public async rpcHandler(msg: {}) {
    return {
      response: 42,
    };
  }

  @RabbitSubscribe({
    exchange: 'exchange1',
    routingKey: 'subscribe-route',
    queue: 'subscribe-queue',
  })
  public async pubSubHandler(msg: {}, amqpMsg: ConsumeMessage) {
    console.log(msg);
    // console.log(`Correlation id: ${amqpMsg.properties.correlationId}`);
  }
}
