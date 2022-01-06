import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagingService } from './messaging/messaging.service';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'exchange1',
          type: 'topic',
        },
      ],
      uri: 'amqps://tutymvcm:hlLmigvxpATb2cBeNKkBWDJ_04Gn8GOW@gerbil.rmq.cloudamqp.com/tutymvcm',
    }),
    AppModule,
  ],
  controllers: [AppController],
  providers: [AppService, MessagingService],
})
export class AppModule {}
