import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly amqpConnection: AmqpConnection,
  ) {}

  @Get()
  getHello(): string {
    this.amqpConnection.publish('exchange1', 'subscribe-route', {
      msg: 'hello world....',
    });
    return this.appService.getHello();
  }

  // public publish(
  //   exchange: string,
  //   routingKey: string,
  //   message: any,
  //   options?: amqplib.Options.Publish,
  // );
}
