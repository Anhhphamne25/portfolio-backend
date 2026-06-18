import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GradeCodeDto {
  @ApiProperty({
    example: 'Viết hàm tính tổng hai số nguyên a và b.',
    description: 'Problem statement',
  })
  @IsString()
  @IsNotEmpty()
  'problem': string;

  @ApiProperty({
    example: 'def add(a, b):\n    return a + b',
    description: 'Student submitted code',
  })
  @IsString()
  @IsNotEmpty()
  'student_code': string;

  @ApiProperty({
    example: 'def add(a, b):\n    return a + b',
    description: 'Reference/sample solution code',
  })
  @IsString()
  @IsNotEmpty()
  'sample_code': string;
}
