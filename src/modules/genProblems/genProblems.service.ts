import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AiHttpService } from '../shared/http/ai-http.service';
import { CreateProblemDto } from './dto/genProblem.dto';

type exemples = {
  input: string;
  output: string;
};

type ProblemGeneratorResponse = {
  title: string;
  description: string;
  examples?: exemples[];
  constraints?: string;
  note?: string;
};

@Injectable()
export class ProblemGeneratorService {
  constructor(
    private readonly aiHttpService: AiHttpService,
    private readonly configService: ConfigService,
  ) {}

  async generate(payload: CreateProblemDto): Promise<ProblemGeneratorResponse> {
    const problemGeneratorApiUrl =
      this.configService.get<string>('GEN_PROBLEM_API');
    const appApiKey = this.configService.get<string>('API_KEY');

    return this.aiHttpService.post<ProblemGeneratorResponse>(
      `${problemGeneratorApiUrl}`,
      payload,
      {
        headers: {
          'X-API-KEY': appApiKey,
        },
      },
    );
  }
}
