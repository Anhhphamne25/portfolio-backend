import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateProblemDto } from './dto/genProblem.dto';
import { ProblemGeneratorService } from './genProblems.service';

@ApiTags('Problem Generator')
@Controller('problem-generator')
export class ProblemGeneratorController {
  constructor(
    private readonly problemGeneratorService: ProblemGeneratorService,
  ) {}

  @Post('generate')
  @ApiOperation({ summary: 'Generate a programming problem' })
  generate(@Body() body: CreateProblemDto) {
    return this.problemGeneratorService.generate(body);
  }
}
