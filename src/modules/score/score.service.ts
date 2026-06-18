import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AiHttpService } from '../shared/http/ai-http.service';
import { GradeCodeDto } from './dto/score.req.dto';

type ScoreResponse = {
  score: number;
  feedback: string;
};

@Injectable()
export class ScoreService {
  constructor(
    private readonly aiHttpService: AiHttpService,
    private readonly configService: ConfigService,
  ) {}

  async grade(payload: GradeCodeDto): Promise<ScoreResponse> {
    const scoreApiUrl = this.configService.get<string>('SCORE_API');
    const appApiKey = this.configService.get<string>('API_KEY');

    return this.aiHttpService.post<ScoreResponse>(`${scoreApiUrl}`, payload, {
      headers: {
        'X-API-KEY': appApiKey,
      },
    });
  }
}
