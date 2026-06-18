import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsString } from 'class-validator';

export class CreateProblemDto {
  @ApiProperty({
    example: 'array',
    description: 'Programming topic',
  })
  @IsString()
  @IsNotEmpty()
  'topic': string;

  @ApiProperty({
    example: 'easy',
    description: 'Problem difficulty',
    enum: ['easy', 'medium', 'hard'],
  })
  @IsString()
  @IsNotEmpty()
  @IsIn(['easy', 'medium', 'hard'])
  'difficulty': string;

  @ApiProperty({
    example: 'Python',
    description: 'Programming language',
  })
  @IsString()
  @IsNotEmpty()
  'language': string;
}
