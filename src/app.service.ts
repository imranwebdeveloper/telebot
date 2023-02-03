import { Injectable } from '@nestjs/common';

import {
  Update,
  Ctx,
  Start,
  Help,
  On,
  Hears,
  Use,
  Next,
  Action,
  TelegrafContextType,
  TelegrafExecutionContext,
} from 'nestjs-telegraf';
import {
  Context,
  Markup,
  Telegraf,
  Scenes,
  Telegram,
  TelegramError,
} from 'telegraf';
import { api } from './mtr.service';
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';
import { TelegramService } from './otp.service';

@Update()
@Injectable()
export class AppService {
  constructor(private telegramService: TelegramService) {}

  @Start()
  async start(@Ctx() ctx) {
    await ctx.reply('Welcome');
    ctx.session.stage = 'next-1';
  }

  @Hears('hi')
  async hears(@Ctx() ctx: Context) {
    await ctx.reply(`Hey there **Hello**`, {
      parse_mode: 'MarkdownV2',
      protect_content: false,
    });
  }

  // @On('message')
  // async onMessage(@Ctx() ctx: Context) {
  //   const id = ctx.chat.id;
  //   const url = `https://api.telegram.org/bot5735350167:AAEldmP58LNstkGENCJpcHQ-07R0NhhwACk/sendMessage`;
  //   const response = await axios.post(url, { chat_id: id, text: 'Hello Imra' });
  //   // return response.data;
  //   console.log(ctx);
  // }

  @On('message')
  async onMessage(@Ctx() ctx: Context) {
    const api_hash = '1037c6877ee2438d527505d570c5196f';
    const api_id = 21185988;
    const phone = '+8801950940647';
    this.telegramService.sendCode(phone);

    // ====================================================================

    // const res = await api.call('auth.sendCode', {
    //   phone_number: phone,
    //   settings: {
    //     _: 'codeSettings',
    //   },
    // });
    // console.log(res);

    // ==============================================================================

    // const mtproto = new MTProto({
    //   api_id,
    //   api_hash,
    //   test: true,
    // });

    // console.log(ctx.message);
    // ctx.sendMessage('takenn phone number', {
    //   reply_markup: {
    //     one_time_keyboard: true,
    //     keyboard: [
    //       [
    //         {
    //           text: 'My phone number',
    //           request_contact: true,
    //         },
    //       ],
    //       ['Cancel'],
    //     ],
    //   },
    // });
    // try {
    //   const session = new StringSession(''); // You should put your string session here
    //   const client = new TelegramClient(session, api_id, api_hash, {});
    //   await client.connect();

    //   const t = await client.getMe(true);
    //   console.log(t);
    // } catch (error) {
    //   console.log(error.message); // prints the error
    // }

    // const phone = '+8801950940647';

    // const test = await api.call('auth.sendCode', {
    //   phone_number: phone,
    //   settings: {
    //     _: 'codeSettings',
    //   },
    // });
    // console.log(test);

    // const user = await api.call('users.getFullUser', {
    //   id: {
    //     _: 'inputUserSelf',
    //   },
    // });
    // console.log(user);
  }
}
