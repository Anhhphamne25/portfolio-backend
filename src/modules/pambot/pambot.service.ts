import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AiHttpService } from '../shared/http/ai-http.service';
import { AskPamBotDto } from './dto/pambot.req.dto';

@Injectable()
export class PamBotService {
  constructor(
    private readonly aiHttpService: AiHttpService,
    private readonly configService: ConfigService,
  ) {}

  async ask(payload: AskPamBotDto) {
    const pambotApiUrl = this.configService.get<string>('PAMBOT_API');
    const appApiKey = this.configService.get<string>('API_KEY');

    return this.aiHttpService.post(`${pambotApiUrl}`, payload, {
      headers: {
        'X-APP-API-KEY': appApiKey,
      },
    });
  }
}
