import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { session } from 'telegraf';
import { TelegramService } from './otp.service';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: '5735350167:AAEldmP58LNstkGENCJpcHQ-07R0NhhwACk',
      middlewares: [session()],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, TelegramService],
})
export class AppModule {}
