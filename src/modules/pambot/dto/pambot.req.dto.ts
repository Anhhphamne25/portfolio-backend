import { IsNotEmpty, IsString } from 'class-validator';

export class AskPamBotDto {
  @IsString()
  @IsNotEmpty()
  'question': string;
}
