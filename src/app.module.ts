import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PamBotModule } from './modules/pambot/pambot.module';
import { ScoreModule } from './modules/score/score.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PamBotModule,
    ScoreModule,
  ],
})
export class AppModule {}
