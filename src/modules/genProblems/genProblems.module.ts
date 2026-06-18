import { Module } from '@nestjs/common';
import { AiHttpModule } from '../shared/http/ai-http.module';
import { ProblemGeneratorController } from './genProblems.controller';
import { ProblemGeneratorService } from './genProblems.service';

@Module({
  imports: [AiHttpModule],
  controllers: [ProblemGeneratorController],
  providers: [ProblemGeneratorService],
})
export class ProblemGeneratorModule {}
