import { Module } from '@nestjs/common';
import { AiHttpService } from './ai-http.service';

@Module({
  providers: [AiHttpService],
  exports: [AiHttpService],
})
export class AiHttpModule {}
