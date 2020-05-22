import { Test, TestingModule } from '@nestjs/testing';
import { TodoService } from './todo.service';
import { TodoEntity } from './todo.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config'

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'mysql',
          host: process.env.DATABASE_HOST,
          port: parseInt(process.env.DATABASE_PORT) || 3306,
          username: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_DB,
          entities: ['./**/*.entity.ts'],
          synchronize: false,
        }),
        TypeOrmModule.forFeature([TodoEntity])],
      providers: [TodoService],
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
