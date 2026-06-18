import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PamBotModule } from './modules/pambot/pambot.module';
import { ScoreModule } from './modules/score/score.module';
import { ProblemGeneratorModule } from './modules/genProblems/genProblems.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PamBotModule,
    ScoreModule,
    ProblemGeneratorModule,
  ],
})
export class AppModule {}
