import { Module } from '@nestjs/common';
import { AiHttpModule } from '../shared/http/ai-http.module';
import { ScoreController } from './score.controller';
import { ScoreService } from './score.service';

@Module({
  imports: [AiHttpModule],
  controllers: [ScoreController],
  providers: [ScoreService],
})
export class ScoreModule {}
