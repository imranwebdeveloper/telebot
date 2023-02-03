import { Injectable } from '@nestjs/common';
import { Api, TelegramClient } from 'telegram';
import { StringSession } from 'telegram/sessions';
@Injectable()
export class TelegramService {
  private readonly client: TelegramClient;
  private api_hash: '1037c6877ee2438d527505d570c5196f';
  private api_id = 21185988;

  constructor() {
    this.client = new TelegramClient(
      new StringSession(''),
      (this.api_id = 21185988),
      (this.api_hash = '1037c6877ee2438d527505d570c5196f'),
      {},
    );
  }

  async sendCode(phoneNumber: string): Promise<Api.auth.SentCode> {
    await this.client.connect();

    return this.client.invoke(
      new Api.auth.SendCode({
        phoneNumber,
        apiId: this.api_id,
        apiHash: this.api_hash,
        settings: new Api.CodeSettings({
          allowFlashcall: true,
          currentNumber: true,
          allowAppHash: true,
          allowMissedCall: true,
          //   logoutTokens: [Buffer.from('arbitrary data here')],
        }),
      }),
    );
  }
}
