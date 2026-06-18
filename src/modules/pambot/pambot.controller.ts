import { Body, Controller, Post } from '@nestjs/common';
import { PamBotService } from './pambot.service';
import { AskPamBotDto } from './dto/pambot.req.dto';

@Controller('pambot')
export class PamBotController {
  constructor(private readonly pambotService: PamBotService) {}

  @Post('ask')
  ask(@Body() body: AskPamBotDto) {
    return this.pambotService.ask(body);
  }
}
