import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { UserService } from '../user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../user/user.entity';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import 'dotenv/config'

describe('Auth Controller', () => {

  let controller: AuthController;


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
        }), TypeOrmModule.forFeature([UserEntity]), TypeOrmModule.forFeature([UserEntity]), JwtModule.register({
          secret: 'derygantengsekali',
          signOptions: { expiresIn: '1d' },
        }), UserModule, PassportModule
      ],
      controllers: [AuthController],
      providers: [AuthService, JwtStrategy, LocalStrategy, UserService]
    }).compile();

    controller = module.get<AuthController>(AuthController);

  });

  it('controller should be defined', () => {
    expect(controller).toBeDefined();
  });


});
