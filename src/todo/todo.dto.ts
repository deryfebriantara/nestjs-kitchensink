import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from '../user/user.dto';

export class CreateTodoDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  is_done: boolean;

  @ApiProperty()
  create_at: Date;

  @ApiProperty()
  user: string;

  @ApiProperty()
  updated_at: Date;
}