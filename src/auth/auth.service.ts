import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bycrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from 'src/user/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService) { }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne({ where: { username: username } });
    const compared = await bycrypt.compare(password, user.password)

    if (user && compared) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: LoginUserDto) {
    const payload = { username: user.username, password: user.password };
    return {
      user: user,
      access_token: this.jwtService.sign(payload),
    };
  }
}
