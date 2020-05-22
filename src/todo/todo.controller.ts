import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { TodoEntity } from './todo.entity';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './todo.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';


@Crud({
  model: {
    type: TodoEntity
  },
  dto: {
    create: CreateTodoDto,
  },
  query: {
    join: {
      user: {
        persist: ['name'],
        exclude: ['create_at', 'updated_at', 'password'],
        eager: true,
        required: true
      }
    },
    alwaysPaginate: true

  }
})

@UseGuards(JwtAuthGuard)
@Controller('todo')
@ApiBearerAuth('JWT')
export class TodoController implements CrudController<TodoEntity> {
  constructor(public service: TodoService) { }
}