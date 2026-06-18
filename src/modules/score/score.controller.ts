import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GradeCodeDto } from './dto/score.req.dto';
import { ScoreService } from './score.service';

@ApiTags('Score')
@Controller('score')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService) {}

  @Post('grade')
  @ApiOperation({ summary: 'Grade submitted code' })
  grade(@Body() body: GradeCodeDto) {
    return this.scoreService.grade(body);
  }
}
