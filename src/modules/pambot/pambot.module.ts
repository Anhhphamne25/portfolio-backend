import { Module } from '@nestjs/common';
import { PamBotController } from './pambot.controller';
import { PamBotService } from './pambot.service';
import { AiHttpModule } from '../shared/http/ai-http.module';

@Module({
  imports: [AiHttpModule],
  controllers: [PamBotController],
  providers: [PamBotService],
})
export class PamBotModule {}
