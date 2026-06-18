import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PamBotModule } from './modules/pambot/pambot.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PamBotModule,
  ],
})
export class AppModule {}
