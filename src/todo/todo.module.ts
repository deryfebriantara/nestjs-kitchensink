import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TodoEntity } from './todo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity, UserEntity])],
  providers: [TodoService],
  controllers: [TodoController]
})
export class TodoModule { }
