import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthLoginDto } from './dto/AuthLoginDto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async userLogin(loginParam: AuthLoginDto) {
    const user = await this.userService.getUserByEmail(loginParam.email);
    const isPasswordMatch = await bcrypt.compare(
      loginParam.password,
      user.password,
    );
    if (!user)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    if (!isPasswordMatch)
      throw new HttpException('Password not match', HttpStatus.BAD_REQUEST);
    const payload = { sub: user.id, username: user.firstName };
    const authToken = await this.jwtService.signAsync(payload);
    return !user
      ? 'User not found'
      : { data: { user: user, token: authToken } };
  }

  validateToken(token: string) {
    return {};
  }
}
