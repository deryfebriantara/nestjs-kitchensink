import { Controller, UseGuards, Get, Request, Param, UseInterceptors } from '@nestjs/common';

import {
  Crud, CrudController,
  Override,
  CrudRequest,
  ParsedRequest,
  ParsedBody,
  CreateManyDto,
  CrudRequestInterceptor,
} from '@nestjsx/crud';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto'
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@Crud({
  model: {
    type: UserEntity,
  },
  dto: {
    create: CreateUserDto,
  },
  query: {
    exclude: ['password']
  }
})

@UseGuards(JwtAuthGuard)
@ApiBearerAuth('JWT')
@Controller('user')
export class UserController implements CrudController<UserEntity> {
  constructor(public service: UserService) { }

  get base(): CrudController<UserEntity> {
    return this;
  }

  //example overriding routes
  @Override('getOneBase')
  @UseGuards(JwtAuthGuard)
  async getOneAndDoStuff(
    @ParsedRequest() req: CrudRequest) {
    return await this.base.getOneBase(req);
  }


}

